<!-- eslint-disable vue/no-deprecated-filter -->
<template>
  <div class="about-container">
    <div class="root">
      <h2 id="work" ref="titleRef" class="animate-up">{{ copy.workHeading }}</h2>
      <p class="title-text animate-up" ref="subtitleRef">
        <del>{{ copy.sleepEngineer }}</del
        >{{ copy.developer }}
      </p>
      <div class="content-body animate-up" ref="contentRef">
        {{ copy.enjoy }}
        <a
          href="https://github.com/tiouoo"
          target="_blank"
          rel="noopener noreferrer"
          class="link-tag"
          title="GitHub">
          {{ copy.projects }}
          <span class="icon-wrapper">
            <span class="iconfont icon-github" aria-hidden="true"></span>
          </span>
        </a>
        <span>{{ copy.orJust }}</span>
        <a
          href="https://status.tiouo.cc/status/default"
          target="_blank"
          rel="noopener noreferrer"
          class="link-tag"
          :title="copy.status">
          {{ copy.bugs }}
          <span class="icon-wrapper">
            <span class="iconfont icon-bug" aria-hidden="true"></span>
          </span>
        </a>
      </div>

      <div class="project-container">
        <article class="project-card project-card-wide animate-up" ref="websiteRef">
          <h3 class="project-title">tiouo.web</h3>
          <p class="project-description">{{ copy.website }}</p>

          <ul class="tags" :aria-label="copy.technologies">
            <li class="p-tag" style="--tag-color: 65 184 131">Vue</li>
            <li class="p-tag" style="--tag-color: 0 191 255">TypeScript</li>
            <li class="p-tag" style="--tag-color: 230 127 166">Web</li>
          </ul>

          <div class="project-actions">
            <a
              class="project-action"
              href="https://github.com/tiouoo/tiouo.web"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="copy.websiteGitHub">
              <span class="iconfont icon-github" aria-hidden="true"></span>
              <span class="github-label">GitHub</span>
            </a>
          </div>
        </article>
        <article class="project-card animate-up" ref="ovouiRef">
          <h3 class="project-title">OvoUi.Avalonia</h3>
          <p class="project-description">
            {{ copy.ovoui }}
          </p>

          <ul class="tags" :aria-label="copy.technologies">
            <li class="p-tag" style="--tag-color: 197 143 231">Avalonia</li>
            <li class="p-tag" style="--tag-color: 122 210 101">C#</li>
            <li class="p-tag" style="--tag-color: 246 176 35">{{ copy.library }}</li>
          </ul>

          <div class="project-actions">
            <a
              class="project-action"
              href="https://github.com/tiouoo/OvoUi.Avalonia"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="copy.ovouiGitHub">
              <span class="iconfont icon-github" aria-hidden="true"></span>
              <span class="github-label">GitHub</span>
            </a>
            <a
              class="project-action project-demo arrow-action"
              href="https://oui.chilo.top/"
              target="_blank"
              rel="noopener noreferrer">
              {{ copy.demo }}
              <span class="arrow-action-icon">
                <span class="iconfont icon-arrow-right" aria-hidden="true"></span>
              </span>
            </a>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { copy } from '@/locale';
import { ref, onMounted, onUnmounted } from 'vue';

const titleRef = ref<HTMLElement | null>(null);
const subtitleRef = ref<HTMLElement | null>(null);
const contentRef = ref<HTMLElement | null>(null);
const websiteRef = ref<HTMLElement | null>(null);
const ovouiRef = ref<HTMLElement | null>(null);
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

  [titleRef.value, subtitleRef.value, contentRef.value, websiteRef.value, ovouiRef.value]
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
.project-container {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin-top: 24px;
}

.project-card {
  min-width: 0;
  display: flex;
  flex-direction: column;
  padding: 14px 16px;
  border-radius: 18px;
  background: color-mix(in srgb, black 90%, white);
}

.project-card-wide {
  grid-column: 1 / -1;
}

.project-title {
  color: white;
  font-size: 1.2rem;
  margin-bottom: 4px;
  overflow-wrap: anywhere;
}

.project-description {
  color: rgb(255 255 255 / 75%);
  font-size: 0.9375rem;
  line-height: 1.45;
}

.tags,
.project-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.tags {
  gap: 6px;
  margin-top: 8px;
  list-style: none;
}

.p-tag {
  padding: 3px 9px;
  border-radius: 999px;
  color: rgb(var(--tag-color));
  background: rgb(var(--tag-color) / 16%);
  font-size: 0.8rem;
}

.project-actions {
  gap: 8px;
  margin-top: auto;
  padding-top: 10px;
}

.project-actions .project-action {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 36px;
  padding: 6px 16px;
  border-radius: 999px;
  background: rgb(255 255 255 / 10%);
  color: white;
  font-size: 0.875rem;
}

.project-actions .project-action:hover {
  background: rgb(255 255 255 / 20%);
}

.project-actions .project-demo {
  padding: 7px 20px 6px;
  background: hsl(189 100% 50% / 10%);
  color: #00d9ff;
}

.project-actions .project-demo:hover {
  background: hsl(189 100% 50% / 25%);
}

.project-action span {
  color: inherit;
}

.github-label,
.project-demo .arrow-action-icon {
  position: relative;
  top: 1px;
}

.project-actions .project-action:focus-visible {
  outline: 2px solid #00d9ff;
  outline-offset: 3px;
}

@media (min-width: 768px) {
  .project-card-wide {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto auto;
    column-gap: 20px;
    align-items: center;
  }

  .project-card-wide .project-description {
    grid-column: 1;
  }

  .project-card-wide .tags,
  .project-card-wide .project-actions {
    grid-row: 1 / span 2;
    margin-top: 0;
    padding-top: 0;
  }

  .project-card-wide .tags {
    grid-column: 2;
  }

  .project-card-wide .project-actions {
    grid-column: 3;
  }
}

@media (max-width: 767px) {
  .project-container {
    grid-template-columns: minmax(0, 1fr);
  }
}

#work {
  margin-top: 64px;
  margin-bottom: 32px;
  font-size: 36px;
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
</style>
