// ponytail: import from 'node' dist variant to bypass Turbopack resolving
// @keystatic/core/api/generic to the 'react-server' stub that lacks local CRUD.
// Use direct dist path + resolve alias in next.config.mjs (see resolveAlias).
// Revisit when @keystatic/next or Next.js/Turbopack export-condition resolution
// correctly serves the 'node' variant for route handlers.
import { makeGenericAPIRouteHandler } from '../../../../node_modules/@keystatic/core/dist/keystatic-core-api-generic.node.js';
import config from '../../../../keystatic.config';

const handler = makeGenericAPIRouteHandler({ config }, {
  slugEnvName: 'NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG',
});

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
    const { body, headers, status } = res;
    return new Response(body, { status, headers });
  } catch (error) {
    console.error('[keystatic route] handler threw error:', error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

export const GET = wrappedHandler;
export const POST = wrappedHandler;
