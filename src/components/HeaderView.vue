<template>
  <div class="header-container">
    <h2 class="side-text" :class="{ hidden: scrolled }">WELCOME TO TIOUO</h2>
    <div class="content">
      <img class="avatar" src="@/assets/static/avatar.jpg" alt="avatar" />
      <div class="content-text">
        <p style="margin-bottom: 16px">
          <span style="color: #00d9ff">user@tiouo</span>
          <span style="color: #69707b">:</span>
          <span style="color: #a78bfa">~</span>
          <span style="color: #69707b">$</span>
          <span style="color: #f2f2f2"> whoami</span>
        </p>
        <h1>
          <span style="color: #8b949e">&gt;</span>
          <span style="color: white">Tiouo</span>
          <span class="animated" style="color: #00d9ff">_</span>
        </h1>
        <p style="font-size: 1rem; margin-bottom: 24px">
          <span style="color: #737a83">[ </span>
          <span style="color: white">Frontend & Backend Developer</span>
          <span style="color: #737a83"> | </span>
          <span style="color: white">Designer</span>
          <span style="color: #737a83"> ]</span>
        </p>
        <p class="note">"Forge ahead bravely against all uncertainties."</p>
        <p style="color: #585f68; font-size: 14px">
          <span style="margin-right: 8px">//</span>
          <span>Studying and wanting to make more friends 👀</span>
        </p>
        <div class="apps">
          <a href="" target="_blank" class="app">
            <div class="bg" style="background-color: #f47060"></div>
            <div class="icon">
              <svg fill="#f47060" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                <path
                  d="M320 97.9L128.4 239.8L286.5 357C291.8 360.9 297.7 363.9 304 365.7L304 528C304 533.5 304.5 538.8 305.3 544L128 544C92.7 544 64 515.3 64 480L64 240.1C64 219.8 73.6 200.7 89.9 188.7L286.5 43C296.2 35.8 307.9 32 320 32C332.1 32 343.8 35.9 353.5 43L550.1 188.7C557.3 194 563.2 200.7 567.5 208.3C565 208.1 562.5 208 560 208L468.6 208L320 97.9zM352 304C352 277.5 373.5 256 400 256L560 256C586.5 256 608 277.5 608 304L608 528C608 554.5 586.5 576 560 576L400 576C373.5 576 352 554.5 352 528L352 304zM432 320C418.7 320 408 330.7 408 344C408 357.3 418.7 368 432 368L528 368C541.3 368 552 357.3 552 344C552 330.7 541.3 320 528 320L432 320zM432 416C418.7 416 408 426.7 408 440C408 453.3 418.7 464 432 464L488 464C501.3 464 512 453.3 512 440C512 426.7 501.3 416 488 416L432 416z" />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';

const scrolled = ref(false);
const handleScroll = () => {
  scrolled.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
<style scoped>
.icon {
  width: 23px;
  height: 23px;
}
.bg {
  width: 44px;
  height: 44px;
  position: absolute;
  opacity: 0.2;
  border-radius: 999px;
}
.app {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
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
.side-text.hidden {
  opacity: 0;
  pointer-events: none;
}
.avatar {
  width: 410px;
  height: 410px;
  border-radius: 50%;
  margin-right: 50px;
}
</style>
