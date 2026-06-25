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
      const response = await originalFetch(input, init);
      const clone = response.clone();
      const text = await clone.text();
      lastGitHubResponse = {
        status: response.status,
        body: text,
      };
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
    
    // If the OAuth callback failed, render the debug helper page
    if (res.status === 401 && url.pathname.endsWith('/github/oauth/callback')) {
      const debugHtml = `
        <!DOCTYPE html>
        <html>
        <head>
          <title>Keystatic Auth Debugger</title>
          <meta name="viewport" content="width=device-width, initial-scale=1">
        </head>
        <body style="font-family: system-ui, -apple-system, sans-serif; padding: 2rem; max-width: 800px; margin: 0 auto; background: #0f172a; color: #e2e8f0; line-height: 1.5;">
          <h1 style="color: #f43f5e; border-bottom: 1px solid #334155; padding-bottom: 0.5rem; margin-top: 0;">Keystatic Authorization Failed</h1>
          <p>The server received the OAuth callback but the token exchange failed. Here is the debug info from the production server:</p>
          
          <h3 style="color: #38bdf8; margin-bottom: 0.5rem;">1. Environment Variables</h3>
          <pre style="background: #1e293b; padding: 1rem; border-radius: 8px; overflow-x: auto; margin-top: 0;">
KEYSTATIC_GITHUB_CLIENT_ID: ${mask(process.env.KEYSTATIC_GITHUB_CLIENT_ID)}
KEYSTATIC_GITHUB_CLIENT_SECRET: ${mask(process.env.KEYSTATIC_GITHUB_CLIENT_SECRET)}
KEYSTATIC_SECRET: ${mask(process.env.KEYSTATIC_SECRET)}
KEYSTATIC_GITHUB_REPO_OWNER: ${process.env.KEYSTATIC_GITHUB_REPO_OWNER || 'undefined'}
KEYSTATIC_GITHUB_REPO_NAME: ${process.env.KEYSTATIC_GITHUB_REPO_NAME || 'undefined'}
          </pre>

          <h3 style="color: #38bdf8; margin-bottom: 0.5rem;">2. Last GitHub OAuth Request</h3>
          <pre style="background: #1e293b; padding: 1rem; border-radius: 8px; overflow-x: auto; margin-top: 0;">${JSON.stringify(lastGitHubRequest, null, 2)}</pre>

          <h3 style="color: #f43f5e; margin-bottom: 0.5rem;">3. Last GitHub OAuth Response</h3>
          <pre style="background: #1e293b; padding: 1rem; border-radius: 8px; overflow-x: auto; margin-top: 0; color: #fbbf24;">${JSON.stringify(lastGitHubResponse, null, 2)}</pre>
          
          <p style="margin-top: 2rem; font-size: 0.875rem; color: #94a3b8;">
            Make sure to push these latest code changes to your server and trigger a redeploy/restart.
          </p>
        </body>
        </html>
      `;
      return new Response(debugHtml, {
        status: 401,
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

