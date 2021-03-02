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
    publicPath: '/dashboard/latest/',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'dashboard',
      filename: 'remoteEntry.js',
      exposes: {
        './DashboardApp': './src/bootstrap',
      },
      shared: dependencies,
    }),
  ],
};

module.exports = merge(common, config);
