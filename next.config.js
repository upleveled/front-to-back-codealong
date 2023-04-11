// Add ability to install and use offline
const withPWA = require('next-pwa')({
  dest: 'public',
});

const nextConfig = withPWA({
  reactStrictMode: true,
});

module.exports = nextConfig;
