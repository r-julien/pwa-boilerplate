"use strict";

const PATHS = require('./webpack-paths');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

exports.babel = {
  test: /\.jsx?$/,
  use: ['babel-loader'],
  exclude: /node_modules/,
};

exports.sass = {
  test: /\.(s*)css$/,
  use: ['style-loader', 'css-loader', 'sass-loader']
};

exports.devServer = function (options) {
  return {
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      stats: 'errors-only',
      host: options.host,
      port: options.port,
      contentBase: './client/dist',
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin({
        multistep: true
      })
    ],
  };
};
