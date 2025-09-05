module.exports = {
    extends: [
        'plugin:@stylistic/disable-legacy',
        '@ni/eslint-config-javascript'
    ],
    rules: {
        '@typescript-eslint/no-var-requires': 'off'
    }
};
