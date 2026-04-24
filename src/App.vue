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
  background-color: black;
  background-image: radial-gradient(
    ellipse 90% 40% at 50% 100%,
    lab(69.7546% -8.65325 -26.6605/0.25),
    transparent 70%
  );
  background-size: cover;
  background-attachment: fixed;
}
</style>
