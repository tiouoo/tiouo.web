<template>
  <div id="about" class="about-container">
    <div class="root">
      <h2 ref="titleRef" class="about-title animate-up">{{ copy.aboutHeading }}</h2>
      <p class="title-text animate-up" ref="subtitleRef">
        <strong>{{ copy.student }}</strong>
      </p>
      <div class="content-body animate-up" ref="contentRef">
        <span>{{ copy.schoolIntro }}</span>
        <span class="highlight">{{ copy.school }}</span
        >{{ copy.schoolEnd }}
        <br />
        {{ copy.balance }}
        <a href="javascript:void(0)" class="link-tag">{{ copy.equations }}</a>
        {{ copy.joy }}
        <a href="javascript:void(0)" class="link-tag">{{ copy.sunset }}</a
        >{{ copy.sunsetEnd }}
        <span>{{ copy.curiosity }}</span>
      </div>
      <img
        class="git-contribution-chart animate-up"
        ref="chartRef"
        src="https://ghchart.rshah.org/409ba5/tiouoo"
        :alt="copy.contributionChart" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { copy } from '@/locale';
import { ref, onMounted, onUnmounted } from 'vue';

const titleRef = ref<HTMLElement | null>(null);
const subtitleRef = ref<HTMLElement | null>(null);
const contentRef = ref<HTMLElement | null>(null);
const chartRef = ref<HTMLImageElement | null>(null);
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

  [titleRef.value, subtitleRef.value, contentRef.value, chartRef.value]
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
.about-container {
  scroll-margin-top: 24px;
}

.about-title {
  margin-bottom: 32px;
  font-size: 36px;
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

.git-contribution-chart {
  display: block;
  width: 100%;
  margin-top: 20px;
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
</style>
