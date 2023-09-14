/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        '1/2': '500px',
      },
      animation: {
        spin: 'spin 3s linear infinite',
      },
      colors: {
        textColor: '#1E266D',
        paragraphColor: '#455880',
        backgroundColor: '#edf2fd',
        viewDemoButtonBackground: '#1D66FF',
        viewDemoButtonBackgroundHover: '#5396F5',
      },
    },
  },
  plugins: [],
};
