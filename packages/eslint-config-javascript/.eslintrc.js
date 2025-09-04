module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@stylistic/disable-legacy',
        '@ni/eslint-config-javascript'
    ],
    plugins: [
        '@stylistic'
    ],
    rules: {
        '@typescript-eslint/no-var-requires': 'off'
    }
};
