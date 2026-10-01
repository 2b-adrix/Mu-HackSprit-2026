/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '980px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'primary-blue': '#0A3D91',
        'secondary-blue': '#1565C0',
        'accent-blue': '#1E88E5',
        'glass-white': 'rgba(255, 255, 255, 0.9)',
        'off-white': '#FDF5E6',
        'cream': '#FAEBD7',
        'beige': '#F5F0E8',
        'neon-blue': '#1B3FAB',
      },
      fontFamily: {
        exo: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'blue-gradient': 'linear-gradient(135deg, #0A3D91 0%, #1565C0 100%)',
        'white-gradient': 'linear-gradient(180deg, #FFFFFF 0%, #F0F4F8 100%)',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
