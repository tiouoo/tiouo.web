<template>
  <div ref="upBackground" class="up-background"></div>
  <div ref="downBackground" class="down-background"></div>
  <div class="layout-content">
    <TitleBar :scrollRatio="scrollRatioV" />
    <slot></slot>
    <FotterView />
  </div>
  <div class="to-top" :class="{ show: scrollRatioV == 1 }" @click="scrollToTop">
    <div class="ico">
      <span class="iconfont icon-arrow-up" aria-hidden="true"></span>
    </div>
  </div>

  <div :class="{ show: showModal }" class="modal-overlay" @click="closeModal">
    <div class="modal-content" @click.stop>
      <button class="modal-close" :aria-label="copy.close" @click="closeModal">
        <span class="iconfont icon-close" aria-hidden="true"></span>
      </button>
      <div class="modal-image">
        <img :src="modalImage" style="z-index: 999" :alt="copy.contactImage" />
        <span class="loading-spinner" aria-hidden="true"></span>
        <span class="tip" style="color: #404040">QQ + 840673183</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { copy } from '@/locale';
import { ref, onMounted, onUnmounted, provide } from 'vue';
import TitleBar from './TitleBar.vue';
import FotterView from './FotterView.vue';

defineProps<{
  scrollRatio?: number;
}>();

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const upBackground = ref<HTMLElement | null>(null);
const downBackground = ref<HTMLElement | null>(null);
const scrollRatioV = ref(0);
const up = ref(0.1);
const down = ref(0.6);

let animationId: number | null = null;

const updateExposure = () => {
  if (!upBackground.value || !downBackground.value) return;
  upBackground.value.style.opacity = up.value.toString();
  downBackground.value.style.opacity = down.value.toString();
};

const lerp = (start: number, end: number, t: number) => {
  return start + (end - start) * t;
};

const animate = () => {
  const threshold = window.innerHeight * 0.8;
  const scrollY = window.scrollY;

  const t = Math.min(1, Math.max(0, scrollY / threshold));

  up.value = lerp(0.1, 0.4, t);
  down.value = lerp(0.6, 0.2, t);
  scrollRatioV.value = Math.min(1, Math.max(0, scrollY / (window.innerHeight * 0.55)));
  updateExposure();

  if (t < 1) {
    animationId = requestAnimationFrame(animate);
  }
};

const handleScroll = () => {
  if (animationId) {
    cancelAnimationFrame(animationId);
  }
  animate();
};

const showModal = ref(false);
const modalImage = ref('');

const openModal = (imageUrl: string) => {
  modalImage.value = imageUrl;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

provide('openModal', openModal);

defineExpose({
  openModal,
});

onMounted(() => {
  updateExposure();
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  if (animationId) {
    cancelAnimationFrame(animationId);
  }
});
</script>

<style scoped>
.tip {
  position: absolute;
  bottom: 75px;
}
.loading-spinner {
  width: 42px;
  height: 42px;
  bottom: 115px;
  position: absolute;
  border: 3px solid #d6dae1;
  border-top-color: #3b82f6;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.ico {
  font-size: 25px;
  line-height: 1;
  color: black;
  width: 25px;
  height: 25px;
  position: relative;
  top: -1px;
}
.to-top {
  position: fixed;
  z-index: 100;
  bottom: 25px;
  right: 20px;
  width: 48px;
  height: 48px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.to-top {
  opacity: 0;
  pointer-events: none;
  transition: all 0.2s ease;
  transform: translateY(20px);
}
.to-top.show {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0);
}
.up-background {
  background-color: rgb(0, 0, 0);
  background-image: radial-gradient(
    125% 125% at 50% 100%,
    rgb(0, 0, 0) 20%,
    oklch(0.74 0.08 245 / 0.8) 100%
  );
  will-change: opacity;
  transform: translateZ(0px);
  transition: opacity 0.1s linear;
  opacity: 0.3;
  min-width: 100vw;
  min-height: 100vh;
  position: fixed;
  z-index: -1;
}

.down-background {
  background-color: rgb(0, 0, 0);
  background-image: radial-gradient(
    ellipse 90% 40% at 50% 100%,
    lab(69.7546% -8.65325 -26.6605/0.25),
    transparent 70%
  );
  will-change: opacity;
  transform: translateZ(0px);
  transition: opacity 0.1s linear;
  opacity: 0.3;
  min-width: 100vw;
  min-height: 100vh;
  position: fixed;
  z-index: -1;
}

.layout-content {
  position: relative;
  z-index: 1;
  min-height: 100vh;
}

/* 弹窗样式 */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s ease;
  transform: translateY(-20px);
}
.modal-overlay.show {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0);
}
.modal-content {
  position: relative;
  background-color: white;
  border-radius: 12px;
  padding: 20px;
  max-width: 90vw;
  max-height: 90vh;
  animation: slideIn 0.5s ease;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.modal-close {
  font-size: 20px;
  color: black;
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.2s ease;
  z-index: 9999999;
}

.modal-close:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.modal-image {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  max-height: 80vh;
  overflow: hidden;
  min-height: 200px;
}

.modal-image img {
  width: 340px;
  object-fit: contain;
  border-radius: 8px;
  /* animation: scaleIn 0.6s ease; */
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideIn {
  from {
    transform: translateY(-50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes scaleIn {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
