<template>
  <div class="root">
    <TitleBar class="title-bar" />
    <div class="main-wrapper">
      <div class="title-bar-fade"></div>
      <div class="main">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import TitleBar from './components/TitleBar.vue';
</script>
<style scoped>
.title-bar {
  z-index: 999;
  margin: 10px;
  margin-bottom: 0;
}
.main-wrapper {
  position: relative;
  flex: 1;
  overflow: hidden;
}
.title-bar-fade {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 25px;
  background: linear-gradient(to bottom, var(--bg), transparent);
  z-index: 10;
  pointer-events: none;
}
.root {
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
}
.main {
  overflow-x: hidden;
  overflow-y: scroll;
  width: 100vw;
  height: 100%;
}
</style>
