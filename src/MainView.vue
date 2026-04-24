<template>
  <div ref="upBackground" class="up-background"></div>
  <div ref="downBackground" class="down-background"></div>
  <div class="content">
    <TitleBar :scrollRatio="scrollRatio" />
    <HeaderView />
    <AboutView />
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import TitleBar from './components/TitleBar.vue';
import HeaderView from './components/HeaderView.vue';
import AboutView from './components/AboutView.vue';

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

.content {
  position: relative;
  z-index: 1;
  min-height: 100vh;
}

.scroll-content {
  padding-top: 100px; /* 根据TitleBar高度调整 */
}

.exposure-control {
  position: fixed;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  background: rgba(0, 0, 0, 0.8);
  padding: 10px 20px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
  backdrop-filter: blur(10px);
}

.exposure-control input[type='range'] {
  width: 200px;
  cursor: pointer;
}

.exposure-control span {
  width: 50px;
  text-align: center;
}
</style>
