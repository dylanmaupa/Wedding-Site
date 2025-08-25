/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-olive': '#697159',
        'muted-sage': '#8f987d',
        'soft-rose': '#dbadad',
        'blush-pink': '#e5cbca',
        'cream': '#ebece7',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'rose-gradient': 'linear-gradient(135deg, #e5cbca 0%, #dbadad 100%)',
        'sage-gradient': 'linear-gradient(135deg, #8f987d 0%, #697159 100%)',
        'cream-gradient': 'linear-gradient(135deg, #ebece7 0%, #e5cbca 50%, #dbadad 100%)',
      }
    },
  },
  plugins: [],
};