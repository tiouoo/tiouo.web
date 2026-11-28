import './assets/css/main.css';
import './assets/css/iconfont.css';

import { createApp, watch } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import { isChinese } from './locale';
import { router } from './router';

watch(
  isChinese,
  (chinese) => {
    const canonicalUrl = chinese ? 'https://chilo.top/zh' : 'https://chilo.top';

    document.documentElement.lang = chinese ? 'zh-CN' : 'en';
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', canonicalUrl);
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', canonicalUrl);
  },
  { immediate: true }
);

const app = createApp(App);

app.use(createPinia());
app.use(router);
void router.isReady().then(() => app.mount('#app'));

const updateSW = async () => {
  const registration = await navigator.serviceWorker?.ready;
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      registration.update();
    }
  });
  if (registration) {
    setInterval(
      () => {
        registration.update();
      },
      60 * 60 * 1000
    );
    registration.update();
  }
};

if ('serviceWorker' in navigator) {
  updateSW();
}
