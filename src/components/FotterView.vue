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
            <div class="icon-wrapper" v-html="link.icon"></div>
            <h3 class="social-label">{{ link.name }}</h3>
          </div>
        </a>
      </div>

      <button
        @click="windowObj.open('https://f.tiouo.xyz/t/qq.jpg', '_blank')"
        class="touch-button">
        Get in Touch
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
          <g fill="none">
            <path
              d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
            <path
              fill="currentColor"
              d="m2.068 5.482l8.875 8.876a1.5 1.5 0 0 0 2.008.103l.114-.103l8.869-8.87q.043.165.058.337L22 6v12a2 2 0 0 1-1.85 1.995L20 20H4a2 2 0 0 1-1.995-1.85L2 18V6q0-.18.03-.35zM20 4q.182 0 .355.031l.17.039l-8.52 8.52l-8.523-8.522q.166-.045.34-.06L4 4z"></path>
          </g>
        </svg>
      </button>
    </div>

    <div class="footer-bottom">
      <h1 class="brand-text">
        <span class="brand-name">Tiouo</span>
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
interface SocialLink {
  name: string;
  url: string;
  icon: string;
  isExternal: boolean;
}

const windowObj = window;

const socialLinks: SocialLink[] = [
  {
    name: 'Email',
    url: 'mailto:tiouo@qq.com',
    isExternal: false,
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64L12 9.548l6.545-4.91l1.528-1.145C21.69 2.28 24 3.434 24 5.457"></path></svg>',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/tiouoo',
    isExternal: true,
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12c0 5.303 3.438 9.8 8.205 11.385c.6.113.82-.258.82-.577c0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729c1.205.084 1.838 1.236 1.838 1.236c1.07 1.835 2.809 1.305 3.495.998c.108-.776.417-1.305.76-1.605c-2.665-.3-5.466-1.332-5.466-5.93c0-1.31.465-2.38 1.235-3.22c-.135-.303-.54-1.523.105-3.176c0 0 1.005-.322 3.3 1.23c.96-.267 1.98-.399 3-.405c1.02.006 2.04.138 3 .405c2.28-1.552 3.285-1.23 3.285-1.23c.645 1.653.24 2.873.12 3.176c.765.84 1.23 1.91 1.23 3.22c0 4.61-2.805 5.625-5.475 5.92c.42.36.81 1.096.81 2.22c0 1.606-.015 2.896-.015 3.286c0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>',
  },
  {
    name: 'Bilibili',
    url: 'https://space.bilibili.com/546750981',
    isExternal: true,
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M17.813 4.653h.854q2.266.08 3.773 1.574Q23.946 7.72 24 9.987v7.36q-.054 2.266-1.56 3.773c-1.506 1.507-2.262 1.524-3.773 1.56H5.333q-2.266-.054-3.773-1.56C.053 19.614.036 18.858 0 17.347v-7.36q.054-2.267 1.56-3.76t3.773-1.574h.774l-1.174-1.12a1.23 1.23 0 0 1-.373-.906q0-.534.373-.907l.027-.027q.4-.373.92-.373t.92.373L9.653 4.44q.107.106.187.213h4.267a.8.8 0 0 1 .16-.213l2.853-2.747q.4-.373.92-.373c.347 0 .662.151.929.4s.391.551.391.907q0 .532-.373.906zM5.333 7.24q-1.12.027-1.88.773q-.76.748-.786 1.894v7.52q.026 1.146.786 1.893t1.88.773h13.334q1.12-.026 1.88-.773t.786-1.893v-7.52q-.026-1.147-.786-1.894t-1.88-.773zM8 11.107q.56 0 .933.373q.375.374.4.96v1.173q-.025.586-.4.96q-.373.375-.933.374c-.56-.001-.684-.125-.933-.374q-.375-.373-.4-.96V12.44q0-.56.386-.947q.387-.386.947-.386m8 0q.56 0 .933.373q.375.374.4.96v1.173q-.025.586-.4.96q-.373.375-.933.374c-.56-.001-.684-.125-.933-.374q-.375-.373-.4-.96V12.44q.025-.586.4-.96q.373-.373.933-.373"></path></svg>',
  },
];
</script>

<style scoped>
/* 这里的变量请根据你项目的全局变量进行调整，或直接使用颜色值 */
:root {
  --text-primary: #ffffff;
  --text-secondary: rgba(255, 255, 255, 0.6);
  --color-black: #000000;
}

.footer-container {
  position: relative;
  z-index: 10;
  padding: 4rem 0;
  margin-top: 5rem;
  background:
    radial-gradient(120% 80% at 30% 100%, rgba(255, 20, 147, 0.15), transparent 50%),
    radial-gradient(100% 60% at 70% 90%, rgba(0, 255, 255, 0.12), transparent 60%),
    radial-gradient(90% 70% at 50% 80%, rgba(138, 43, 226, 0.18), transparent 65%),
    radial-gradient(110% 50% at 20% 110%, rgba(255, 215, 0, 0.08), transparent 40%),
    rgba(0, 0, 0, 0.7);
  font-family: 'Google Sans Code', sans-serif;
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

.icon-wrapper :deep(svg) {
  width: 1em;
  height: 1em;
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
  font-family: 'Google Sans Code', sans-serif;
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
