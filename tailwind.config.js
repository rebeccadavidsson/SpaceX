const { colors } = require(`tailwindcss/defaultTheme`);
const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  variants: {
    extend: {
      fontSize: ["hover", "focus"],
      backgroundOpacity: ["active"],
      borderWidth: ["hover", "focus"],
      textColor: [
        "responsive",
        "dark",
        "group-hover",
        "focus-within",
        "hover",
        "focus",
      ],
    },
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lato': ['Lato']
      },
      screens: {
        'xs': '340px',
        ...defaultTheme.screens,
      },
      colors: {
        primary: colors.indigo,
        blue: colors.blue,
      },
      container: {
        center: true,
        padding: {
          default: "1rem",
          md: "2rem",
        },
      },
    },
  },
};
