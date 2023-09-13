module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      white: "#fff",
      black: "#000",
      darkblue: "#220070",
      blue: "#450eff",
      purple: "#7e5bef",
      pink: "#e200f7",
      orange: "#ff901b",
      darkorange: "#ff321a",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      graylight: "#d3dce6",
      backgroundPrimary: "#08356b",
      activePrimary: "#143887",
      activeSecondary: "#fa5821",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  // plugins: [require("flowbite/plugin")],
};
