/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#050505',
          black: '#0a0a0c',
          surface: '#101014',
          card: 'rgba(16, 16, 22, 0.75)',
          red: '#FF3B30',
          'red-glow': '#FF453A',
          coral: '#FF6B6B',
          orange: '#FF9500',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-red': 'rgba(255, 59, 48, 0.3)',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        display: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out 2s infinite',
        'glow-pulse': 'glow 2.5s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glow: {
          '0%': { opacity: '0.4', filter: 'drop-shadow(0 0 15px rgba(255, 59, 48, 0.3))' },
          '100%': { opacity: '0.8', filter: 'drop-shadow(0 0 35px rgba(255, 59, 48, 0.6))' },
        }
      },
      boxShadow: {
        'neon-red': '0 0 25px -5px rgba(255, 59, 48, 0.4)',
        'neon-red-lg': '0 0 45px -5px rgba(255, 59, 48, 0.6)',
        'glass-card': '0 8px 32px 0 rgba(0, 0, 0, 0.4)',
      }
    },
  },
  plugins: [],
}
