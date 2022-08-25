/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['menuimagess.s3.amazonaws.com','menuimagess', ''],
  }
}

module.exports = nextConfig
