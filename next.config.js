/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  // images: {
  //   unoptimized: true,
  // },
  images: {
    loader: "cloudinary",
    path: "https://res.cloudinary.com/dhwauc0fb",
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
