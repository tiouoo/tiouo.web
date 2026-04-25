<template>
  <div class="about-container">
    <div class="root">
      <h2 id="work">MY WORK</h2>
      <p class="title-text"><del>Senior Sleep Engineer 🛌.</del> A Full-stack Developer</p>
      <div class="content-body">
        I enjoy making
        <a
          href="https://github.com/tiouoo"
          target="_blank"
          rel="noopener noreferrer"
          class="link-tag"
          title="GitHub">
          useful and fun projects
          <span class="icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12 .297c-6.63 0-12 5.373-12 12c0 5.303 3.438 9.8 8.205 11.385c.6.113.82-.258.82-.577c0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729c1.205.084 1.838 1.236 1.838 1.236c1.07 1.835 2.809 1.305 3.495.998c.108-.776.417-1.305.76-1.605c-2.665-.3-5.466-1.332-5.466-5.93c0-1.31.465-2.38 1.235-3.22c-.135-.303-.54-1.523.105-3.176c0 0 1.005-.322 3.3 1.23c.96-.267 1.98-.399 3-.405c1.02.006 2.04.138 3 .405c2.28-1.552 3.285-1.23 3.285-1.23c.645 1.653.24 2.873.12 3.176c.765.84 1.23 1.91 1.23 3.22c0 4.61-2.805 5.625-5.475 5.92c.42.36.81 1.096.81 2.22c0 1.606-.015 2.896-.015 3.286c0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </span>
        </a>
        <span> or just </span>
        <a
          href="https://status.tiouo.xyz/status/default"
          target="_blank"
          rel="noopener noreferrer"
          class="link-tag"
          title="status">
          some bugs
          <span class="icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
              <path
                d="M224 160C224 107 267 64 320 64C373 64 416 107 416 160L416 163.6C416 179.3 403.3 192 387.6 192L252.5 192C236.8 192 224.1 179.3 224.1 163.6L224.1 160zM569.6 172.8C580.2 186.9 577.3 207 563.2 217.6L465.4 290.9C470.7 299.8 474.7 309.6 477.2 320L576 320C593.7 320 608 334.3 608 352C608 369.7 593.7 384 576 384L480 384L480 416C480 418.6 479.9 421.3 479.8 423.9L563.2 486.4C577.3 497 580.2 517.1 569.6 531.2C559 545.3 538.9 548.2 524.8 537.6L461.7 490.3C438.5 534.5 395.2 566.5 344 574.2L344 344C344 330.7 333.3 320 320 320C306.7 320 296 330.7 296 344L296 574.2C244.8 566.5 201.5 534.5 178.3 490.3L115.2 537.6C101.1 548.2 81 545.3 70.4 531.2C59.8 517.1 62.7 497 76.8 486.4L160.2 423.9C160.1 421.3 160 418.7 160 416L160 384L64 384C46.3 384 32 369.7 32 352C32 334.3 46.3 320 64 320L162.8 320C165.3 309.6 169.3 299.8 174.6 290.9L76.8 217.6C62.7 207 59.8 186.9 70.4 172.8C81 158.7 101.1 155.8 115.2 166.4L224 248C236.3 242.9 249.8 240 264 240L376 240C390.2 240 403.7 242.8 416 248L524.8 166.4C538.9 155.8 559 158.7 569.6 172.8z" />
            </svg>
          </span>
        </a>
      </div>

      <img
        style="margin-bottom: 32px"
        class="git-contribution-chart"
        src="https://ghchart.rshah.org/409ba5/tiouoo"
        alt="git-contribution-chart" />

      <div class="project-container">
        <a
          v-for="(project, index) in projects"
          :key="index"
          :href="project.link"
          target="_blank"
          class="project-card">
          <div class="project-content">
            <div class="left">
              <div class="top">
                <h3 class="project-title">
                  <div class="project-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                      <path
                        d="M480 576L192 576C139 576 96 533 96 480L96 160C96 107 139 64 192 64L496 64C522.5 64 544 85.5 544 112L544 400C544 420.9 530.6 438.7 512 445.3L512 512C529.7 512 544 526.3 544 544C544 561.7 529.7 576 512 576L480 576zM192 448C174.3 448 160 462.3 160 480C160 497.7 174.3 512 192 512L448 512L448 448L192 448zM224 216C224 229.3 234.7 240 248 240L424 240C437.3 240 448 229.3 448 216C448 202.7 437.3 192 424 192L248 192C234.7 192 224 202.7 224 216zM248 288C234.7 288 224 298.7 224 312C224 325.3 234.7 336 248 336L424 336C437.3 336 448 325.3 448 312C448 298.7 437.3 288 424 288L248 288z" />
                    </svg>
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

            <img
              class="project-img right"
              v-if="project.img"
              :src="project.img"
              :alt="project.repo" />
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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
    repo: 'tiouoo / Aurelio',
    link: 'https://github.com/tiouoo/Aurelio',
    description: 'A modern and cross-platform workspace solution.',
    // img: 'https://f.tiouo.xyz/picgo/20260425105739382.png',
    tags: [...avaloniaTags, { name: 'App', color: '1 220 255' }],
  },
  {
    repo: 'tiouoo / TioUi.Avalonia',
    link: 'https://github.com/tiouoo/TioUi.Avalonia',
    description:
      'Modern Fluent Design components for Avalonia, built for a seamless user experience.',
    // img: 'https://f.tiouo.xyz/picgo/20260425110416441.png',
    tags: [...avaloniaTags, { name: 'Library', color: '246 176 35' }],
  },
  {
    repo: 'tiouoo / YMCL.Avalonia',
    link: 'https://github.com/tiouoo/YMCL.Avalonia',
    description: 'A modern and cross-platform Minecraft launcher for a seamless gaming experience.',
    // img: 'https://f.tiouo.xyz/picgo/20260425104546879.png',
    tags: [...avaloniaTags, { name: 'App', color: '1 220 255' }],
  },
  {
    repo: 'tiouoo / tiouo.web',
    link: 'https://github.com/tiouoo/tiouo.web',
    description: 'This website you are browsing.',
    tags: [...vueTags, { name: 'Web', color: '206 103 141' }],
  },
  {
    repo: 'tiouoo / tiouo.api',
    link: 'https://github.com/tiouoo/tiouo.api',
    description: 'A transfer api for convenient functions.',
    tags: [
      { name: 'Express.js', color: '215 119 108' },
      { name: 'TypeScript', color: '0 191 255' },
      { name: 'API', color: '255 165 0' },
    ],
  },
].sort((a, b) => a.repo.localeCompare(b.repo));
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
  width: 21px;
  height: 21px;
}
.project-card {
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  fill: white;
  border-radius: 12px;
  padding: 12px 16px;
  transition: all 0.3s ease;
}
/* 容器布局 */
.project-container {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 25px;
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
  animation: fadeInUp 0.8s ease-out forwards;
}
.root {
  padding: 0 15px;
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.git-contribution-chart {
  width: 100%;
  margin-top: 20px;
}
@media (max-width: 1000px) {
  .git-contribution-chart {
    width: 0%;
  }
  .project-container {
    margin-top: -30px;
  }
}
.about-container {
  font-family: 'Google Sans Flex', sans-serif;
  max-width: 1200px;
  margin: 0 auto;
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
</style>
