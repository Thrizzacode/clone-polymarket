// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
  // Your custom configs here
  {
    rules: {
      'vue/attribute-hyphenation': 'off',
      'vue/html-self-closing': [
        'error',
        {
          html: { normal: 'never', void: 'always' },
        },
      ],
    },
    languageOptions: {
      globals: {
        useApi: 'readonly',
        useCallBets: 'readonly',
        useSettingStore: 'readonly',
        useLobbyStore: 'readonly',
        useTableStore: 'readonly',
        useDrawResultStore: 'readonly',
        useI18n: 'readonly',
      },
    },
  }
);
