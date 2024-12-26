/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#aa6d6b",
        brandDark: "#151616",
      },

      fontFamily: {
        poppins: ["poppins", "sans-sarif"],
        varela: ["Varela Round", "sans-sarif"],
      },

      container: {
        center: true,
        padding: {
          DEFAUT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};
