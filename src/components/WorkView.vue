<!-- eslint-disable vue/no-deprecated-filter -->
<template>
  <div class="about-container">
    <div class="root">
      <h2 id="work" ref="titleRef" class="animate-up">MY WORK</h2>
      <p class="title-text animate-up" ref="subtitleRef">
        <del>Senior Sleep Engineer 🛌.</del> A Full-stack Developer
      </p>
      <div class="content-body animate-up" ref="contentRef">
        I enjoy making
        <a
          href="https://github.com/tiouoo"
          target="_blank"
          rel="noopener noreferrer"
          class="link-tag"
          title="GitHub">
          useful and fun projects
          <span class="icon-wrapper">
            <span class="iconfont icon-github" aria-hidden="true"></span>
          </span>
        </a>
        <span> or just </span>
        <a
          href="https://status.tiouo.cc/status/default"
          target="_blank"
          rel="noopener noreferrer"
          class="link-tag"
          title="status">
          some bugs
          <span class="icon-wrapper">
            <span class="iconfont icon-bug" aria-hidden="true"></span>
          </span>
        </a>
      </div>

      <div class="project-container">
        <a
          v-for="(project, index) in projects"
          :key="index"
          :href="project.link"
          target="_blank"
          class="project-card animate-up"
          :ref="(el) => (projectRefs[index] = el as HTMLElement | null)">
          <div class="project-content">
            <div class="left">
              <div class="top">
                <h3 class="project-title">
                  <div class="project-icon">
                    <span class="iconfont icon-book" aria-hidden="true"></span>
                  </div>
                  <span>{{ project.repo }}</span>
                </h3>
                <p>{{ project.description }}</p>
              </div>

              <div class="tags">
                <span
                  v-for="(tag, tIndex) in project.tags"
                  :key="tIndex"
                  class="p-tag"
                  :style="{
                    color: `rgb(${tag.color})`,
                    backgroundColor: `rgb(${tag.color} / 20%)`,
                  }">
                  {{ tag.name }}
                </span>
              </div>
            </div>

            <!-- <img
              class="project-img right"
              v-if="project.img"
              :src="project.img"
              :alt="project.repo" /> -->
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const avaloniaTags = [
  { name: 'Avalonia', color: '139 69 167' },
  { name: 'C#', color: '23 134 0' },
];
const vueTags = [
  { name: 'Vue', color: '65 184 131' },
  { name: 'TypeScript', color: '0 191 255' },
];
const projects = [
  {
    repo: 'tiouoo / tiouo.web',
    link: 'https://github.com/tiouoo/tiouo.web',
    description: 'This website you are browsing.',
    tags: [...vueTags, { name: 'Web', color: '206 103 141' }],
  },
  {
    repo: 'tiouoo / OvoUi.Avalonia',
    link: 'https://github.com/tiouoo/OvoUi.Avalonia',
    description:
      'Modern Fluent Design components for Avalonia, built for a seamless user experience.',
    tags: [...avaloniaTags, { name: 'Library', color: '246 176 35' }],
  },
];

const titleRef = ref<HTMLElement | null>(null);
const subtitleRef = ref<HTMLElement | null>(null);
const contentRef = ref<HTMLElement | null>(null);
const projectRefs = ref<(HTMLElement | null)[]>([]);
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

  [titleRef.value, subtitleRef.value, contentRef.value, ...projectRefs.value]
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
.left {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.project-content {
  display: flex;
  justify-content: space-between;
  height: 100%;
}
.tags {
  margin-top: 8px;
  display: flex;
  gap: 8px;
}
.p-tag {
  display: inline-block;
  border-radius: 999px;
  padding: 4px 8px;
  font-size: 0.75rem;
}
.project-title {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 5px;
  font-weight: 500;
}
.project-icon {
  font-size: 21px;
  line-height: 1;
  width: 21px;
  height: 21px;
}
.project-card {
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  border-radius: 12px;
  padding: 12px 16px;
  transition: all 0.3s ease;
}
/* 容器布局 */
.project-container {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 25px;
  margin-top: 32px;
}

@media (min-width: 768px) {
  .project-container {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
.link-tag {
  margin-top: 5px;
}

/* 背景图层与缩放动画 */
.bg-layer {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.project-img {
  margin: 5px;
  width: 80px;
  height: 80px;
  object-fit: cover;
  transition:
    transform 0.3s ease,
    opacity 0.5s ease-in-out;
  border-radius: 100px;
  opacity: 0.7;
}
.project-card:hover .project-img {
  transform: scale(1.05);
  opacity: 1;
}
.project-card:hover {
  background-color: rgba(255, 255, 255, 0.15);
}
/* 内容区域 */
.content-layer {
  position: relative;
  z-index: 10;
  margin-top: auto;
  width: 100%;
}

/* 渐变遮罩 */
.gradient-mask {
  position: absolute;
  inset: -3rem -2px -2px -2px; /* 向上延伸遮罩确保文字清晰 */
  z-index: -1;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.4) 60%,
    transparent 100%
  );
}

.text-content {
  padding: 1.5rem;
  color: white;
}
#work {
  margin-top: 64px;
  margin-bottom: 32px;
  font-size: 36px;
}
.title {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.desc {
  font-size: 0.875rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.6);
  /* 文本两行截断 */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
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

.root {
  padding: 0 15px;
}
.intro-container > * + * {
  margin-top: 1rem;
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

/* 为项目卡片添加动画 */
.project-card.animate-up {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s ease-out;
}

.project-card.animate-in {
  opacity: 1;
  transform: translateY(0);
}
</style>
