/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom Interior Design Color Palette
        'warm-white': '#fefefe',
        'off-white': '#f8f8f8',
        'light-gray': '#f0f0f0',
        'medium-gray': '#e0e0e0',
        'dark-gray': '#666666',
        'charcoal': '#333333',
        
        // Warm Accents
        'terracotta': '#d2691e',
        'warm-brown': '#8b4513',
        'gold': '#d4af37',
        'cream': '#f5f5dc',
        
        // Vibrant Contrasts
        'deep-red': '#8b0000',
        'navy': '#000080',
        'forest-green': '#228b22',
      },
      fontFamily: {
        'display': ['Playfair Display', 'Georgia', 'serif'],
        'primary': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.4s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeIn: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        scaleIn: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.9)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '16/9': '16 / 9',
      },
    },
  },
  plugins: [],
}
