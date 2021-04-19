const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.conf');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { merge } = require('webpack-merge');

const buildWebpackConfig = merge(baseWebpackConfig, {
  mode: 'production',

  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: 'asset',
      },
    ],
  },

  optimization: {
    minimize: true,
  },

  plugins: [
    new CleanWebpackPlugin(),
    new ImageMinimizerPlugin({
      minimizerOptions: {
        plugins: [
          ['gifsicle', { interlaced: true }],
          ['jpegtran', { progressive: true }],
          ['optipng', { optimizationLevel: 5 }],
          [
            'svgo',
            {
              plugins: [
                {
                  removeViewBox: false,
                },
              ],
            },
          ],
        ],
      },
    }),
  ],
});

module.exports = new Promise((resolve) => {
  resolve(buildWebpackConfig);
});
