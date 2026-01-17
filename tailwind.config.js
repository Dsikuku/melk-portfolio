/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // Just in case you use a pages folder
  ],
  theme: {
    extend: {
      // This is where we can add custom brand colors later
    },
  },
  plugins: [],
}