/** @type {import('@types/eslint').ESLint.ConfigData} */
module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
    plugins: ['svelte3', '@typescript-eslint'],
    overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
    settings: {
        'svelte3/typescript': () => require('typescript'),
        'jsdoc': {
            mode: 'typescript'
        }
    },
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2020
    },
    env: {
        browser: true,
        es2017: true,
        node: true
    },
    rules: {
        "@typescript-eslint/no-unsafe-declaration-merging": "off",
        "@typescript-eslint/no-unused-vars": "warn"
    },
    ignorePatterns: ['.vscode', 'node_modules', 'build']
}