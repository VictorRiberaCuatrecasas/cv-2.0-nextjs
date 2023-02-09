/** @type {import('next').NextConfig} */
const {i18n} = require('./next-i18next.config');

const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  i18n,
}

module.exports = nextConfig



