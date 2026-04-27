/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg:      'var(--bg)',
        raised:  'var(--raised)',
        accent:  'var(--accent)',
        accent2: 'var(--accent2)',
        ink:     'var(--ink)',
        muted:   'var(--muted)',
        border:  'var(--border)',
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
