module.exports = {
  purge: {
    mode: 'all',
    preserveHtmlElements: false,
    content: ['./src/**/*', './src/**/*.html', './src/**/*.js', './node_modules/flatpickr/**/*.js'],
  },
  darkMode: false,
  from: undefined,
  theme: {
    extend: {
      colors: {
        my: {
          '3d3d3d': '#3d3d3d',
          ebebeb: '#ebebeb',
        },
      },
      height: {
        '2px': '2px',
        '52px': '52px',
        '82px': '82px',
        '420px': '420px',
        '540px': '540px',
        '600px': '600px',
      },
      minHeight: {
        '225px': '225px',
        '350px': '350px',
      },
      maxHeight: {
        none: 'none',
        '550px': '550px',
      },
      width: {
        '552px': '552px',
      },
      gridTemplateColumns: {
        'fill300px/1fr': 'repeat(auto-fill, minmax(300px, 1fr));',
      },
      flex: {
        'basis-1/2': '50%',
      },
      transitionProperty: {
        'max-height': 'max-height',
      },
    },
    fontFamily: {
      main: ['Montserrat', 'sans-serif'],
      icon: ['fontello', 'Montserrat', 'sans-serif'],
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
};
