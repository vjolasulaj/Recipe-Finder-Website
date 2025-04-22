/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true, 
  },
  srcDir: 'src',  
  images: {
    domains: ["img.spoonacular.com"], 
  },
};

module.exports = nextConfig;
