/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink:            '#0a0000',
        parchment:      '#e8d5b0',
        'parchment-dk': '#c4a882',
        blood:          '#8b0000',
        'blood-bright': '#cc0000',
        'blood-dark':   '#3d0000',
        mist:           'rgba(200,190,180,0.06)',
      },
      fontFamily: {
        noble:  ['"Cinzel"', '"Cinzel Decorative"', 'Georgia', 'serif'],
        body:   ['"Crimson Pro"', 'Georgia', 'serif'],
        kanji:  ['"Noto Serif JP"', 'serif'],
      },
      fontSize: {
        'giant':  'clamp(5rem, 14vw, 16rem)',
        'scream': 'clamp(8rem, 22vw, 28rem)',
      },
      animation: {
        'stutter':        'stutter-shake 2.3s infinite ease-in-out',
        'stutter-fast':   'stutter-violent 0.8s infinite',
        'ghost-drift':    'ghost-drift 4s infinite ease-in-out',
        'mist':           'mist-float 12s infinite ease-in-out',
        'mist-slow':      'mist-float 20s infinite ease-in-out reverse',
        'blood-pulse':    'blood-pulse 3s infinite ease-in-out',
        'blob-1':         'blob-drift-1 9s infinite ease-in-out',
        'blob-2':         'blob-drift-2 13s infinite ease-in-out',
        'blob-3':         'blob-drift-3 11s infinite ease-in-out',
        'blob-4':         'blob-drift-4 15s infinite ease-in-out',
        'blob-5':         'blob-drift-5 8s infinite ease-in-out',
      },
    },
  },
  plugins: [],
}
