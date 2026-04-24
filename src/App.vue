<template>
  <div class="root">
    <MainView />
  </div>
</template>

<script setup lang="ts">
import MainView from './MainView.vue';
</script>
<style scoped>
.root {
  width: 100%;
  height: 100%;
  /* 移除背景设置，让body的格子背景能够显示 */
}
</style>
