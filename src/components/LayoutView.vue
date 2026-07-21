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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
        <path
          d="M342.6 73.4C330.1 60.9 309.8 60.9 297.3 73.4L137.3 233.4C124.8 245.9 124.8 266.2 137.3 278.7C149.8 291.2 170.1 291.2 182.6 278.7L288 173.3L288 544C288 561.7 302.3 576 320 576C337.7 576 352 561.7 352 544L352 173.3L457.4 278.7C469.9 291.2 490.2 291.2 502.7 278.7C515.2 266.2 515.2 245.9 502.7 233.4L342.7 73.4z" />
      </svg>
    </div>
  </div>

  <div :class="{ show: showModal }" class="modal-overlay" @click="closeModal">
    <div class="modal-content" @click.stop>
      <button class="modal-close" @click="closeModal">
        <div style="width: 20px; height: 20px">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
            <path
              d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z" />
          </svg>
        </div>
      </button>
      <div class="modal-image">
        <img :src="modalImage" style="z-index: 999" alt="Contact Image" />
        <span class="loading-spinner" aria-hidden="true"></span>
        <span class="tip" style="color: #404040">QQ + 840673183</span>
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
