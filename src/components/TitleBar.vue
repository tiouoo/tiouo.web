<template>
  <div class="title-container" :style="{ opacity: visibleOpacity }">
    <div class="content">
      <div class="left">
        <img
          class="avatar"
          :style="{
            opacity: visibleOpacity,
            width: `${scale * 42}px`,
            height: `${scale * 42}px`,
          }"
          src="@/assets/static/avatar.jpg"
          alt="avatar-title" />
        <span style="color: white; opacity: visibleOpacity">Tiouo</span>
      </div>
      <div class="right">
        <button
          :style="{ width: `${scale * 139}px` }"
          class="g-btn"
          @click="windowObj.open('https://f.tiouo.xyz/t/qq.jpg', '_blank')">
          <span style="position: relative; top: 1px">Contact</span>
          <div class="g-btn-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
              <path
                d="M576 304C576 436.5 461.4 544 320 544C282.9 544 247.7 536.6 215.9 523.3L97.5 574.1C88.1 578.1 77.3 575.8 70.4 568.3C63.5 560.8 62 549.8 66.8 540.8L115.6 448.6C83.2 408.3 64 358.3 64 304C64 171.5 178.6 64 320 64C461.4 64 576 171.5 576 304z" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  scrollRatio: number;
}>();

const windowObj = window;

const visibleOpacity = computed(() => {
  return props.scrollRatio >= 1 ? 1 : 0;
});

const scale = computed(() => {
  return props.scrollRatio >= 1 ? 1 : 0;
});
</script>

<style scoped>
.content {
  display: flex;
  max-width: 1440px;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
}
.title-container {
  position: fixed;
  top: 0;
  left: 0;
  padding: 20px 32px;
  width: 100vw;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  z-index: 100;
  background: transparent;
  backdrop-filter: blur(2px) saturate(90%);
  -webkit-backdrop-filter: blur(2px) saturate(90%);
  mask-image: linear-gradient(
    to bottom,
    black 0%,
    black 60%,
    rgba(0, 0, 0, 0.8) 80%,
    transparent 100%
  );
  -webkit-mask-image: linear-gradient(
    to bottom,
    black 0%,
    black 60%,
    rgba(0, 0, 0, 0.8) 80%,
    transparent 100%
  );
  transition: opacity 0.3s ease;
}
.g-btn {
  padding: 10px 20px;
  border-radius: 999px;
  display: flex;
  border: 0;
  align-items: center;
  font-weight: 600;
  color: black;
  font-family: 'Google Sans Code', sans-serif;
  font-size: 16px;
  background: rgba(255, 255, 255);
  cursor: pointer;
  transition: all 0.2s ease;
}
.g-btn-icon {
  margin-left: 10px;
  width: 18px;
  height: 18px;
  fill: black;
  transition: transform 0.3s ease;
}
.g-btn:hover .g-btn-icon {
  transform: scale(1.1);
}
.avatar {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  margin-right: 12px;
  transition: all 0.2s ease;
}
.left {
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
  color: #1d1d1f;
  letter-spacing: -0.5px;
}
span {
  line-height: 1;
  transition: opacity 0.3s ease;
}
</style>
