module.exports = {
  theme: {
    extend: {
      colors: {
        gallery: '#eff8fe',

        main: {
          100: '#02416d',    //dark blue
          200: '#0f75bc',    //logo blue
          300: '#233d74',    //footer header
        },  

        sec: {
          100: '#f7941e'    
        }
      },

      spacing: {
        '2px': '2px',
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        '1/10': '10%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
        '1/20': '5%',
        full: '100%',
        screen: '100vw',
      }
    }
  },
  variants: {
    border: ['responsive', 'hover', 'focus', 'active'],
    borderWidth: ['responsive', 'hover', 'focus', 'active'],
    borderStyles: ['responsive', 'hover', 'focus', 'active'],
    borderColor: ['responsive', 'hover', 'focus', 'active'],
    transitionDuration: ['responsive', 'hover', 'focus', 'active']
  },
  plugins: []
}
