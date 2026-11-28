<template>
  <footer class="footer-container">
    <div class="footer-content">
      <div class="social-links">
        <a
          v-for="(link, index) in socialLinks"
          :key="link.name"
          :href="link.url"
          :target="link.isExternal ? '_blank' : '_self'"
          :rel="link.isExternal ? 'noopener noreferrer' : ''"
          class="social-item"
          :style="{ animationDelay: `${index * 0.1}s` }">
          <div class="social-item-inner">
            <div class="icon-wrapper">
              <span class="iconfont" :class="link.icon" aria-hidden="true"></span>
            </div>
            <h3 class="social-label">{{ link.name }}</h3>
          </div>
        </a>
      </div>

      <button @click="openModal('/img/t/qq.png')" class="touch-button">
        {{ copy.getInTouch }}
        <span class="iconfont icon-envelope" aria-hidden="true"></span>
      </button>
    </div>

    <div class="footer-bottom">
      <h1 class="brand-text">
        <span class="brand-name" id="foot-element">Tiouo</span>
        <p class="copyright">
          (c) 2026-present
          <a
            style="text-decoration: underline !important"
            target="_blank"
            href="https://github.com/tiouoo"
            >tiouo</a
          >
          Crafted with passion and code.
        </p>
      </h1>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { copy } from '@/locale';
import { inject } from 'vue';

interface SocialLink {
  name: string;
  url: string;
  icon: string;
  isExternal: boolean;
}
const openModal = inject<(imageUrl: string) => void>('openModal', () => {});

const socialLinks: SocialLink[] = [
  {
    name: copy.email,
    url: 'mailto:tiouo@qq.com',
    isExternal: false,
    icon: 'icon-gmail',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/tiouoo',
    isExternal: true,
    icon: 'icon-github',
  },
  {
    name: 'Bilibili',
    url: 'https://space.bilibili.com/546750981',
    isExternal: true,
    icon: 'icon-bilibili-footer',
  },
];
</script>

<style scoped>
:root {
  --text-primary: #ffffff;
  --text-secondary: rgba(255, 255, 255, 0.6);
  --color-black: #000000;
}

.footer-container {
  position: relative;
  z-index: 10;
  padding: 4rem 0;
  background:
    radial-gradient(120% 80% at 30% 100%, rgba(255, 20, 147, 0.15), transparent 50%),
    radial-gradient(100% 60% at 70% 90%, rgba(0, 255, 255, 0.12), transparent 60%),
    radial-gradient(90% 70% at 50% 80%, rgba(138, 43, 226, 0.18), transparent 65%),
    radial-gradient(110% 50% at 20% 110%, rgba(255, 215, 0, 0.08), transparent 40%),
    rgba(0, 0, 0, 0.7);
  font-family: 'fff', sans-serif;
  -webkit-mask-image: linear-gradient(to top, black 80%, transparent 100%);
  mask-image: linear-gradient(to top, black 80%, transparent 100%);
  padding-top: 9rem;
}

.footer-content {
  max-width: 1152px; /* max-w-6xl */
  margin: 0 auto;
  padding: 0 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.social-links {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 1rem;
}

.social-item {
  display: block;
  border-radius: 9999px;
  padding: 0.75rem;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.1); /* fallback for color-mix */
  animation: scaleIn 0.6s ease-out both;
  text-decoration: none;
}

.social-item:hover {
  transform: scale(1.05);
  background-color: rgba(255, 255, 255, 0.2); /* var(--text-primary) */
}

.social-item-inner {
  position: relative;
  z-index: 10;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
}

.icon-wrapper {
  font-size: 1.25rem;
  transition: transform 0.3s ease;
  color: #fff;
  filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.5));
  display: flex;
  align-items: center;
}

.social-label {
  font-size: 0.875rem;
  color: #fff;
  margin: 0;
  display: none;
}

@media (min-width: 1024px) {
  .social-label {
    display: block;
  }
}

.touch-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  line-height: 2.5rem;
  padding: 0 1rem;
  border-radius: 9999px;
  font-weight: 500;
  font-size: 0.875rem;
  transition: all 0.3s ease;
  border: none;
  background: #fff; /* var(--text-primary) */
  color: #000; /* var(--color-black) */
  cursor: pointer;
  font-family: 'fff', sans-serif;
}

.touch-button:hover {
  transform: scale(1.05);
}

.footer-bottom {
  display: flex;
  margin-top: 3rem;
  padding: 0 1.5rem;
  flex-direction: column;
  align-items: center;
}

.brand-text {
  font-size: 24vw;
  width: auto;
  font-weight: 900;
  letter-spacing: -0.05em;
  color: #fff;
  margin: 0;
  line-height: 1;
}

.copyright {
  margin-top: 4rem;
  font-size: 1rem; /* font-size-md */
  letter-spacing: normal;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6); /* var(--text-secondary) */
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
