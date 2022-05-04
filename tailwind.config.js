const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    colors: {
      slate: colors.slate,
      grey: colors.grey,
      primary: "#1C64F2",
      "primary-hover": "#0033cc",
      secondary: "#FFFFFF",
      "secondary-hover": "#f1f1f1",
      card: "#26292D",
    },
    extend: {
      screens: {
        xs: "400px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
        "3xl": "1536px",
        "4xl": "1700px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
  important: true,
};
