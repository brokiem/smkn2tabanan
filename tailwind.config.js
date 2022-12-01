module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "blue-secondary": "#1D1CE5",
        "light-blue": "#4649FF",
        "light-blue-secondary": "#7978FF",
        "light-purple": "#C47AFF"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}