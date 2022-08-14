/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    layoutRaw: true,
    domains: [
      "localhost:8000",
      "localhost",
      "c4.wallpaperflare.com",
      "2.bp.blogspot.com",
      "pegeodo.herokuapp.com",
    ],
  },
};

module.exports = nextConfig;
