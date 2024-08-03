/** @type {import('tailwindcss').Config} */
export default {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         backgroundColor:{
            "primary":"#202028",
            "body-bg":"#151419",
         },
         textColor:{
            primary:"#b1b2b7"
         },
         fill:{
            'default-fill':'#b1b2b7',
         },
         stroke:{
            'default-stroke':'#b1b2b7',
         }
      },
   },
   plugins: [],
}
