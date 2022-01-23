module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: { "app-blue": "#4C62B7", "app-gray": "#DEE6FB","app-green" : "#6FBD42", },
      height: { "1/10": "10%", "9/10": "90%" },
      
      fontFamily:{
        'poppins':['Poppins']
    }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
