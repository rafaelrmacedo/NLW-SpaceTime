/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'avatars.githubusercontent.com',
    ]
  }
}

module.exports = {
    experimental: {
      forceSwcTransforms: true,
    },
  }
