/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    colors: {
      'white': '#FFFFFF',
      'black': '#000000',
      'primary': '#F0326A',
      'secondary': '#FFC107',
      'neutral-dark': '#1A1A2E',
      'text-body': '#333333',
      'gray': {
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827',
      },
    },
    fontFamily: {
      'playfair': ['Playfair Display', 'serif'],
      'dm-sans': ['DM Sans', 'sans-serif'],
    },
    aspectRatio: {
      '4/3': '4 / 3',
      'video': '16 / 9',
    },
    extend: {},
  },
  plugins: [],
}
