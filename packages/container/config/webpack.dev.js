const { merge } = require('webpack-merge');
const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container;

const common = require('./webpack.common');
const { dependencies } = require('../package.json');

const config = {
  mode: 'development',
  devServer: {
    port: 8080,
    historyApiFallback: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        marketing: 'marketing@http://localhost:8081/remoteEntry.js',
      },
      shared: dependencies,
    }),
  ],
};

module.exports = merge(common, config);
