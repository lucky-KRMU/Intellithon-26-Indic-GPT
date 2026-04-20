/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B0F19',
        surface: '#1A233A',
        surfaceHighlight: '#2A344A',
        primary: '#4F46E5', // Indigo 600
        primaryHover: '#6366F1', // Indigo 500
        secondary: '#0EA5E9', // Sky 500
        accent: '#F43F5E', // Rose 500
        text: '#F1F5F9', // Slate 100
        textMuted: '#94A3B8', // Slate 400
        success: '#10B981', // Emerald 500
        warning: '#F59E0B', // Amber 500
        error: '#EF4444', // Red 500
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      }
    },
  },
  plugins: [],
}
