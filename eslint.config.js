import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginAstro from "eslint-plugin-astro";

export default [
    { ignores: ["node_modules/**", ".dist/**"] },
    {
        files: ["**/*.{js,jsx,mjs,cjs,ts,tsx,astro}"],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
    },
    // js
    js.configs.recommended,
    // typescript
    ...tseslint.configs.recommended,
    // astro
    ...eslintPluginAstro.configs.recommended,
    ...eslintPluginAstro.configs["jsx-a11y-recommended"],
    // Override for astro env.d.ts
    {
        files: ["src/env.d.ts"],
        rules: {
            "@typescript-eslint/triple-slash-reference": "off",
        },
    },
    // Override for prettier: prettier formats code, eslint fixes code
    eslintConfigPrettier,
];
