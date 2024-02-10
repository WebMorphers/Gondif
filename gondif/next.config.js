/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa') ;

const nextConfig  = {
    output: 'export',
    ...withPWA({
        dest: 'public',
        register: true,
        skipWaiting: true,
    })
}

module.exports = nextConfig;