import './assets/css/main.css';
import './assets/css/iconfont.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import { isChinese } from './locale';

if (isChinese) {
  const canonicalUrl = 'https://tiouo.cc/zh';

  document.documentElement.lang = 'zh-CN';
  document.querySelector('link[rel="canonical"]')?.setAttribute('href', canonicalUrl);
  document.querySelector('meta[property="og:url"]')?.setAttribute('content', canonicalUrl);
}

const app = createApp(App);

app.use(createPinia());
app.mount('#app');

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
