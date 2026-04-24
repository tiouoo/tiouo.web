import { ref } from 'vue';
import { theme } from 'ant-design-vue';

export type ThemeMode = 'light' | 'dark';

const THEME_KEY = 'theme-mode';

// 响应式主题状态
export const isDark = ref(false);

// 获取 Ant Design 主题算法
export const getAntdAlgorithm = () => {
  return isDark.value ? theme.darkAlgorithm : theme.defaultAlgorithm;
};

// 初始化主题（从 localStorage 或系统偏好读取）
export function initTheme() {
  const saved = localStorage.getItem(THEME_KEY) as ThemeMode | null;
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const dark = saved ? saved === 'dark' : prefersDark;
  setTheme(dark ? 'dark' : 'light');
}

// 设置主题
export function setTheme(mode: ThemeMode) {
  isDark.value = mode === 'dark';
  document.documentElement.setAttribute('data-theme', mode);
  localStorage.setItem(THEME_KEY, mode);
}

// 切换主题
export function toggleTheme() {
  setTheme(isDark.value ? 'light' : 'dark');
}
