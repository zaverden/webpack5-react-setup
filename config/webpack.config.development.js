// @ts-check
const { merge } = require('webpack-merge');
const common = require('./webpack.config.common.js');

/** @type {import('webpack-dev-server').Configuration} */
const devServer =  {
  contentBase: './build',
  disableHostCheck: true,
  historyApiFallback: true,
  hot: true,
  host: '0.0.0.0',
  port: 3000,
  proxy: {
    '/api': 'http://socely_server:8080',
    '/uploads': 'http://socely_server:8080',
  },
}

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer,
});
