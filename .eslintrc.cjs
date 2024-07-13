module.exports = {
  root: true,
  env: {
    es2021: true,
    browser: true
  },
  ignorePatterns: ["node_modules/", "kuro-api/", ".vercel/", ".astro/", ".env"],
  extends: ["@fusky-labs/base", "plugin:astro/recommended"],
  parser: "astro-eslint-parser",
  overrides: [
    {
      files: ["*.astro"],
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"]
      }
    }
  ],
  rules: {}
}
