module.exports = {
  semi: false,
  trailingComma: "none",
  printWidth: 100,
  plugins: ["prettier-plugin-astro"],
  overrides: [{ files: "src/**/*.astro", options: { parser: "astro" } }]
}
