/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        "Josefin Sans": ["Josefin Sans", "sans-serif"],
      },
      

      backgroundSize: {
        "50%": "50%",
      },

      colors: {
        desaturatedRed: "hsl(0, 36%, 70%)",
        softRed: "hsl(0, 93%, 68%)",
        darkGrayishRed: "hsl(0, 6%, 24%)",
        buttonBg: "hsl(0, 74%, 74%)",
        buttonBg2: "hsl(0, 80%, 86%)",
        error: "#f96464",
        boxshadow: "rgba(198, 110, 110, 0.247569)",
      },

      backgroundImage: (theme) => ({
        "gradient-1":
          "linear-gradient(135deg, hsl(0, 0%, 100%), hsl(0, 100%, 98%))",
        "gradient-2":
          "linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%))",
        "gradient-3": "linear-gradient(150.03deg, #FFFFFF 0%, #FFF4F4 84.51%)",
        "desktop-bg": "url('/images/bg-pattern-desktop.svg')",
      }),
    },
  },
  plugins: [],
};
