// файл для конфигурации postcss плагинов и лоадеров - https://github.com/postcss/postcss
// Подробнее: https://www.youtube.com/watch?v=qqTIqwQX8nc

// postcss.config.js правильнее положить в корень, на уровне с остальными конфигами.
// В таком случае он сам определяется, его не нужно подключать в webpack.config.js. В src кладут то что нужно для прода, а не для разработки
// cssnano можно без опций подключать, так как удаление коментов по умолчанию работает

// https://symfony.com.ua/doc/current/frontend/encore/postcss.html

// в файле package.json, указываем список браузеров для postcss autoprefixer'a

module.exports = {
  plugins: [
    require("autoprefixer"), // выставляем префиксы для браузеров, указанных в packaje.json -> browserslist
    require("css-mqpacker"), // объединяем одинаковые по содержанию медиа-запросы
    require("cssnano"), // минифицируем полученный css код
  ],
};

// npm i postcss-loader autoprefixer css-mqpacker cssnano -D
