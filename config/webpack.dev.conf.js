const HtmlWebpackPlugin = require("html-webpack-plugin");
const baseWebpackConfig = require("./webpack.base.conf");
const merge = require("webpack-merge");
const webpack = require("webpack");

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: "development",

  devServer: {
    contentBase: baseWebpackConfig.externals.paths.dist,
    overlay: true,
    port: 8081,
  },

  devtool: "cheap-module-eval-source-map",

  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: "[file].map",
    }),
    new HtmlWebpackPlugin({
      template: `${baseWebpackConfig.externals.paths.src}/index.html`, // ${PATHS.src}
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: `${baseWebpackConfig.externals.paths.src}/details.html`, // ${PATHS.src}
      filename: "details.html",
    }),
  ],
});

// console.log(devWebpackConfig);

module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackConfig);
});
