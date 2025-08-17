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
          '0%,100%': { filter: 'drop-shadow(0 0 4px #a855f7) drop-shadow(0 0 12px #d946ef)' },
          '50%': { filter: 'drop-shadow(0 0 8px #d946ef) drop-shadow(0 0 24px #a855f7)' }
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
