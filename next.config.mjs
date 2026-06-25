/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        KEYSTATIC_GITHUB_CLIENT_ID: process.env.KEYSTATIC_GITHUB_CLIENT_ID,
        KEYSTATIC_GITHUB_REPO_OWNER: process.env.KEYSTATIC_GITHUB_REPO_OWNER,
        KEYSTATIC_GITHUB_REPO_NAME: process.env.KEYSTATIC_GITHUB_REPO_NAME,
    },
    transpilePackages: ['@keystatic/next'],
    // ponytail: force Node.js runtime resolution for @keystatic/core so route handler
    // gets the 'node' export-condition variant instead of the 'react-server' stub.
    // Revisit when @keystatic/next or Turbopack export-condition resolution improves.
    serverExternalPackages: ['@keystatic/core'],
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.simpleicons.org',
            },
        ],
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 768, 1024, 1280, 1536],
    },
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'SAMEORIGIN',
                    },
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block',
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'strict-origin-when-cross-origin',
                    },
                ],
            },
            {
                source: '/fonts/(.*)',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
            {
                source: '/images/(.*)',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=86400, stale-while-revalidate=604800',
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
