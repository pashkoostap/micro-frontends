const { merge } = require('webpack-merge');
const {
  container: { ModuleFederationPlugin },
} = require('webpack');

const common = require('./webpack.common');
const { dependencies } = require('../package.json');

const port = 8082;
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
      name: 'auth',
      filename: 'remoteEntry.js',
      exposes: {
        './AuthApp': './src/bootstrap',
      },
      shared: dependencies,
    }),
  ],
};

module.exports = merge(common, config);
