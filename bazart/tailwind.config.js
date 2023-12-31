/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      mainDark: "#0A0A0A",
      greenOrb: "#0D342E",
      redOrb: "#61322D",
      headerColor: "#D3CBB8",
      blue: "#188CB7",
      red: "#AA3A38",
      green: "#2F7336",
      yellow: "#F0D697",
      starYellow: "#F4B30C",
      white: "#ffffff",
      cardGray: "#9CA3AF",
      black: "#000000",
      orange: "#D0532B",
      subgray: "#777E90",
      inputBg : "#333333",
      sellerCardBg : "#3B3B3B",
      modalBg : "#1b1b1b"
    },
    extend: {},
  },
  plugins: [],
};
