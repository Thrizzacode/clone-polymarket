import { createVNode, render } from 'vue';
import Notification from '~/components/util/Notification.vue';

export default defineNuxtPlugin((nuxtApp) => {
  let isNotificationVisible = false;
  // 定义通知方法
  const notify = ({ title, message, type = 'success', duration = 3000 }) => {
    if (isNotificationVisible) return;

    const container = document.createElement('div');
    document.body.appendChild(container);
    isNotificationVisible = true;

    const vnode = createVNode(Notification, {
      title,
      message,
      type,
      duration,
      onClose: () => {
        isNotificationVisible = false;
        render(null, container);
        document.body.removeChild(container);
      },
    });
    render(vnode, container);

    // setTimeout(() => {
    // render(null, container);
    // document.body.removeChild(container);
    // }, duration);
  };

  // 将通知方法注入到 Nuxt 应用中
  nuxtApp.provide('notify', notify);
});
