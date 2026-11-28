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
          src="@/assets/static/avatar.png"
          :alt="copy.titleAvatar" />
        <span style="color: white; opacity: visibleOpacity">Tiouo</span>
      </div>
      <div class="right">
        <button class="g-btn" :disabled="!visibleOpacity" @click="openModal('/img/t/qq.png')">
          <span style="position: relative; top: 1px">{{ copy.contact }}</span>
          <div class="g-btn-icon">
            <span class="iconfont icon-comment" aria-hidden="true"></span>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { copy } from '@/locale';
import { computed, inject } from 'vue';

const props = defineProps<{
  scrollRatio: number;
}>();

const openModal = inject<(imageUrl: string) => void>('openModal', () => {});

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
  max-width: 1400px;
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
  font-family: 'fff', sans-serif;
  font-size: 16px;
  white-space: nowrap;
  background: rgba(255, 255, 255);
  cursor: pointer;
  transition: transform 0.3s ease;
}
.g-btn:disabled {
  transform: translateY(-6px);
  pointer-events: none;
}
.g-btn-icon {
  flex-shrink: 0;
  margin-left: 10px;
  width: 18px;
  height: 18px;
  font-size: 18px;
  color: black;
  transition: transform 0.3s ease;
  top: -1px;
  position: relative;
}
.g-btn:hover .g-btn-icon {
  transform: scale(1.1);
}
@media (prefers-reduced-motion: reduce) {
  .g-btn:disabled {
    transform: none;
  }
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
