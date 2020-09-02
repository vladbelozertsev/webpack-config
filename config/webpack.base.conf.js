const CopyWebpackPlugin = require("copy-webpack-plugin");
const ImageminPlugin = require("imagemin-webpack-plugin").default;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const imageminMozjpeg = require("imagemin-mozjpeg");
const path = require("path");

const PATHS = {
  src: path.join(__dirname, "../project/src"),
  dist: path.join(__dirname, "../project/dist"),
  assets: "assets/",
};

module.exports = {
  entry: {
    app: PATHS.src,
  },
  output: {
    filename: `${PATHS.assets}js/[name].[hash].js`,
    path: PATHS.dist,
  },

  externals: {
    paths: PATHS,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: "/node_modules/",
      },
      {
        test: /\.s?css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // publicPath: '../../'
            },
          },
          {
            loader: "css-loader",
            options: { sourceMap: true, url: false },
          },
          {
            loader: "postcss-loader", // настройки автоматически берутся из postcss.config.js
            options: {
              sourceMap: true,
              // по умолчанию ищет postcss.config.js в корневой папке, но если он (конфиг) находится в др. месте, тогда пишется путь через config:...
              config: { path: path.join(__dirname, "/postcss.config.js") },
            },
          },
          {
            // ссылки относительно главного файла, а не относительно дочерних, загружаемых через @import
            loader: "resolve-url-loader",
            options: { sourceMap: true },
          },
          {
            loader: "sass-loader",
            options: { sourceMap: true },
          },
        ],
      },
      // обрабатываем шрифты, подключаемые к scss файлу:
      {
        test: /\.(woff(2)?|ttf|eot|)(\?v=\d+\.\d+\.\d+)?$/, // убрал |svg
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      // обрабатываем изображения, подключаемые к scss/html файлам:
      {
        test: /\.(jpe?g|png|gif|)$/i, // убрал |svg
        loader: "file-loader",
      },
      // svg sprite корректно подключается только к .html документам
      {
        test: /\.svg$/,
        loader: "svg-inline-loader",
      },
      // ВНИМАНИЕ! мы используем css из обычного bootstrap
      {
        test: /bootstrap\.native/,
        use: {
          loader: "bootstrap.native-loader",
          options: {
            only: ["carousel", "button"],
          },
        },
      },
    ],
  },

  optimization: {
    // включаем/отключаем сжатие .js файлов
    // minimize: false
    // splitChunks: {
    //   cacheGroups: {
    //     // сплитим в отдельный файл bootstrap и vue
    //     // Подробнее: https://webpack.js.org/plugins/split-chunks-plugin/
    //     vendor: {
    //       name: "vendors",
    //       // для сплита всего в один файл:
    //       test: /[\\/]node_modules[\\/]/,
    //       // для сплита в один файл нескольких модулей:
    //       // test: /[\\/]node_modules[\\/](bootstrap)[\\/]/, // test: /[\\/]node_modules[\\/](bootstrap|vue)[\\/]/
    //       chunks: "all",
    //       enforce: true
    //     }
    //     // сплитим в отдельный файл jquery
    //     // jquery: {
    //     //   name: "jquery",
    //     //   test: /jquery/,
    //     //   chunks: "all",
    //     //   enforce: true
    //     // }
    //   }
    // }
  },

  plugins: [
    new CopyWebpackPlugin([
      { from: `${PATHS.src}/static`, to: "" },
      {
        from: `${PATHS.src}/assets/images/`,
        to: "assets/images",
        // ignore: ["sprite/*.*"],
      },
      { from: `${PATHS.src}/assets/fonts`, to: "assets/fonts" },
    ]),
    new ImageminPlugin({
      disable: process.env.NODE_ENV !== "production",
      test: /\.(jpe?g|png|gif|svg)$/i,
      plugins: [imageminMozjpeg({ quality: 70, progressive: true })],
      pngquant: { quality: "70" },
    }),
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}css/[name].[hash].css`,
    }),
  ],

  resolve: {
    alias: {},
  },
};

// console.log(process.env.NODE_ENV);
// console.log(process.env.NODE_ENV == 'production'); // из за пробела в NODE_ENV=production && (между production &&) данный лог выдавал false
