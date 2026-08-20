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
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const titleRef = ref<HTMLElement | null>(null);
const subtitleRef = ref<HTMLElement | null>(null);
const contentRef = ref<HTMLElement | null>(null);
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

  [titleRef.value, subtitleRef.value, contentRef.value]
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
