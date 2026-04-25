<template>
  <div class="header-container">
    <h2 class="side-text" :class="{ hidden: scrolled }">WELCOME TO TIOUO</h2>
    <div class="content">
      <!-- <div
        ref="avatarContainer"
        :class="{ typing: isTypingClass }"
        class="avatar-container pixel-grid"></div> -->
      <img class="avatar animated-avatar" src="@/assets/static/avatar.jpg" alt="avatar" />

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
            <div
              class="icon"
              :style="{ fill: app.color, width: `${app.size}px`, height: `${app.size}px` }"
              v-html="app.icon"></div>
          </div>
        </div>
        <div class="btns animated-element" style="animation-delay: 0.85s">
          <button class="btn" @click="scrollToAbout">
            <span>About</span>
            <div class="btn-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                <path
                  d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z" />
              </svg>
            </div>
          </button>
          <button
            @click="windowObj.open('https://status.tiouo.xyz/status/default', '_blank')"
            class="btn">
            <span>Sites</span>
            <div class="btn-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                <path
                  d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z" />
              </svg>
            </div>
          </button>
          <button class="g-btn" @click="openModal('https://f.tiouo.xyz/t/qq.jpg')">
            <span style="position: relative; top: 1px">Get in Touch</span>
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
    <div @click="scrollToAbout" class="down" :class="{ hidden: scrolled }" data-delay="1.6">
      <svg fill="#5f656c" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
        <path
          d="M297.4 438.6C309.9 451.1 330.2 451.1 342.7 438.6L502.7 278.6C515.2 266.1 515.2 245.8 502.7 233.3C490.2 220.8 469.9 220.8 457.4 233.3L320 370.7L182.6 233.4C170.1 220.9 149.8 220.9 137.3 233.4C124.8 245.9 124.8 266.2 137.3 278.7L297.3 438.7z" />
      </svg>
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
  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
};

const windowObj = window;

const handleAppClick = (app: { url: string }) => {
  if (app.url.startsWith('mailto:')) {
    windowObj.open(app.url);
  } else {
    openModal('https://f.tiouo.xyz/t/qq.jpg');
  }
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
    url: 'mailto:i@tiouo.xyz',
    color: '#f47060',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
      <path d="M320 97.9L128.4 239.8L286.5 357C291.8 360.9 297.7 363.9 304 365.7L304 528C304 533.5 304.5 538.8 305.3 544L128 544C92.7 544 64 515.3 64 480L64 240.1C64 219.8 73.6 200.7 89.9 188.7L286.5 43C296.2 35.8 307.9 32 320 32C332.1 32 343.8 35.9 353.5 43L550.1 188.7C557.3 194 563.2 200.7 567.5 208.3C565 208.1 562.5 208 560 208L468.6 208L320 97.9zM352 304C352 277.5 373.5 256 400 256L560 256C586.5 256 608 277.5 608 304L608 528C608 554.5 586.5 576 560 576L400 576C373.5 576 352 554.5 352 528L352 304zM432 320C418.7 320 408 330.7 408 344C408 357.3 418.7 368 432 368L528 368C541.3 368 552 357.3 552 344C552 330.7 541.3 320 528 320L432 320zM432 416C418.7 416 408 426.7 408 440C408 453.3 418.7 464 432 464L488 464C501.3 464 512 453.3 512 440C512 426.7 501.3 416 488 416L432 416z" />
    </svg>`,
  },
  {
    name: 'github',
    size: 24,
    url: 'https://github.com/tiouoo',
    color: '#ffffff',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M237.9 461.4C237.9 463.4 235.6 465 232.7 465C229.4 465.3 227.1 463.7 227.1 461.4C227.1 459.4 229.4 457.8 232.3 457.8C235.3 457.5 237.9 459.1 237.9 461.4zM206.8 456.9C206.1 458.9 208.1 461.2 211.1 461.8C213.7 462.8 216.7 461.8 217.3 459.8C217.9 457.8 216 455.5 213 454.6C210.4 453.9 207.5 454.9 206.8 456.9zM251 455.2C248.1 455.9 246.1 457.8 246.4 460.1C246.7 462.1 249.3 463.4 252.3 462.7C255.2 462 257.2 460.1 256.9 458.1C256.6 456.2 253.9 454.9 251 455.2zM316.8 72C178.1 72 72 177.3 72 316C72 426.9 141.8 521.8 241.5 555.2C254.3 557.5 258.8 549.6 258.8 543.1C258.8 536.9 258.5 502.7 258.5 481.7C258.5 481.7 188.5 496.7 173.8 451.9C173.8 451.9 162.4 422.8 146 415.3C146 415.3 123.1 399.6 147.6 399.9C147.6 399.9 172.5 401.9 186.2 425.7C208.1 464.3 244.8 453.2 259.1 446.6C261.4 430.6 267.9 419.5 275.1 412.9C219.2 406.7 162.8 398.6 162.8 302.4C162.8 274.9 170.4 261.1 186.4 243.5C183.8 237 175.3 210.2 189 175.6C209.9 169.1 258 202.6 258 202.6C278 197 299.5 194.1 320.8 194.1C342.1 194.1 363.6 197 383.6 202.6C383.6 202.6 431.7 169 452.6 175.6C466.3 210.3 457.8 237 455.2 243.5C471.2 261.2 481 275 481 302.4C481 398.9 422.1 406.6 366.2 412.9C375.4 420.8 383.2 435.8 383.2 459.3C383.2 493 382.9 534.7 382.9 542.9C382.9 549.4 387.5 557.3 400.2 555C500.2 521.8 568 426.9 568 316C568 177.3 455.5 72 316.8 72zM169.2 416.9C167.9 417.9 168.2 420.2 169.9 422.1C171.5 423.7 173.8 424.4 175.1 423.1C176.4 422.1 176.1 419.8 174.4 417.9C172.8 416.3 170.5 415.6 169.2 416.9zM158.4 408.8C157.7 410.1 158.7 411.7 160.7 412.7C162.3 413.7 164.3 413.4 165 412C165.7 410.7 164.7 409.1 162.7 408.1C160.7 407.5 159.1 407.8 158.4 408.8zM190.8 444.4C189.2 445.7 189.8 448.7 192.1 450.6C194.4 452.9 197.3 453.2 198.6 451.6C199.9 450.3 199.3 447.3 197.3 445.4C195.1 443.1 192.1 442.8 190.8 444.4zM179.4 429.7C177.8 430.7 177.8 433.3 179.4 435.6C181 437.9 183.7 438.9 185 437.9C186.6 436.6 186.6 434 185 431.7C183.6 429.4 181 428.4 179.4 429.7z"/></svg>`,
  },
  {
    name: 'bilibili',
    size: 24,
    url: 'https://space.bilibili.com/546750981',
    color: '#00aeec',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M552.6 168.1C569.3 186.2 577 207.8 575.9 233.8L575.9 436.2C575.5 462.6 566.7 484.3 549.4 501.3C532.2 518.3 510.3 527.2 483.9 528L156 528C129.6 527.2 107.8 518.2 90.7 500.8C73.6 483.4 64.7 460.5 64 432.2L64 233.8C64.8 207.8 73.7 186.2 90.7 168.1C107.8 151.8 129.5 142.8 156 142L185.4 142L160 116.2C154.3 110.5 151.4 103.2 151.4 94.4C151.4 85.6 154.3 78.3 160 72.6C165.7 66.9 173 64 181.9 64C190.8 64 198 66.9 203.8 72.6L277.1 142L365.1 142L439.6 72.6C445.7 66.9 453.2 64 462 64C470.8 64 478.1 66.9 483.9 72.6C489.6 78.3 492.5 85.6 492.5 94.4C492.5 103.2 489.6 110.5 483.9 116.2L458.6 142L487.9 142C514.3 142.8 535.9 151.8 552.6 168.1zM513.8 237.8C513.4 228.2 510.1 220.4 503.1 214.3C497.9 208.2 489.1 204.9 480.4 204.5L160 204.5C150.4 204.9 142.6 208.2 136.4 214.3C130.3 220.4 127 228.2 126.6 237.8L126.6 432.2C126.6 441.4 129.9 449.2 136.4 455.7C142.9 462.2 150.8 465.5 160 465.5L480.4 465.5C489.6 465.5 497.4 462.2 503.7 455.7C510 449.2 513.4 441.4 513.8 432.2L513.8 237.8zM249.5 280.5C255.8 286.8 259.2 294.6 259.6 303.7L259.6 337C259.2 346.2 255.9 353.9 249.8 360.2C243.6 366.5 235.8 369.7 226.2 369.7C216.6 369.7 208.7 366.5 202.6 360.2C196.5 353.9 193.2 346.2 192.8 337L192.8 303.7C193.2 294.6 196.6 286.8 202.9 280.5C209.2 274.2 216.1 270.9 226.2 270.5C235.4 270.9 243.2 274.2 249.5 280.5zM441 280.5C447.3 286.8 450.7 294.6 451.1 303.7L451.1 337C450.7 346.2 447.4 353.9 441.3 360.2C435.2 366.5 427.3 369.7 417.7 369.7C408.1 369.7 400.3 366.5 394.1 360.2C387.1 353.9 384.7 346.2 384.4 337L384.4 303.7C384.7 294.6 388.1 286.8 394.4 280.5C400.7 274.2 408.5 270.9 417.7 270.5C426.9 270.9 434.7 274.2 441 280.5z"/></svg>`,
  },
  {
    name: 'qq',
    size: 22,
    code: true,
    url: 'https://f.tiouo.xyz/t/qq.jpg',
    color: '#db9807',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M530.1 484.4C518.6 485.8 485.2 431.7 485.2 431.7C485.2 463 469.1 503.9 434.2 533.5C451 538.7 489 552.7 480 567.9C472.7 580.2 354.5 575.8 320.4 571.9C286.3 575.7 168.1 580.2 160.8 567.9C151.8 552.7 189.7 538.7 206.6 533.5C171.7 504 155.5 463.1 155.5 431.7C155.5 431.7 122.2 485.8 110.6 484.4C105.2 483.8 98.2 454.8 119.9 384.7C130.2 351.7 141.9 324.2 160 278.9C156.9 162 205.2 63.9 320.3 63.9C434 63.9 483.5 160 480.6 278.9C498.7 324.1 510.5 351.8 520.7 384.7C542.5 454.8 535.4 483.8 530 484.4z"/></svg>`,
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
  font-family: 'Google Sans Code', monospace;
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
  width: 34px;
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
  fill: white;
  position: relative;
  transition: all 0.3s ease !important;
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
  font-family: 'Google Sans Code', sans-serif;
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
  fill: black;
  position: relative;
  transition: all 0.3s ease !important;
}
.g-btn {
  padding: 10px 20px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  border: none;
  font-weight: 600;
  color: black;
  font-family: 'Google Sans Code', sans-serif;
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
  font-family: 'Google Sans Code', sans-serif;
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
