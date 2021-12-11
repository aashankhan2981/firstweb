module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        brand:{
          default:"#F6FAFD",
          firstHead:"#676767",
          button1:"#4856DF",
          secondBg:"#3F3D56",
          week:"#DADADA",
          quotes:"#524E7E",
          email:"#555555",
          gradient:"#FEE6F7"
          
        }
      },
      screens:{
        
        'sm': '506px',

        

        // => @media (min-width: 640px) { ... }
        'md': '768px',
        'eight':"800px",

        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
