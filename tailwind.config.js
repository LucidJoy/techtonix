/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},

    screens: {
      lg: { max: "1800px" },
      md: { max: "800px" },
      xs: { max: "600px" },
      // xs: { max: "400px" },
      minmd: "1700px",
      minlg: "2100px",
    },
  },
  plugins: [],
};
