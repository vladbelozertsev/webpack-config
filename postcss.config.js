const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
  plugins: [
    require('tailwindcss')('./tailwind.config.js'),
    require('autoprefixer'),
    require('postcss-combine-media-query'),
    process.env.NODE_ENV === 'production'
      ? require('cssnano')({
          preset: [
            'default',
            {
              discardComments: {
                removeAll: true,
              },
            },
          ],
        })
      : null,
    process.env.NODE_ENV === 'production'
      ? purgecss({
          content: ['./src/**/*.html'],
          safelist: [/swiper/, 'max-h-550px', 'btn-burger_close'],
          defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
        })
      : null,
  ],
};
