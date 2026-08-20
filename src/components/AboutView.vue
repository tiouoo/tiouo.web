<template>
  <div class="about-container">
    <div class="root">
      <h2 id="about" ref="titleRef" class="animate-up">ABOUT ME</h2>
      <p class="title-text animate-up" ref="subtitleRef">
        <del>Junior High Graduate. </del>
        <strong> Grade 10 Dreamer & Life Enthusiast 🍃</strong>
      </p>
      <div class="content-body animate-up" ref="contentRef">
        <span>Currently navigating the exciting (and slightly chaotic) world of </span>
        <span class="highlight">high school</span>.
        <br />
        I spend my days balancing
        <a href="javascript:void(0)" class="link-tag">complex equations</a>
        and the simple joy of a
        <a href="javascript:void(0)" class="link-tag">golden sunset</a>.
        <span> Just a curious soul trying to capture every vibrant moment of life.</span>
      </div>
      <div class="photo-gallery">
        <div
          v-for="(photo, index) in photos"
          :key="index"
          :href="photo.url"
          target="_blank"
          rel="noopener noreferrer"
          class="gallery-item animate-up"
          :ref="(el) => (photoRefs[index] = el as HTMLElement)">
          <img :src="photo.url" :alt="photo.title" class="gallery-img" />

          <div class="overlay">
            <p class="overlay-text">
              <span v-if="photo.location" class="location-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 2a9 9 0 0 1 9 9c0 3.074-1.676 5.59-3.442 7.395a20.4 20.4 0 0 1-2.876 2.416l-1.681 1.02a1.87 1.87 0 0 1-1.854 0l-1.681-1.02a20.6 20.6 0 0 1-3.093-2.566C4.676 16.589 3 14.074 3 11a9 9 0 0 1 9-9m0 2a7 7 0 0 0-7 7c0 2.322 1.272 4.36 2.871 5.996.65.665 1.4 1.32 2.222 1.91l.458.326.427.288.39.25.343.209.289.169.455-.269.367-.23.627-.417.458-.326a18 18 0 0 0 2.222-1.91C17.728 15.361 19 13.322 19 11a7 7 0 0 0-7-7m0 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4a2 2 0 0 0 0-4"
                    fill="currentColor" />
                </svg>
              </span>
              {{ photo.location ? `${photo.title}, ${photo.location}` : photo.title }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const photos = [
  {
    title: 'Yichou Jinshi Archway',
    location: 'Canton',
    url: '/img/picgo/20260425032037513.jpg',
  },
  {
    title: 'Red Bay',
    location: 'Shanwei',
    url: '/img/picgo/20260425030629520.jpg',
  },
  {
    title: 'Kang Park',
    location: 'Canton',
    url: '/img/picgo/20260425031501975.jpg',
  },
  {
    title: 'Tianhe',
    location: 'Canton',
    url: '/img/picgo/20260425033252306.jpg',
  },
  {
    title: 'Zengcheng',
    location: 'Canton',
    url: '/img/picgo/20260425032334489.png',
  },
  {
    title: 'Tianhe',
    location: 'Canton',
    url: '/img/picgo/20260425032559487.jpg',
  },
  {
    title: 'Pig',
    url: '/img/picgo/20260425033049464.jpg',
  },
  {
    title: 'Lottus',
    location: 'Yunnan',
    url: '/img/picgo/20260425030629521.jpg',
  },
  {
    title: 'Chicken',
    url: '/img/picgo/20260425032758314.jpg',
  },
];

const titleRef = ref<HTMLElement | null>(null);
const subtitleRef = ref<HTMLElement | null>(null);
const contentRef = ref<HTMLElement | null>(null);
const photoRefs = ref<(HTMLElement | null)[]>([]);
const observer = ref<IntersectionObserver | null>(null);

onMounted(() => {
  observer.value = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.value?.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  [titleRef.value, subtitleRef.value, contentRef.value, ...photoRefs.value]
    .filter(Boolean)
    .forEach((el) => {
      observer.value?.observe(el!);
    });
});

onUnmounted(() => {
  observer.value?.disconnect();
});
</script>

<style scoped>
.link-tag {
  margin-top: 5px;
}
#about {
  margin-bottom: 32px;
  font-size: 36px;
}
.about-container {
  font-family: 'Google Sans Flex', sans-serif;
  max-width: 1200px;
  margin: 0 auto;
}
.intro-container > * + * {
  margin-top: 1rem;
}
.root {
  padding: 0 15px;
}
.intro-container {
  font-family: sans-serif;
  color: #374151;
}

.title-text {
  font-size: 1.125rem;
  line-height: 1.625;
  margin-bottom: 0.75rem;
}

.content-body {
  line-height: 1.6;
}

.link-tag {
  color: inherit;
  text-decoration: underline;
  text-underline-offset: 4px;
  font-weight: 500;
  transition: opacity 0.2s;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: #00d9ff;
  background-color: hsla(189, 100%, 50%, 0.1);
  padding: 0 8px;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.link-tag:hover {
  background-color: hsla(189, 100%, 50%, 0.25);
}

.icon-wrapper {
  display: inline-flex;
  vertical-align: middle;
}

.icon-wrapper :deep(svg) {
  width: 1em;
  height: 1em;
  fill: currentColor;
}
.photo-gallery {
  margin-top: 2rem;
  column-gap: 1rem;
  columns: 2; /* 默认两列 */
}

@media (min-width: 768px) {
  .photo-gallery {
    columns: 3;
  }
}

@media (min-width: 1024px) {
  .photo-gallery {
    columns: 4;
  }
}

/* 卡片容器 */
.gallery-item {
  position: relative;
  display: block;
  margin-bottom: 1rem; /* 对应 space-y-4 */
  overflow: hidden;
  border-radius: 1rem;
  break-inside: avoid;
  cursor: zoom-in;
  text-decoration: none;
}

/* 图片样式 */
.gallery-img {
  width: 100%;
  height: 60%; /* 原代码中有 h-[60%] */
  object-fit: cover;
  display: block;
  transition:
    transform 0.6s ease,
    opacity 0.5s ease-in-out;
  opacity: 1;
}

.gallery-item:hover .gallery-img {
  transform: scale(1.05);
}

/* 遮罩层 */
.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 100%);
  display: flex;
  align-items: flex-end;
  padding: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery-item:hover .overlay {
  opacity: 1;
}

/* 文字样式 */
.overlay-text {
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.875rem;
  font-weight: 500;
  margin: 0;
  display: flex;
  align-items: center;
}

/* 图标微调 */
.location-icon {
  margin-right: 0.25rem;
  display: inline-flex;
}

.location-icon svg {
  width: 1em;
  height: 1em;
  color: white;
}

/* 入场动画 */
.animate-up {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s ease-out;
}

.animate-in {
  opacity: 1;
  transform: translateY(0);
}

/* 为图片添加透明度动画 */
.gallery-item.animate-up {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s ease-out;
}

.gallery-item.animate-in {
  opacity: 1;
  transform: translateY(0);
}
</style>
