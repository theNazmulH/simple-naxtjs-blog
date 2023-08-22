/** @type {import('next').NextConfig} */
const nextConfig = {
    headers: {
        'X-Frame-Options': 'DENY',
    },
    distDir: 'build',
    images: {
        domains: ['roar.media']
    }
}

module.exports = nextConfig
