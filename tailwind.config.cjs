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
          ...require('daisyui/src/theming/themes')['night'],
          'background-color': 'oklch(var(--pc))',
          '--rounded-box': '0', // border radius rounded-box utility class, used in card and other large boxes
          '--rounded-btn': '0', // border radius rounded-btn utility class, used in buttons and similar element
          '--rounded-badge': '0', // border radius rounded-badge utility class, used in badges and similar
        },
      },
    ],
  },
};
