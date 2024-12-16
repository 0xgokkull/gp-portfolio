module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        slideIn: "slideIn 1s ease-out",
      },
      keyframes: {
        slideIn: {
          "0%": { opacity: 0, transform: "translateY(50px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
