import js from '@eslint/js'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'

export default defineConfig([
  globalIgnores(['dist']),
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    ignores: ['*.config.js'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser
      },
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module'
      }
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'react': react
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...react.configs.recommended.rules,
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }
      ],
      'semi': ['error', 'never'],
      'comma-dangle': ['error', 'never'],
      'quotes': ['error', 'single'],
      'react/prop-types': 'off',
      'indent': ['error', 'tab'],
      'react/jsx-no-target-blank': 'error',
      'react/react-in-jsx-scope': 'off'
    }
  }
])
