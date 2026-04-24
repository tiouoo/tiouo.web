<template>
  <a-config-provider :theme="{ algorithm: antdAlgorithm }">
    <MainView />
  </a-config-provider>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import MainView from './MainView.vue';
import { initTheme, getAntdAlgorithm } from './utils/theme';

// 响应式计算 Ant Design 主题算法
const antdAlgorithm = computed(() => getAntdAlgorithm());

onMounted(() => {
  initTheme();
});
</script>
<style scoped>
body {
  font-family: 'a', sans-serif;
  background-size: cover;
  color: #e0e0e0;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  overflow: hidden;
  overflow-x: hidden;
  width: 100vw;
  overflow-y: scroll;
}
main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  padding-top: 4px;
}
</style>
