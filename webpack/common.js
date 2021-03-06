const { join } = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const bp = require('./utils/addBabelPolyfill');

const rootDir = join(__dirname, '../');

module.exports = {
  entry: {
    app: bp(join(rootDir, './src/')),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
      },
    ],
  },
  output: {
    path: join(rootDir, '../build'),
    publicPath: '/',
    filename: '[name].[hash].js',
    sourceMapFilename: '[name].[hash].map',
  },
  plugins: [
    new Dotenv({
      safe: true,
      path: '.env',
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([{ from: join(rootDir, './static'), to: './' }]),
    new SVGSpritemapPlugin(join(rootDir, './static/**/*.svg'), {
      output: {
        filename: 'sprite.svg',
      },
      sprite: {
        generate: {
          title: false,
        },
      },
    }),
    new webpack.HashedModuleIdsPlugin(),
    new HtmlWebpackPlugin({
      template: join(rootDir, './static/index.html'),
    }),
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '@src': join(rootDir, './src'),
      '@common': join(rootDir, './src/common'),
      '@components': join(rootDir, './src/common/components'),
      '@context': join(rootDir, './src/common/context'),
      '@utils': join(rootDir, './src/common/utils'),
      '@features': join(rootDir, './src/features'),
      '@pages': join(rootDir, './src/pages'),
      '@static': join(rootDir, './static'),
      '@styles': join(rootDir, './src/common/styles'),
    },
  },
};
