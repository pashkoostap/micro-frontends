const { merge } = require('webpack-merge');
const {
  container: { ModuleFederationPlugin },
} = require('webpack');

const common = require('./webpack.common');
const { dependencies } = require('../package.json');

const domain = process.env.PROD_DOMAIN;

const config = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/container/latest/',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        marketing: `marketing@${domain}/marketing/remoteEntry.js`,
      },
      shared: dependencies,
    }),
  ],
};

module.exports = merge(common, config);
