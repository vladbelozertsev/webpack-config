const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const htmlPages = require('./utils/html-pages');
const PATHS = require('./utils/paths');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  externals: {
    paths: PATHS,
  },

  entry: {
    app: `${PATHS.src}/entry.js`,
  },

  output: {
    filename: 'js/[name].[contenthash].js',
    path: PATHS.build,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: MiniCssExtractPlugin.loader, options: { esModule: false } },
          'css-loader?url=false',
          { loader: 'postcss-loader', options: { sourceMap: true } },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          { loader: MiniCssExtractPlugin.loader, options: { esModule: false } },
          { loader: 'css-loader?url=false', options: { sourceMap: true } },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'resolve-url-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
    ],
  },

  plugins: [
    ...htmlPages,
    new CopyPlugin({
      patterns: [
        { from: `${PATHS.src}/images/`, to: 'images' },
        { from: `${PATHS.src}/fonts/`, to: 'fonts' },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
    }),
  ],
};
