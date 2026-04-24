<template>
  <div class="c">
    <div class="cc">
      <h1>404 NotFound</h1>
      <button class="x-btn" @click="toHome">← 返回首页</button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const toHome = () => {
  router.push(`/`);
};
</script>
<style scoped>
.c {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.cc {
  margin-bottom: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
