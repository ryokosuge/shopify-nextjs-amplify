/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    SHOPIFY_API_KEY: process.env.SHOPIFY_API_KEY,
  }
}
