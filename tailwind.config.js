module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      maxWidth: {
        'default': '950px',
      },
      colors: {
        "blue-secondary": "#1D1CE5",
        "light-blue": "#4649FF",
        "light-blue-secondary": "#7978FF",
        "light-purple": "#C47AFF",
        "gray-softer": "#D8DADF",
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}