/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'nb-black': '#000000',
        'nb-white': '#FFFFFF',
        'nb-coral': '#FF6B6B',
        'nb-yellow': '#FFD23F',
        'nb-blue': '#74B9FF',
        'nb-green': '#88D498',
        'nb-cyan': '#7FDBDA',
        'nb-orange': '#FFA552',
        'nb-pale-red': '#FFE0E0',
        'nb-offwhite': '#F5F0E8',
        'nb-gray-dark': '#666666',
        'nb-gray-med': '#777777',
        'nb-gray-light': '#808080',
        'nb-gray-vlight': '#DDDDDD',
        'nb-blue-tint': '#E3F2FD',
        'nb-yellow-tint': '#FFF3C4',
        'nb-green-tint': '#E8F5E9',
        'nb-error': '#FF4444',
      },
      fontFamily: {
        'syne': ['Syne', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        'space-grotesk': ['Space Grotesk', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        'space-mono': ['Space Mono', 'Courier New', 'monospace'],
        'inter': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        'nb-sm': '#000000 3px 3px 0px 0px',
        'nb-md': '#000000 5px 5px 0px 0px',
        'nb-lg': '#000000 8px 8px 0px 0px',
        'nb-nav': '#000000 0px 4px 0px 0px',
        'nb-coral': '#FF6B6B 5px 5px 0px 0px',
        'nb-hover': '#000000 6px 6px 0px 0px',
        'nb-active': '#000000 3px 3px 0px 0px',
      },
      borderRadius: {
        'nb': '0px',
      },
    },
  },
  plugins: [],
}
