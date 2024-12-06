import { defineRule, configure } from 'vee-validate';
import { required, email } from '@vee-validate/rules';

import { localize, setLocale } from '@vee-validate/i18n';
import zhCN from '@vee-validate/i18n/dist/locale/zh_CN.json';

export default defineNuxtPlugin(() => {
  defineRule('required', required);
  defineRule('email', email);

  // 設定多國語系與驗證訊息
  configure({
    // 載入繁體中文的設定檔，產生繁體中文的驗證訊息
    generateMessage: localize({ zh_CN: zhCN }),
    validateOnInput: true, // 輸入文字時立即進行驗證
  });

  // 設定預設語言為繁體中文
  setLocale('zh_CN');
});
