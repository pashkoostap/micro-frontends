const { merge } = require('webpack-merge');
const {
  container: { ModuleFederationPlugin },
} = require('webpack');

const common = require('./webpack.common');
const { dependencies } = require('../package.json');

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
        marketing: `marketing@${process.env.PROD_DOMAIN}/marketing/latest/remoteEntry.js`,
        auth: `auth@${process.env.PROD_DOMAIN}/auth/latest/remoteEntry.js`,
        dashboard: `dashboard@${process.env.PROD_DOMAIN}/dashboard/latest/remoteEntry.js`,
      },
      shared: dependencies,
    }),
  ],
};

module.exports = merge(common, config);
