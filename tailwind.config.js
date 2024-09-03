/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in-out': 'fadeInOut 5s ease-in-out infinite',
        'ping': 'ping 5s cubic-bezier(0, 0, 0.2, 1) infinite',
        'pulse': 'pulse 1.9s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeInOut: {
          '0%': { opacity: '0.5' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0.5' },
        },
        ping: {
          '0%': {
            transform: 'scale(1)',
            opacity: '1',
          },
          '75%': {
            transform: 'scale(1.1)',
            opacity: '0.8',
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
        },
        pulse: {
          '0%, 100%': {
            opacity: '2',
          },
          '50%': {
            opacity: '0.7',
          },
        },
      },
    },
  },
  plugins: [],
}
