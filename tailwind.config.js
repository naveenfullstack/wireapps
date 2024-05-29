/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Alata", "sans-serif"],
      },
      fontSize: {
        title: "2rem",
        title2: "1.5rem",
        subtitle: "0.9rem",
      },
      maxWidth: {
        defult: "80rem",
      },
      colors: {
        primery: "#0E42FD",
      },
    },
  },
  plugins: [],
};
