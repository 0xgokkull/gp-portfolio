module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        slideIn: "slideIn 1s ease-out",
        gradientShift: 'gradientShift 6s ease infinite',
        neonPulse: 'neonPulse 3s ease-in-out infinite',
        floatSlow: 'floatSlow 8s ease-in-out infinite',
        wiggle: 'wiggle 4s ease-in-out infinite',
      },
      keyframes: {
        slideIn: {
          "0%": { opacity: 0, transform: "translateY(50px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        gradientShift: {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        },
        neonPulse: {
          '0%,100%': { filter: 'drop-shadow(0 0 4px #0ea5e9) drop-shadow(0 0 12px #38bdf8)' }, // cyan-600 & sky-400
          '50%': { filter: 'drop-shadow(0 0 8px #38bdf8) drop-shadow(0 0 24px #0ea5e9)' }
        },
        floatSlow: {
          '0%,100%': { transform: 'translateY(-4px)' },
          '50%': { transform: 'translateY(6px)' }
        },
        wiggle: {
          '0%,100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' }
        }
      },
    },
  },
  plugins: [],
};
