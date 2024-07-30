module.exports = {
  root: true,
  env: {
    es2022: true,
    browser: true
  },
  ignorePatterns: ["node_modules/", ".vercel/", ".astro/", ".env", "packages/"],
  extends: ["plugin:astro/recommended", "@fusky-labs/base"],
  parser: "@typescript-eslint/parser",
  rules: {
    "no-undef": 0,

    "import/no-deprecated": 0,
    "import/namespace": 0,
    "import/no-useless-path-segments": 1
  },
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"]
      }
    }
  ]
}
