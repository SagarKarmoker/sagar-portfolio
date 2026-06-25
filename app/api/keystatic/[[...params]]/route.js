const isEnabled = !!(
  process.env.KEYSTATIC_GITHUB_CLIENT_ID &&
  process.env.KEYSTATIC_GITHUB_CLIENT_SECRET &&
  process.env.KEYSTATIC_SECRET
);

let handler;
if (isEnabled) {
  const { makeRouteHandler } = await import('@keystatic/next/route-handler');
  const config = (await import('../../../../keystatic.config')).default;
  handler = makeRouteHandler({ config });
} else {
  handler = {};
}

export const GET = handler.GET ?? (() => new Response('Not Found', { status: 404 }));
export const POST = handler.POST ?? (() => new Response('Not Found', { status: 404 }));
