const { merge } = require('webpack-merge');
const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container;

const common = require('./webpack.common');
const { dependencies } = require('../package.json');

const port = 8080;
const config = {
  mode: 'development',
  output: {
    publicPath: `http://localhost:${port}/`,
  },
  devServer: {
    port,
    historyApiFallback: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        marketing: 'marketing@http://localhost:8081/remoteEntry.js',
        auth: 'auth@http://localhost:8082/remoteEntry.js',
        dashboard: 'dashboard@http://localhost:8083/remoteEntry.js',
      },
      shared: dependencies,
    }),
  ],
};

module.exports = merge(common, config);
