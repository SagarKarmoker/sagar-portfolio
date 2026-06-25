/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['@keystatic/next'],
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.simpleicons.org',
            },
        ],
    },
};

export default nextConfig;
