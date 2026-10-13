/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Fira Code', 'monospace'],
      },
      colors: {
        google: {
          blue: '#1a73e8',
          'blue-hover': '#1557b0',
          'blue-surface': '#e8f0fe',
          'blue-tint': '#d3e3fd',
          dark: '#1f1f1f',
          'gray-text': '#444746',
          'gray-muted': '#747775',
          border: '#dadce0',
          'border-light': '#e3e3e3',
          bg: '#ffffff',
          surface: '#f8f9fa',
          'surface-variant': '#f0f4f9',
        }
      },
    },
  },
  plugins: [],
}
