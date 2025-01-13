/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#FFD700',
          light: '#FFE55C',
          dark: '#B89B00'
        },
        royal: {
          DEFAULT: '#0056A8',
          dark: '#00274D',
          light: '#87CEEB'
        },
        gray: {
          800: '#1F2937',
          900: '#111827'
        },
        emerald: {
          DEFAULT: '#50C878',
          light: '#98FB98'
        },
        neutral: {
          white: '#FFFFFF',
          charcoal: '#333333',
          beige: '#F5F5DC'
        },
        accent: {
          yellow: '#FFEE32'
        }
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        glow: {
          '0%, 100%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(100%)' }
        },
        draw: {
          '0%': { strokeDasharray: '1 100', strokeDashoffset: '100' },
          '100%': { strokeDasharray: '100 100', strokeDashoffset: '0' }
        }
      },
      fontFamily: {
        'dancing-script': ['Dancing Script', 'cursive']
      },
      animation: {
        'draw': 'draw 1.5s ease-in-out forwards'
      },
    },
  },
  plugins: [],
};