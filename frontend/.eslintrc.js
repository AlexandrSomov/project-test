const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', '.prettierrc'), 'utf8'));

module.exports = {
extends: ['airbnb', 'airbnb-typescript', 'react-app', 'prettier'],
parserOptions: {
    project: './tsconfig.json',
},
plugins: ['prettier'],
rules: {
    'prettier/prettier': ['error', prettierOptions],
},
overrides: [
    {
        files: ['**/*.ts?(x)'],
        rules: {
            'prettier/prettier': ['warn', prettierOptions],
            'no-param-reassign': ['error', { props: false }],
            'react/no-unstable-nested-components': ['off' | 'warn' | 'error', { allowAsProps: true }],
            'import/prefer-default-export': 'off',
            'react/require-default-props': 'off',
            'import/no-import-module-exports': 'off',
            'react/jsx-props-no-spreading': 'off',
            'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
            'import/no-extraneous-dependencies': ["error", {"devDependencies": true}]
        },
    },
],
ignorePatterns: [
    '.eslintrc.js',
],
};
