module.exports = {
  semi: false,
  trailingComma: "none",
  plugins: ["prettier-plugin-astro", "prettier-plugin-svelte"],
  overrides: [
    {
      files: "src/**/*.astro",
      options: { parser: "astro" }
    },
    {
      files: "src/**/*.svelte",
      options: { parser: "svelte" }
    }
  ]
}
