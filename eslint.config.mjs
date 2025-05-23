import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import pluginQuery from '@tanstack/eslint-plugin-query'
import eslintConfigPrettier from "eslint-config-prettier";
import tailwind from "eslint-plugin-tailwindcss";
import pluginUnusedImports from "eslint-plugin-unused-imports";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});



const config = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  eslintConfigPrettier,
  ...tailwind.configs["flat/recommended"],
  ...pluginQuery.configs["flat/recommended"],
  {
    plugins: {
      "unused-imports": pluginUnusedImports,
    },

    languageOptions: {
      // globals: {
      //   ...pluginJest.environments.globals.globals,
      // },
    },

    rules: {
      // C
      camelcase: "off",
      "capitalized-comments": "off",
      "default-param-last": "error",

      // E
      eqeqeq: "error",
      "max-params": ["warn", 3],

      // N
      "no-console": [
        "warn",
        {
          allow: ["warn", "error"],
        },
      ],
      "no-empty-function": "warn",
      "no-param-reassign": "error",

      // P
      "padding-line-between-statements": [
        "error",
        {
          blankLine: "always",
          prev: "*",
          next: "return",
        },
        {
          blankLine: "always",
          prev: "*",
          next: "function",
        },
        {
          blankLine: "always",
          prev: "*",
          next: "block-like",
        },
        {
          blankLine: "always",
          prev: ["import"],
          next: "*",
        },
        {
          blankLine: "any",
          prev: ["import"],
          next: ["import"],
        },
        {
          blankLine: "always",
          prev: ["const", "let", "var"],
          next: "*",
        },
        {
          blankLine: "any",
          prev: ["const", "let", "var"],
          next: ["const", "let", "var"],
        },
      ],
      "prefer-const": "error",
      "prefer-destructuring": "error",
      "prefer-object-spread": "warn",
      "padding-line-between-statements": "off",

      "sort-keys": [
        "off",
        "asc",
        {
          natural: true,
          minKeys: 5,
        },
      ],
      "sort-vars": "error",
      "sort-imports": ["off"],

      // React
      "react/boolean-prop-naming": ["warn"],
      "react/jsx-newline": ["off"],
      "react/jsx-no-useless-fragment": [
        "error",
        {
          allowExpressions: true,
        },
      ],
      "react/jsx-sort-props": [
        "off",
        {
          ignoreCase: true,
        },
      ],
    },
  },
];

export default config;
