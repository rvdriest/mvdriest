module.exports = {
  mode: 'jit',
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './content/*.md'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#F5FF00', // Yellow
        'primary-dark': '#717423', // Dark yellow
        dark: '#111216', // Almost black
        secondary: '#0066FF', // BLUE
      },
      animation: {
        'slide-down': 'slidedown .2s linear',
        'infinite-scroll': 'infinite-scroll 20s linear infinite',
      },
      keyframes: {
        slidedown: {
          '0%': { transform: 'translateY(-90px)' },
          '100%': { transform: 'translateY(0)' },
        },
        'infinite-scroll': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
      },
      screens: {
        '3xl': '1600px',
        '4xl': '1720px',
      },
    },
    fontFamily: {
      sans: [
        'poppins',
        'ui-sans-serif',
        'system-ui',
        'Halvertica',
        'Arial',
        'sans-serif',
      ],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
