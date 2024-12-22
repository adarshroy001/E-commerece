/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        myblue: '#233a95', // Replace with your color hex code
        myyellow:'#233a94',
        mypink: '#2bbef9'
        },
        keyframes: {
          'fill-from-bottom-left': {
            '0%': { backgroundPosition: 'left bottom' },
            '100%': { backgroundPosition: 'right top' },
          },
        },
        animation: {
          'fill-from-bottom-left': 'fill-from-bottom-left 05s ease forwards',
        },
        backgroundSize: {
          '200%': '200%',
        },
    },
  },
  plugins: [],
}

