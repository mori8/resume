/** @type {import('next').NextConfig} */

const Dotenv = require('dotenv-webpack');

module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.plugins.push(new Dotenv({ silent: true }));
    return config;
  },
}
