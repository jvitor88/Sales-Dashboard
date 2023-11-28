/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily:{
        main:['Josefin Sans', 'sans-serif']
      },
      colors:{
        mainbg: "rgba(224, 224, 224, 1)",
        primary: "#2E3093",
        secondary: "#29AAE2",
        terciary: "#7BC2E0"
      }
    }
  },
  plugins: [
    require('flowbite/plugin')
]
}

