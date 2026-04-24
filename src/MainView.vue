<template>
  <div class="up-background"></div>
  <TitleBar class="title-bar" />
</template>
<script setup lang="ts">
import TitleBar from './components/TitleBar.vue';
</script>
<style scoped>
.up-background {
  background-color: rgb(0, 0, 0);
  background-image: radial-gradient(
    125% 125% at 50% 100%,
    rgb(0, 0, 0) 20%,
    oklch(0.74 0.08 245 / 0.4) 100%
  );
  will-change: opacity;
  transform: translateZ(0px);
  transition: opacity 0.1s linear;
  opacity: 0;
  min-width: 100vw;
  min-height: 100vh;
  position: fixed;
  z-index: -1;
}
</style>
