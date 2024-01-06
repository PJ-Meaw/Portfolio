import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens:{
      md : "768px",
      xl : "1440px"
    },
    extend: {
      colors:{
        'primary-50' : '#DEDEFF',
        'primary-100' : '#757DE8',
        'primary-200' : '#3F51B5',
        'primary-300' : '#2196F3',
        'primary-400' : '#003F8F',
        'gray-100' : '#878787',
        'gray-200' : '#4A4A4A',
        'black' : '#292929',
        'white' : '#FFFFFF',
        'red' : '#D92D20',
      },
      boxShadow: {
          card: "0px 20px 50px rgba(0, 0, 0, 0.06)",
          course: "0px 0px 50px rgba(0, 0, 0, 0.06)",
          thin: "0px 8px 24px 0px rgba(36, 42, 56, 0.20)",
          'thin-more': "0px 6px 10px 0px rgba(36, 42, 56, 0.20)",
      },
    },
    fontFamily: {
      Rubik : ["Rubik", "sans-serif"], 
      Pridi : ["Pridi", "serif"], 
    }
  },
  plugins: [
    ({ addUtilities } : {addUtilities : any}) => {
        addUtilities({
          '.light14': {},
          '.light16': {},
          '.light18': {},
          '.light20': {},
          '.light24': {},
          '.light30': {},
          '.light36': {},
          '.regular14': {},
          '.regular16': {},
          '.regular18': {},
          '.regular20': {},
          '.regular24': {},
          '.regular30': {},
          '.regular36': {},
          '.medium14': {},
          '.medium16': {},
          '.medium18': {},
          '.medium20': {},
          '.medium24': {},
          '.medium30': {},
          '.medium36': {},
          '.bold14': {},
          '.bold16': {},
          '.bold18': {},
          '.bold20': {},
          '.bold24': {},
          '.bold30': {},
          '.bold36': {},
          '.input' :{},
        });
      }
  ],
}
export default config
