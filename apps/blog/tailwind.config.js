/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
        "open-sans": ["Open Sans"],
      },
      spacing: {
        unset: "unset",
      },
      inset: {
        unset: "unset",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
