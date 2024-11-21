import globals from "globals"
import tseslint from "@typescript-eslint/eslint-plugin"
import tseslintParser from "@typescript-eslint/parser"
import prettier from "eslint-plugin-prettier"

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: {
      globals: globals.browser,
      parser: tseslintParser,
    },
    plugins: {
      "@typescript-eslint": tseslint,
      prettier,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      "prettier/prettier": "error",
      // settings: {
      //   prettier: true, // Optional, ensures Prettier is actively considered in the config
      // },
      // ...your other config items
    },
  },
]
