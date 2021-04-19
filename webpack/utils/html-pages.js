const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');
const PATHS = require('./paths');

const htmlPagesNames = fs.readdirSync(PATHS.src).filter((fileName) => fileName.endsWith('.html'));

module.exports = htmlPagesNames.map(
  (page) =>
    new HtmlWebpackPlugin({
      template: `${PATHS.src}/${page}`,
      filename: `./${page}`,
    })
);
