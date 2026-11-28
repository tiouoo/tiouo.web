<template>
  <aside
    v-if="visible"
    class="language-prompt"
    lang="zh-CN"
    aria-labelledby="language-prompt-title"
    @keydown.esc="visible = false">
    <button
      class="close-button"
      type="button"
      aria-label="关闭语言提示"
      title="关闭"
      @click="visible = false">
      <span class="iconfont icon-close" aria-hidden="true"></span>
    </button>
    <h2 id="language-prompt-title">切换为中文？</h2>
    <div class="actions">
      <RouterLink class="switch-link arrow-action" to="/zh" hreflang="zh-CN">
        <span class="switch-label">切换</span>
        <span class="arrow-action-icon iconfont icon-arrow-right" aria-hidden="true"></span>
      </RouterLink>
      <button class="dismiss-button" type="button" @click="dismissPermanently">不再提醒</button>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { isChinese } from '@/locale';

const storageKey = 'tiouo:hide-chinese-prompt';
const visible = ref(false);
let hasShown = false;

watch(
  isChinese,
  (chinese) => {
    visible.value = !chinese && !hasShown && !isPermanentlyDismissed();
    if (visible.value) hasShown = true;
  },
  { immediate: true }
);

function isPermanentlyDismissed() {
  try {
    return localStorage.getItem(storageKey) === 'true';
  } catch {
    return false;
  }
}

function dismissPermanently() {
  visible.value = false;
  try {
    localStorage.setItem(storageKey, 'true');
  } catch {
    // Keep the prompt dismissed for the current page.
  }
}
</script>

<style scoped>
.language-prompt {
  position: fixed;
  z-index: 110;
  top: 1rem;
  right: 1rem;
  width: 16rem;
  display: grid;
  gap: 0.6rem;
  padding: 0.75rem 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 8px 24px rgb(0 0 0 / 20%);
  color: #171717;
  --text-color: currentColor;
}

h2 {
  padding-right: 1.75rem;
  font-size: 0.95rem;
  line-height: 1.4;
}

.actions {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  white-space: nowrap;
}

.language-prompt .switch-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  min-height: 2rem;
  padding: 0 1rem 0 0.9rem;
  border-radius: 999px;
  background: #171717;
  color: #fff;
  font-size: 0.8rem;
}

.switch-label {
  position: relative;
  top: 1px;
}

.switch-link .arrow-action-icon {
  position: relative;
  top: 2px;
  flex-shrink: 0;
}

.language-prompt .switch-link:hover {
  background: #383838;
}

button {
  border: 0;
  background: transparent;
  color: #595959;
  cursor: pointer;
}

button:hover {
  color: #171717;
}

.dismiss-button {
  min-height: 1.75rem;
  font-size: 0.75rem;
}

.close-button {
  position: absolute;
  top: 0.3rem;
  right: 0.3rem;
  display: grid;
  place-items: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
}

.close-button:hover {
  background: #f0f0f0;
}

.language-prompt :is(a, button):focus-visible {
  outline: 2px solid #171717;
  outline-offset: 2px;
}

@media (max-width: 600px) {
  .language-prompt {
    top: max(0.5rem, env(safe-area-inset-top));
    right: 0.5rem;
    left: 0.5rem;
    width: auto;
    grid-template-columns: auto auto;
    align-items: center;
    justify-content: start;
    gap: 0.45rem 0.75rem;
    padding: 0.55rem 2.75rem 0.55rem 1rem;
    border-radius: 14px;
  }

  h2 {
    padding-right: 0;
  }

  .close-button {
    top: 50%;
    transform: translateY(-50%);
  }
}

@media (max-width: 340px) {
  .language-prompt {
    grid-template-columns: 1fr;
  }
}
</style>
