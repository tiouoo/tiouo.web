import { computed } from 'vue';
import { router } from './router';

export const isChinese = computed(() => /^\/zh\/?$/.test(router.currentRoute.value.path));

const messages = {
  avatar: ['avatar', '头像'],
  engineer: ['Full-stack Engineer', '全栈工程师'],
  designer: ['Designer', '设计师'],
  motto: ['"Forge ahead bravely against all uncertainties."', '"长风破浪会有时, 直挂云帆济沧海"'],
  study: ['Studying and wanting to make more friends 👀', '正在努力学习中, 期待认识更多朋友 👀'],
  about: ['About', '关于我'],
  sites: ['Sites', '站点'],
  getInTouch: ['Get in Touch', '联系我'],
  aboutHeading: ['ABOUT ME', '关于我'],
  student: [' Student. 🍃', '学生 🍃'],
  schoolIntro: ['Currently navigating the exciting (and slightly chaotic) world of ', '目前正在读'],
  school: ['high school', '高中'],
  schoolEnd: ['.', ', 日子有些忙, 也有些有趣'],
  balance: ['I spend my days balancing', '有时埋头解'],
  equations: ['complex equations', '方程式'],
  joy: ['and the simple joy of a', ', 有时抬头看'],
  sunset: ['golden sunset', '晚霞'],
  sunsetEnd: ['.', ''],
  curiosity: [
    ' Just a curious soul trying to capture every vibrant moment of life.',
    ', 总想记住这些平常又鲜活的瞬间',
  ],
  contributionChart: ['GitHub contribution chart for tiouoo', 'tiouoo 的 GitHub 贡献图'],
  workHeading: ['MY WORK', '我的作品'],
  sleepEngineer: ['Senior Sleep Engineer 🛌.', '资深睡眠工程师 🛌'],
  developer: [' A Full-stack Developer', ' 全栈开发者'],
  enjoy: ['I enjoy making', '我喜欢做一些'],
  projects: ['useful and fun projects', '好玩又有用的小项目'],
  orJust: [' or just ', ', 偶尔附赠 '],
  bugs: ['some bugs', '几个 Bug'],
  status: ['status', '站点状态'],
  website: ['This website you are browsing.', '你正在浏览的网站 (就是这个站)'],
  technologies: ['Technologies', '使用技术'],
  websiteGitHub: ['tiouo.web on GitHub', '在 GitHub 上查看 tiouo.web'],
  ovoui: [
    'Modern Fluent Design components for Avalonia, built for a seamless user experience.',
    '为 Avalonia 打造的现代 Fluent Design 组件, 带来流畅的使用体验',
  ],
  library: ['Library', '组件库'],
  ovouiGitHub: ['OvoUi.Avalonia on GitHub', '在 GitHub 上查看 OvoUi.Avalonia'],
  demo: ['Open Demo', '查看演示'],
  tmail: [
    'A temporary email service with disposable inboxes, email forwarding, and archiving.',
    '支持一次性收件箱、邮件转发和归档的临时邮箱服务',
  ],
  cloudflareAnalytics: [
    'A dashboard for Cloudflare traffic, cache performance, and security at the account and site levels.',
    '集中查看 Cloudflare 账户及各站点的流量、缓存命中率和安全事件',
  ],
  orbit: [
    'An application telemetry dashboard for tracking events, usage trends, and user geography.',
    '用于查看应用事件、使用趋势和用户地域分布的遥测分析平台',
  ],
  email: ['Email', '邮箱'],
  titleAvatar: ['avatar-title', 'Tiouo 的头像'],
  contact: ['Contact', '联系我'],
  close: ['Close', '关闭'],
  contactImage: ['Contact Image', 'QQ 联系二维码'],
} as const;

export const copy = computed(() => {
  const languageIndex = isChinese.value ? 1 : 0;
  return Object.fromEntries(
    Object.entries(messages).map(([key, translations]) => [key, translations[languageIndex]])
  ) as Record<keyof typeof messages, string>;
});
