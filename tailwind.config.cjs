/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        night: {
          ...require('daisyui/src/theming/themes')['forest'],
        },
      },
    ],
  },
};
