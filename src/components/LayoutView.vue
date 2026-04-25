<template>
  <div ref="upBackground" class="up-background"></div>
  <div ref="downBackground" class="down-background"></div>
  <div class="layout-content">
    <TitleBar :scrollRatio="scrollRatio" />
    <slot></slot>
    <FotterView />
  </div>

  <div v-if="showModal" class="modal-overlay" @click="closeModal">
    <div class="modal-content" @click.stop>
      <button class="modal-close" @click="closeModal">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
          <path d="M408 288H176c-22.1 0-40 17.9-40 40v32c0 22.1 17.9 40 40 40H408c22.1 0 40-17.9 40-40v-32c0-22.1-17.9-40-40-40z" fill="#333"/>
        </svg>
      </button>
      <div class="modal-image">
        <img :src="modalImage" alt="Contact Image" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, provide } from 'vue';
import TitleBar from './TitleBar.vue';
import FotterView from './FotterView.vue';

defineProps<{
  scrollRatio?: number;
}>();

const upBackground = ref<HTMLElement | null>(null);
const downBackground = ref<HTMLElement | null>(null);
const scrollRatio = ref(0);
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
  scrollRatio.value = Math.min(1, Math.max(0, scrollY / (window.innerHeight * 0.55)));
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
  animation: fadeIn 0.3s ease;
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
}

.modal-image img {
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 8px;
  animation: scaleIn 0.6s ease;
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
