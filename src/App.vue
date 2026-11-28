<template>
  <div class="root">
    <LanguagePrompt v-if="showLanguagePrompt" />
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import LanguagePrompt from './components/LanguagePrompt.vue';

const showLanguagePrompt = /^zh(?:-|$)/i.test(navigator.language);
</script>
<style scoped>
.root {
  width: 100%;
  height: 100%;
}
</style>
