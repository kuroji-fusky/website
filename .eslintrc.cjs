module.exports = {
  root: true,
  env: {
    es2022: true,
    browser: true
  },
  ignorePatterns: ["node_modules/", ".vercel/", ".astro/", ".env", "packages/"],
  extends: ["plugin:astro/recommended", "plugin:svelte/recommended"],
  parser: "@typescript-eslint/parser",
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"]
      }
    },
    {
      files: ["*.svelte"],
      parser: "svelte-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".svelte"]
      }
    }
  ],
  rules: {
    "no-undef": 0,

    "@typescript-eslint/ban-ts-comment": 0,

    "svelte/no-at-html-tags": 0
  }
}
