import eslintReact from "@eslint-react/eslint-plugin";
import pluginJs from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next";
// import tailwind from "eslint-plugin-tailwindcss";
import jsxA11y from "eslint-plugin-jsx-a11y";
import perfectionist from "eslint-plugin-perfectionist";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import pluginReact from "eslint-plugin-react";
import * as regexpPlugin from "eslint-plugin-regexp";
import unusedImports from "eslint-plugin-unused-imports";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  {
    files: ["**/*.{ts,tsx}"],
  },
  {
    languageOptions: {
      ecmaVersion: "latest",
      globals: { ...globals.browser, ...globals.node },
    },
  },
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  regexpPlugin.configs["flat/recommended"],
  pluginJs.configs.recommended, // ? https://github.com/eslint/eslint
  jsxA11y.flatConfigs.recommended, // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y
  // ...tailwind.configs["flat/recommended"], // https://github.com/francoismassart/eslint-plugin-tailwindcss TODO: Not currently working with Tailwind v4, add when it's updated
  ...tseslint.configs.recommended, // ? https://github.com/typescript-eslint/typescript-eslint
  perfectionist.configs["recommended-alphabetical"], // https://github.com/azat-io/eslint-plugin-perfectionist
  pluginReact.configs.flat.recommended, // ? https://github.com/jsx-eslint/eslint-plugin-react
  eslintReact.configs["recommended-typescript"], // https://github.com/Rel1cx/eslint-react
  pluginReact.configs.flat["jsx-runtime"], // ? https://github.com/jsx-eslint/eslint-plugin-react
  eslintPluginPrettierRecommended, // https://github.com/prettier/eslint-plugin-prettier
  {
    rules: {
      "@eslint-react/hooks-extra/no-direct-set-state-in-use-effect": "off",
      "@typescript-eslint/comma-dangle": "off",
      "@typescript-eslint/consistent-type-imports": "off",
      "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "no-console": [
        2,
        {
          allow: ["warn", "error"],
        },
      ],
      "no-param-reassign": 0,
      "no-restricted-syntax": [
        "error",
        "ForInStatement",
        "LabeledStatement",
        "WithStatement",
        "FunctionExpression",
      ],
      "perfectionist/sort-exports": [
        "error",
        { order: "asc", type: "natural" },
      ],
      "perfectionist/sort-imports": [
        "error",
        {
          customGroups: {
            type: {
              alias: ["^@/.*"], // Custom group for any type import starting with `@/`
            },
            value: {
              alias: ["^@/.*"], // Corrected regex to match anything starting with `@/`
            },
          },
          groups: [
            "side-effect", // Ensures `"use client";` stays on top
            "builtin", // Built-in Node.js modules (fs, path, etc.)
            "external", // npm packages (e.g., react, date-fns, next-intl)
            "internal", // Internal project modules (not alias)
            "alias", // Alias imports (e.g., @/components, @/utils)
            "unknown", // Catch any unknown cases
          ],
          newlinesBetween: "always", // Ensures spacing between groups
          order: "asc",
          type: "natural",
        },
      ],
      "perfectionist/sort-named-imports": [
        "error",
        { order: "asc", type: "natural" },
      ],
      "react/destructuring-assignment": "off",
      "react/function-component-definition": "off",
      "react/jsx-props-no-spreading": "off",
      "react/require-default-props": "off",
    },
  },

  // Disable some rules for JS files
  {
    files: ["**/*.js"],
    rules: {
      "@typescript-eslint/no-require-imports": "off",
      "no-console": "off",
    },
  },

  {
    plugins: {
      "@next/next": nextPlugin,
      "unused-imports": unusedImports,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
      "@next/next/no-html-link-for-pages": "off",
      "@next/next/no-img-element": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          args: "after-used",
          argsIgnorePattern: "^_",
          vars: "all",
          varsIgnorePattern: "^_",
        },
      ],
    },
  },
  {
    ignores: [".next/*"],
  },
];
