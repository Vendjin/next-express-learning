/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    experimental: {
        optimizePackageImports: [
            '@mui/material', // доп оптимизация сторонних библиотек в пакете
        ]
    },
    publicRuntimeConfig: {
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || ''
    },
    serverRuntimeConfig: {
        ROOT_ENV_SERVER: process.env.ROOT_ENV_SERVER || ''
    }
};

export default nextConfig;
