
import { defineConfig, globalIgnores } from "eslint/config";
import js from "@eslint/js";
import tsParser from "typescript-eslint";
import astro from "eslint-plugin-astro";
import astroParser from "astro-eslint-parser";

export default defineConfig([
  js.configs.recommended,

  ...tsParser.configs.recommended,

  ...astro.configs.recommended,

  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tsParser.parser,
        extraFileExtensions: [".astro"],
        sourceType: "module",
      },
    },
  },

  globalIgnores([
    "node_modules/**",
    ".astro/**",
    "dist/**",
    "build/**",
    "coverage/**",
    "public/**",
  ]),
]);
