module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'cream': 'rgb(246, 244, 241)',
        'slate-gray': 'rgb(47, 79, 79)', 
        'charcoal': 'rgb(47, 47, 47)',
        'sand': 'rgb(217, 203, 184)',
        'mint': 'rgb(185, 217, 208)',
        'accent-gold': 'rgb(212, 175, 55)',
      },
      fontFamily: {
        'heading': ['Josefin Sans', 'sans-serif'],
        'body': ['Playfair Display', 'serif'],
        'ui': ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
