/* eslint-disable @typescript-eslint/no-explicit-any */
import './assets/css/main.css';
import 'ant-design-vue/dist/reset.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import Antd, { message } from 'ant-design-vue';
import App from './App.vue';
import router from './router';
import { toggleTheme, setTheme, isDark } from './utils/theme';

(window as any).theme = {
  toggle: toggleTheme,
  set: setTheme,
  isDark: () => isDark.value,
};

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText,
} from '@fortawesome/vue-fontawesome';
library.add(fas, fab);

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);
app.component('font-awesome-layers', FontAwesomeLayers);
app.component('font-awesome-layers-text', FontAwesomeLayersText);

app.use(createPinia());
app.use(router);

message.config({
  maxCount: 2,
});

app.use(Antd).mount('#app');

// PWA 自动更新
if ('serviceWorker' in navigator) {
  import('virtual:pwa-register').then(({ registerSW }) => {
    registerSW({
      immediate: true,
      onNeedRefresh() {
        console.log('新版本可用，正在更新...');
      },
      onOfflineReady() {
        console.log('应用已可离线使用');
      },
    });
  });
}
