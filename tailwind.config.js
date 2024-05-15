/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      'pokeblue-light': '#3362AD',
      'pokeblue': '#081226',
      'pokeorange': '#F36F21',
      'pokegray': '#8D8D8D',
      'pokegray-light': '#F5F5F5',
      'white': '#FFFFFF',
      'red': '#e60012',
      'red-light': '#FF0000',
    },
  },
  plugins: [],
}

