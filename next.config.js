/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {

  },
  images: {
    domains: ['picsum.photos'],
  },
  experimental:
    { images: { layoutRaw: true } }
}

module.exports = nextConfig
