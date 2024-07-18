module.exports = {
  root: true,
  env: {
    es2020: true,
    browser: true
  },
  ignorePatterns: ["node_modules/", "kuro-api/", ".vercel/", ".astro/", ".env"],
  extends: ["@fusky-labs/base", "plugin:astro/recommended"],
  parser: "astro-eslint-parser",
  parserOptions: {
    ecmaVersion: 2020
  },
  overrides: [
    {
      files: ["*.astro"],
      parserOptions: {
        sourceType: "module",
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"]
      }
    }
  ],

  rules: {
    "@stylistic/object-curly-newline": 0,

    "import/no-deprecated": 0,
    "import/namespace": 0
  }
}
