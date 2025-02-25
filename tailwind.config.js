module.exports = {
  content: [
    "./pages/**/*.{html,js,jsx,ts,tsx}",
    "./components/**/*.{html,js,jsx,ts,tsx}",
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  safelist: [
    'w-full',
    'sm:w-1/2',
    'lg:w-1/6',
  ],
  theme: {
    extend: {},
    screens: {
      sm: '640px',
      lg: '1024px',
    },
  },
  plugins: [],
};
