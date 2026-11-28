<template>
  <div class="header-container">
    <h2 class="side-text" :class="{ hidden: scrolled }">WELCOME TO TIOUO</h2>
    <div class="content">
      <!-- <div
        ref="avatarContainer"
        :class="{ typing: isTypingClass }"
        class="avatar-container pixel-grid"></div> -->
      <img class="avatar animated-avatar" src="@/assets/static/avatar.png" alt="avatar" />

      <div class="content-text">
        <p class="p-input animated-element" style="margin-bottom: 16px; animation-delay: 0.1s">
          <span style="color: #00d9ff">user@tiouo</span>
          <span style="color: #69707b">:</span>
          <span style="color: #a78bfa">~</span>
          <span style="color: #69707b">$</span>
          <span style="color: #f2f2f2"> whoami</span>
        </p>
        <h1 class="animated-element" style="animation-delay: 0.2s">
          <span style="color: #8b949e">&gt;</span>
          <span style="color: white">Tiouo</span>
          <span class="animated" style="color: #00d9ff">_</span>
        </h1>
        <p
          class="p-font animated-element"
          style="margin-bottom: 24px; animation-delay: 0.3s"
          data-delay="0.6">
          <span style="color: #737a83">[ </span>
          <span style="color: white">Full-stack Engineer</span>
          <span style="color: #737a83"> | </span>
          <span style="color: white">Designer</span>
          <span style="color: #737a83"> ]</span>
        </p>
        <p class="note animated-element" style="animation-delay: 0.4s">
          "Forge ahead bravely against all uncertainties."
        </p>
        <p
          class="p-eye animated-element"
          style="color: #585f68; font-size: 14px; animation-delay: 0.5s"
          data-delay="1.0">
          <span style="margin-right: 8px">//</span>
          <span>Studying and wanting to make more friends 👀</span>
        </p>
        <div class="apps" style="animation-delay: 0.6s">
          <div
            @click="handleAppClick(app)"
            class="app animated-element-1 cursor-pointer"
            v-for="(app, index) in apps"
            :key="app.name"
            :style="{ animationDelay: `${0.55 + index * 0.1}s` }">
            <div class="bg" :style="{ backgroundColor: app.color }"></div>
            <div class="icon" :style="{ color: app.color, fontSize: app.size + 'px' }">
              <span class="iconfont" :class="app.icon" aria-hidden="true"></span>
            </div>
          </div>
        </div>
        <div class="btns animated-element" style="animation-delay: 0.85s">
          <button class="btn" @click="scrollToAbout">
            <span>About</span>
            <div class="btn-icon">
              <span class="iconfont icon-arrow-right" aria-hidden="true"></span>
            </div>
          </button>
          <button
            v-if="false"
            @click="windowObj.open('https://status.tiouo.cc/status/default', '_blank')"
            class="btn">
            <span>Sites</span>
            <div class="btn-icon">
              <span class="iconfont icon-arrow-right" aria-hidden="true"></span>
            </div>
          </button>
          <button class="g-btn" @click="openModal('/img/t/qq.png')">
            <span style="position: relative; top: 1px">Get in Touch</span>
            <div class="g-btn-icon">
              <span class="iconfont icon-comment" aria-hidden="true"></span>
            </div>
          </button>
        </div>
      </div>
    </div>
    <div @click="scrollToAbout" class="down" :class="{ hidden: scrolled }" data-delay="1.6">
      <span class="iconfont icon-chevron-down" aria-hidden="true"></span>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, inject, onMounted, onUnmounted } from 'vue';
import { avatarPixels } from '@/assets/avatar';

const openModal = inject<(imageUrl: string) => void>('openModal', () => {});

const scrolled = ref(false);
const handleScroll = () => {
  scrolled.value = window.scrollY > 0;
};

const scrollToAbout = () => {
  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const windowObj = window;

const handleAppClick = (app: { url: string; code?: boolean }) => {
  if (app.code) {
    openModal('/img/t/qq.png');
    return;
  }

  windowObj.open(app.url, '_blank', 'noopener,noreferrer');
};

const avatarContainer = ref<HTMLDivElement | null>(null);
const isTyping = ref(true);
const isTypingClass = ref(true);

onMounted(() => {
  const container = avatarContainer.value;
  if (!container) return;

  let pixelIndex = 0;

  const drawBatch = () => {
    const WIDTH = 79; // 你的相思花宽度
    const HEIGHT = 36; // 你的相思花高度
    const totalPixels = WIDTH * HEIGHT;
    const pixelsPerBatch = 60; // 每一帧绘制的像素数，可以自行调节速度

    const draw = () => {
      if (!isTyping.value) return;

      for (let i = 0; i < pixelsPerBatch; i++) {
        if (pixelIndex >= totalPixels) {
          isTyping.value = false;
          setTimeout(() => {
            isTypingClass.value = false;
          }, 0);
          return;
        }

        // 1. 计算当前像素在 79x36 网格中的坐标
        const py = Math.floor(pixelIndex / WIDTH); // 行索引 (0 ~ 35)
        const px = pixelIndex % WIDTH; // 列索引 (0 ~ 78)

        // 2. 换行逻辑：每当新的一行开始时（px 为 0），且不是第一行
        if (px === 0 && pixelIndex > 0) {
          const br = document.createElement('br');
          // 保持紧凑，防止行间距过大
          br.style.display = 'block';
          br.style.content = '""';
          br.style.marginTop = '-5px'; // 根据你的字体大小微调，消除空隙
          container.appendChild(br);
        }

        // 3. 获取颜色并渲染
        // 确保 avatarPixels[py][px] 存在
        if (avatarPixels[py] && avatarPixels[py][px]) {
          const [r, g, b] = avatarPixels[py][px];
          const pixel = document.createElement('span');
          pixel.className = 'pixel';
          pixel.textContent = '█';
          pixel.style.color = `rgb(${r}, ${g}, ${b})`;

          container.appendChild(pixel);
        }

        pixelIndex++;
      }

      // 使用 rAF 递归调用，确保平滑动画
      if (pixelIndex < totalPixels) {
        requestAnimationFrame(drawBatch);
      }
    };

    draw();
  };

  setTimeout(() => {
    drawBatch();
  }, 300);
});

const apps = [
  {
    name: 'email',
    size: 20,
    url: 'mailto:i@tiouo.cc',
    color: '#f47060',
    icon: 'icon-email-app',
  },
  {
    name: 'github',
    size: 24,
    url: 'https://github.com/tiouoo',
    color: '#ffffff',
    icon: 'icon-github-circle',
  },
  {
    name: 'bilibili',
    size: 24,
    url: 'https://space.bilibili.com/546750981',
    color: '#00aeec',
    icon: 'icon-bilibili-header',
  },
  {
    name: 'qq',
    size: 22,
    code: true,
    url: '/img/t/qq.png',
    color: '#db9807',
    icon: 'icon-qq',
  },
];

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
<style>
.pixel {
  display: inline-block;
  line-height: 13px;
  font-weight: 500;
  font-size: 10px;
  font-family: 'fff', monospace;
  margin: 0;
  vertical-align: top;
  padding: 0;
}
@media (max-width: 1250px) {
  .pixel {
    line-height: 8px;
    font-size: 6px;
  }
}
</style>
<style scoped>
.typing {
  filter: grayscale(100%) brightness(0.5);
}
.down {
  font-size: 34px;
  line-height: 1;
  color: #5f656c;
  cursor: pointer;
  position: fixed;
  bottom: 24px;
  animation: 1s linear infinite bounce;
  transition: opacity 0.3s ease !important;
}
@keyframes bounce {
  0%,
  100% {
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    transform: translateY(-25%);
  }
  50% {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: translateY(0);
  }
}
.btn-icon {
  margin-left: 10px;
  width: 18px;
  height: 18px;
  font-size: 18px;
  color: white;
  position: relative;
  transition: all 0.3s ease !important;
  top: -1px;
}
.p-font {
  font-size: 1rem;
}
.avatar {
  width: 410px;
  height: 410px;
  border-radius: 50%;
  margin-right: 50px;
}
.animated-avatar {
  animation: avatar-scale 0.8s ease-out forwards;
  transform: scale(0);
  opacity: 0;
}
@keyframes avatar-scale {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
.btn {
  padding: 10px 20px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  border: none;
  font-weight: 600;
  color: white;
  font-family: 'fff', sans-serif;
  margin-right: 15px;
  font-size: 16px;
  background-color: rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: all 0.2s ease !important;
}
.btn:hover {
  background-color: rgba(255, 255, 255, 0.2);
}
.btn:hover .btn-icon {
  transform: translateX(5px);
}
.g-btn-icon {
  margin-left: 10px;
  width: 18px;
  height: 18px;
  font-size: 18px;
  color: black;
  position: relative;
  transition: all 0.3s ease !important;
  top: -1px;
}
.g-btn {
  padding: 10px 20px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  border: none;
  font-weight: 600;
  color: black;
  font-family: 'fff', sans-serif;
  margin-right: 15px;
  font-size: 16px;
  background-color: rgba(255, 255, 255);
  cursor: pointer;
  transition: all 0.2s ease !important;
}
.g-btn:hover .g-btn-icon {
  transform: scale(1.25);
}
.btns {
  display: flex;
}
.bg {
  width: 44px;
  height: 44px;
  position: absolute;
  opacity: 0.2;
  border-radius: 999px;
  transition: opacity 0.2s ease !important;
}
.apps {
  display: flex;
  gap: 16px;
  margin-top: 24px;
  margin-bottom: 24px;
}
.app {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: transform 0.2s ease !important;
}
.app:hover {
  transform: scale(1.1);
}
.app .icon {
  display: flex;
}
.app:hover .bg {
  opacity: 0.3;
}
.header-container {
  width: 100vw;
  height: 100vh;
  color: #343434;
  display: flex;
  align-items: center;
  justify-content: center;
}
.note {
  border-left: 3px solid #a78bfa;
  height: 40px;
  padding: 8px;
  padding-inline: 16px;
  margin-bottom: 16px;
  font-size: 18px;
  color: white;
}
h1 {
  font-size: 60px;
  margin-bottom: 24px;
}
.animated {
  animation: typing-cursor 1.2s step-end infinite;
}
@keyframes typing-cursor {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
.content {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1152px;
}
.content-text {
  font-family: 'fff', sans-serif;
}
.side-text {
  writing-mode: vertical-rl;
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.25rem;
  left: 10px;
  line-height: 1.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  opacity: 1;
  transition: opacity 0.3s ease !important;
}
.hidden {
  opacity: 0 !important;
  pointer-events: none !important;
}
.avatar-container {
  width: 468px;
  height: 468px;
  margin-right: 70px;
  overflow: hidden;
  line-height: 0;
  font-size: 0;
  white-space: nowrap;
  transition: all 0.3s ease !important;
}

.animated-element {
  opacity: 0;
  transform: translateY(20px);
  animation: fade-in-up 0.255s ease-out forwards;
}
@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.animated-element-1 {
  opacity: 0;
  animation: fade-in-up-1 0.255s ease-out forwards;
}
@keyframes fade-in-up-1 {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@media (max-width: 1250px) {
  .avatar-container {
    display: none;
  }
  .avatar {
    max-width: 320px;
    max-height: 320px;
    width: 44vw;
    height: 44vw;
    margin-right: 0;
    margin-bottom: 30px;
  }
  .content {
    flex-direction: column;
  }
  .btns {
    flex-wrap: wrap;
  }
  @media (max-height: 920px) {
    .avatar {
      max-width: 280px;
      max-height: 280px;
      width: 44vw;
      height: 44vw;
      margin-right: 0;
      margin-bottom: 30px;
    }
    .content {
      flex-direction: column;
    }

    p {
      margin-bottom: 8px;
      font-size: 14px;
    }
    h1 {
      font-size: 38px;
      margin-bottom: 8px;
    }
    .p-font {
      font-size: 0.875rem;
    }
    .note {
      font-size: 14px;
      height: auto;
      margin-bottom: 12px !important;
    }
    .p-input,
    .p-eye {
      margin-bottom: 8px !important;
    }
    .p-font {
      margin-bottom: 16px !important;
    }
    .apps {
      margin-top: 12px;
      margin-bottom: 12px;
    }
    .content {
      width: calc(100vw - 66px);
    }
    .btns {
      flex-wrap: wrap;
    }
    .btn,
    .g-btn {
      margin-bottom: 15px;
    }
  }
}
@media (max-width: 648px) {
  .avatar {
    max-width: 280px;
    max-height: 280px;
    width: 44vw;
    height: 44vw;
    margin-right: 0;
    margin-bottom: 30px;
  }
  .content {
    flex-direction: column;
  }
  .side-text {
    left: 0px;
  }
  p {
    margin-bottom: 8px;
    font-size: 14px;
  }
  h1 {
    font-size: 38px;
    margin-bottom: 8px;
  }
  .p-font {
    font-size: 0.875rem;
  }
  .note {
    font-size: 14px;
    height: auto;
    margin-bottom: 12px !important;
  }
  .p-input,
  .p-eye {
    margin-bottom: 8px !important;
  }
  .p-font {
    margin-bottom: 16px !important;
  }
  .apps {
    margin-top: 12px;
    margin-bottom: 12px;
  }
  .content {
    width: calc(100vw - 66px);
  }
  .btns {
    flex-wrap: wrap;
  }
  .btn,
  .g-btn {
    margin-bottom: 15px;
  }
}

.cursor-pointer {
  cursor: pointer;
}
</style>
