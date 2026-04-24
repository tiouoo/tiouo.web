<template>
  <div ref="upBackground" class="up-background"></div>
  <div ref="downBackground" class="down-background"></div>
  <div class="content">
    <TitleBar class="title-bar" />
    <div class="scroll-content">
      <!-- 曝光控制滑块 -->
      <div class="exposure-control">
        <label for="exposure-slider">曝光控制：</label>
        <input 
          type="range" 
          id="exposure-slider" 
          v-model.number="exposureValue" 
          min="0" 
          max="1" 
          step="0.01"
          @input="updateExposure"
        />
        <span>{{ exposureValue.toFixed(2) }}</span>
      </div>
      
      <!-- 这里可以添加更多内容 -->
      <div style="height: 2000px; padding: 20px;">
        <h1>滚动测试</h1>
        <p>向下滚动查看曝光效果变化</p>
        <p>使用上方的滑块手动调整曝光比例</p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import TitleBar from './components/TitleBar.vue';

const upBackground = ref<HTMLElement | null>(null);
const downBackground = ref<HTMLElement | null>(null);
const exposureValue = ref(0.5); // 初始值为0.5，上下曝光各占一半
let isUserControlling = false;

const updateExposure = () => {
  if (!upBackground.value || !downBackground.value) return;
  
  // 上曝光透明度：exposureValue，范围从0到1
  // 下曝光透明度：1 - exposureValue，范围从1到0
  upBackground.value.style.opacity = exposureValue.value.toString();
  downBackground.value.style.opacity = (1 - exposureValue.value).toString();
  
  isUserControlling = true;
  // 3秒后恢复滚动控制
  setTimeout(() => {
    isUserControlling = false;
  }, 3000);
};

const handleScroll = () => {
  if (!upBackground.value || !downBackground.value || isUserControlling) return;
  
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;
  const docHeight = document.documentElement.scrollHeight;
  const totalScrollable = docHeight - windowHeight;
  
  // 计算滚动比例，范围从0到1
  const scrollRatio = Math.min(1, Math.max(0, scrollY / totalScrollable));
  
  // 更新曝光值和透明度
  exposureValue.value = scrollRatio;
  upBackground.value.style.opacity = scrollRatio.toString();
  downBackground.value.style.opacity = (1 - scrollRatio).toString();
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  // 初始调用一次，确保初始状态正确
  updateExposure();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
<style scoped>
.up-background {
  background-color: rgb(0, 0, 0);
  background-image: radial-gradient(
    125% 125% at 50% 100%,
    rgb(0, 0, 0) 20%,
    oklch(0.74 0.08 245 / 0.2) 100%
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
    125% 125% at 50% 0%,
    rgb(0, 0, 0) 20%,
    oklch(0.74 0.08 245 / 0.2) 100%
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

.exposure-control input[type="range"] {
  width: 200px;
  cursor: pointer;
}

.exposure-control span {
  width: 50px;
  text-align: center;
}
</style>
