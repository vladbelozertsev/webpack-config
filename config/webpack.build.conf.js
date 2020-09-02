const HtmlWebpackPlugin = require("html-webpack-plugin");
const PurgecssPlugin = require("purgecss-webpack-plugin");
const baseWebpackConfig = require("./webpack.base.conf");
const glob = require("glob");
const merge = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // installed via npm

const buildWebpackConfig = merge(baseWebpackConfig, {
  mode: "production",

  plugins: [
    new CleanWebpackPlugin(), // удаляем все из dist перед созданием новых файлов (npm run build)

    new PurgecssPlugin({
      // https://www.npmjs.com/package/purgecss-webpack-plugin
      // удаляем ВСЕ неиспользуемые селекторы (со свойствами), которые являются селекторами классов/идентификаторов
      paths: glob.sync(`${baseWebpackConfig.externals.paths.src}/**/*`, {
        nodir: true,
      }),
      // т.к. ignore работает НЕ корректно, используем whitelist, предварительно убедившись,
      // что все классы в библиотеке имеют префикс:
      whitelistPatterns: [/swiper/],
    }),

    // https://stackoverflow.com/questions/39798095/multiple-html-files-using-webpack
    new HtmlWebpackPlugin({
      template: `${baseWebpackConfig.externals.paths.src}/index.html`, // ${PATHS.src}
      filename: "index.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),

    new HtmlWebpackPlugin({
      template: `${baseWebpackConfig.externals.paths.src}/details.html`, // ${PATHS.src}
      filename: "details.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),
  ],
});

// console.log(process.env.NODE_ENV);

module.exports = new Promise((resolve, reject) => {
  resolve(buildWebpackConfig);
});
