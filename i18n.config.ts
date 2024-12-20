import EN from './locales/en.json';
import CN from './locales/zh-CN.json';

export default defineI18nConfig(() => ({
  legacy: false,
  // locale: 'CN',
  messages: {
    EN,
    CN,
  },
}));
