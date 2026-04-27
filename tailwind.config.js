/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg:      '#070d1a',
        raised:  '#0d1628',
        accent:  '#4f8ef7',
        accent2: '#7eb8f7',
        ink:     '#dce8ff',
        muted:   '#6b84aa',
        border:  'rgba(79,142,247,0.14)',
      },
      fontFamily: {
        display: ['Syne', 'system-ui', 'sans-serif'],
        body:    ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono:    ['"DM Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
