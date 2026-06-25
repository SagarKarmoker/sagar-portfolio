// ponytail: import from 'node' dist variant to bypass Turbopack resolving
// @keystatic/core/api/generic to the 'react-server' stub that lacks local CRUD.
// Use direct dist path + resolve alias in next.config.mjs (see resolveAlias).
// Revisit when @keystatic/next or Next.js/Turbopack export-condition resolution
// correctly serves the 'node' variant for route handlers.
import { makeGenericAPIRouteHandler } from '../../../../node_modules/@keystatic/core/dist/keystatic-core-api-generic.node.js';
import config from '../../../../keystatic.config';

// Hook into global fetch to capture the exact requests and responses from GitHub
let lastGitHubRequest = null;
let lastGitHubResponse = null;
let currentRequestHeaders = null;
let isLastRequestUnauthorized = false;

const originalFetch = globalThis.fetch;
globalThis.fetch = async function (input, init) {
  let urlStr = '';
  if (typeof input === 'string') {
    urlStr = input;
  } else if (input instanceof URL) {
    urlStr = input.toString();
  } else if (input && typeof input === 'object' && 'url' in input) {
    urlStr = input.url;
  } else if (input && typeof input.toString === 'function') {
    urlStr = input.toString();
  }

  console.log('[keystatic fetch intercept] url:', urlStr);

  if (urlStr.includes('github.com')) {
    lastGitHubRequest = {
      url: urlStr,
      method: init?.method || 'GET',
      headers: init?.headers,
    };
    try {
      // If it's a refresh request, mock the token refresh using the existing token
      if (urlStr.includes('grant_type=refresh_token')) {
        const cookieHeader = currentRequestHeaders?.get('cookie') || '';
        const match = cookieHeader.match(/keystatic-gh-access-token=([^;]+)/);
        const currentToken = match ? match[1] : 'dummy';

        const bodyObj = {
          access_token: currentToken,
          expires_in: 31536000, // 1 year
          refresh_token: 'dummy-refresh-token',
          refresh_token_expires_in: 31536000,
          scope: '',
          token_type: 'bearer',
        };

        console.log('[keystatic fetch intercept] Mocking refresh token response.');
        return new Response(JSON.stringify(bodyObj), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        });
      }

      const response = await originalFetch(input, init);
      const clone = response.clone();
      const text = await clone.text();
      lastGitHubResponse = {
        status: response.status,
        body: text,
      };

      // Polyfill standard GitHub OAuth App response to satisfy Keystatic's schema
      if (response.ok && urlStr.includes('/login/oauth/access_token')) {
        try {
          const json = JSON.parse(text);
          if (json.access_token) {
            // Security Check: Verify that the authenticated user is the repository owner
            const userResponse = await originalFetch('https://api.github.com/user', {
              headers: {
                Authorization: `Bearer ${json.access_token}`,
                'User-Agent': 'Keystatic-Auth-Interceptor',
              },
            });
            if (userResponse.ok) {
              const userData = await userResponse.json();
              const allowedOwner = process.env.KEYSTATIC_GITHUB_REPO_OWNER || 'SagarKarmoker';
              if (userData.login && userData.login.toLowerCase() !== allowedOwner.toLowerCase()) {
                console.log(`[keystatic fetch intercept] Blocked unauthorized login attempt by user: ${userData.login}`);
                isLastRequestUnauthorized = true;
                return new Response(JSON.stringify({ error: 'Unauthorized user' }), {
                  status: 403,
                  headers: { 'Content-Type': 'application/json' },
                });
              }
            } else {
              console.error('[keystatic fetch intercept] Failed to fetch user data for verification');
            }

            if (!json.expires_in) {
              json.expires_in = 31536000; // 1 year
              json.refresh_token = 'dummy-refresh-token';
              json.refresh_token_expires_in = 31536000;
              json.scope = json.scope || '';
            }
            
            console.log('[keystatic fetch intercept] Polyfilled standard OAuth response.');
            return new Response(JSON.stringify(json), {
              status: response.status,
              headers: response.headers,
            });
          }
        } catch (e) {
          console.error('[keystatic fetch intercept] Failed to parse JSON response:', e);
        }
      }

      return response;
    } catch (err) {
      lastGitHubResponse = {
        error: err.message,
      };
      throw err;
    }
  }
  return originalFetch(input, init);
};

const handler = makeGenericAPIRouteHandler({ config }, {
  slugEnvName: 'NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG',
});

function mask(str) {
  if (!str) return 'undefined / missing';
  if (str.length <= 8) return '***';
  return str.substring(0, 4) + '...' + str.substring(str.length - 4);
}

async function wrappedHandler(request) {
  currentRequestHeaders = request.headers;
  const url = new URL(request.url);
  console.log('[keystatic route] incoming request url:', request.url);
  if (url.hostname === 'localhost') {
    url.hostname = '127.0.0.1';
    request = new Request(url.toString(), request);
    console.log('[keystatic route] mapped localhost to 127.0.0.1:', request.url);
  }
  try {
    const res = await handler(request);
    console.log('[keystatic route] handler returned status:', res.status, 'body:', res.body ? res.body.substring(0, 100) : null);
    
    // Intercept redirect to GitHub to append OAuth scopes if using a standard OAuth app
    if ((res.status === 302 || res.status === 307) && res.headers.has('Location')) {
      const location = res.headers.get('Location');
      if (location.includes('github.com/login/oauth/authorize')) {
        try {
          const redirectUrl = new URL(location);
          if (!redirectUrl.searchParams.has('scope') || redirectUrl.searchParams.get('scope') === '') {
            redirectUrl.searchParams.set('scope', 'repo,public_repo');
            console.log('[keystatic route] Intercepted redirect, appended scopes:', redirectUrl.toString());
            
            const newHeaders = new Headers(res.headers);
            newHeaders.set('Location', redirectUrl.toString());
            return new Response(res.body, {
              status: res.status,
              headers: newHeaders,
            });
          }
        } catch (e) {
          console.error('[keystatic route] Failed to parse redirect URL:', e);
        }
      }
    }

    // If the OAuth callback failed because of unauthorized user, render a nice warning page
    if (res.status === 401 && url.pathname.endsWith('/github/oauth/callback') && isLastRequestUnauthorized) {
      isLastRequestUnauthorized = false; // Reset the flag
      return new Response(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Access Denied</title>
          <meta name="viewport" content="width=device-width, initial-scale=1">
        </head>
        <body style="font-family: system-ui, -apple-system, sans-serif; padding: 2rem; max-width: 600px; margin: 100px auto; background: #0f172a; color: #e2e8f0; text-align: center;">
          <h1 style="color: #f43f5e; margin-bottom: 1rem;">Access Denied</h1>
          <p style="font-size: 1.125rem; color: #94a3b8; margin-bottom: 2rem;">
            Only the repository owner (<strong>${process.env.KEYSTATIC_GITHUB_REPO_OWNER || 'SagarKarmoker'}</strong>) is authorized to log into this CMS.
          </p>
          <a href="/keystatic" style="display: inline-block; background: #3b82f6; color: white; padding: 0.75rem 1.5rem; border-radius: 6px; text-decoration: none; font-weight: 500; transition: background 0.2s;">
            Go Back
          </a>
        </body>
        </html>
      `, {
        status: 403,
        headers: { 'Content-Type': 'text/html' }
      });
    }

    const { body, headers, status } = res;
    return new Response(body, { status, headers });
  } catch (error) {
    console.error('[keystatic route] handler threw error:', error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

export const GET = wrappedHandler;
export const POST = wrappedHandler;

