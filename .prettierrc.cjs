module.exports = {
  semi: false,
  trailingComma: "none",
  plugins: ["prettier-plugin-astro"],
  overrides: [{ files: "src/**/*.astro", options: { parser: "astro" } }]
}
