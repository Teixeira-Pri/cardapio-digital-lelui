/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        noir: '#0E0E0C',
        wood: '#241912',
        woodlight: '#3A2A1E',
        cream: '#F6F1E7',
        creamdark: '#EBE3D3',
        paper: '#FBF8F1',
        gold: '#C4A35A',
        champagne: '#D8C29A',
        amber: '#B98A4B',
        ash: '#6E665A',
        line: '#D8CFBE',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Jost"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        wider2: '0.18em',
        wider3: '0.28em',
      },
      maxWidth: {
        content: '720px',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [],
}
