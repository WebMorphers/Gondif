 const withPWA = require('next-pwa') ;

const nextConfig  = {
    ...withPWA({
        dest: 'public',
        register: true,
        skipWaiting: true,
    }),
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'firebasestorage.googleapis.com',
            pathname: '**',
          },
        ],
      },
}   

module.exports = nextConfig;