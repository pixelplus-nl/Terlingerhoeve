/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bricolage: ["var(--font-bricolage)"],
        spartan: ["var(--font-spartan)"],
      },

      keyframes: {
        slideDown: {
          from: { height: "0", opacity: "0" },
          to: {
            height: "var(--radix-accordion-content-height)",
            opacity: "1",
          },
        },

        slideUp: {
          from: {
            height: "var(--radix-accordion-content-height)",
            opacity: "1",
          },
          to: { height: "0", opacity: "0" },
        },

        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        fadeOut: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
      },

      animation: {
        slideDown: "slideDown 400ms ease-out",
        slideUp: "slideUp 400ms ease-out",
        fadeIn: "fadeIn 200ms ease-out",
        fadeOut: "fadeOut 200ms ease-out",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },

    colors: {
      beige: "#F2EEE7",
      darkBeige: "#E5E0D6",
      brown: "#B55A45",
      lightGreen: "#A0AE9C",
      darkGreen: "#6B7969",
      blue: "#556A76",
    },
  },
  plugins: [require("tailwindcss-radix")()],
};
