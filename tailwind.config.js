import withMT from "@material-tailwind/html/utils/withMT";

/** @type {import('tailwindcss').Config} */

module.exports = withMT( {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {boxShadow: {
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
    }},
    colors: {
      'blue-chill': {
        '50': '#f2f9f9',
        '100': '#ddeff0',
        '200': '#bfe0e2',
        '300': '#92cace',
        '400': '#5faab1',
        '500': '#438e96',
        '600': '#3b757f',
        '700': '#356169',
        '800': '#325158',
        '900': '#2d464c',
        '950': '#1a2c32',
      },
    }
  },
  plugins: [require('flowbite/plugin')],
});

