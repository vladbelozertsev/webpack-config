const baseWebpackConfig = require('./webpack.base.conf');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const { paths } = baseWebpackConfig.externals;

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',

  devtool: 'inline-source-map',

  devServer: {
    contentBase: paths.dist,
    hot: true,
    port: 3000,
    watchContentBase: true,
  },

  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
});

module.exports = new Promise((resolve) => {
  resolve(devWebpackConfig);
});
