<template>
  <div class="page-nav-container">
    <h1 class="title">tiouo.xyz</h1>

    <div class="search-box">
      <a-input
        v-model:value="searchKeyword"
        placeholder="搜索..."
        size="large"
        @pressEnter="handleSearch">
        <template #prefix>
          <SearchOutlined class="icon" @click="handleSearch" />
        </template>
      </a-input>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SearchOutlined } from '@ant-design/icons-vue';
import { ref } from 'vue';
import { message } from 'ant-design-vue';

const searchKeyword = ref('');

function handleSearch() {
  const keyword = searchKeyword.value.trim();

  if (!keyword) {
    message.warning('请输入搜索关键词');
    return;
  }

}
</script>

<style scoped>
.page-nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.title {
  text-align: center;
  margin-bottom: 40px;
  margin-top: 30px;
  color: var(--text-color);
  font-size: 36px;
}
.search-box {
  margin-bottom: 30px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}
.icon :deep(svg) {
  width: 18px;
  height: 18px;
}
.search-box :deep(.ant-input-affix-wrapper) {
  background-color: var(--card-bg);
  border: var(--card-border);
  border-radius: 9999px;
  color: var(--text-color);
  padding: 8px 16px;
}

.search-box :deep(.ant-input-affix-wrapper:focus),
.search-box :deep(.ant-input-affix-wrapper-focused),
.search-box :deep(.ant-input-affix-wrapper:hover) {
  border-color: #e5e7eb;
  box-shadow: none;
}

[data-theme='dark'] .search-box :deep(.ant-input-affix-wrapper:focus),
[data-theme='dark'] .search-box :deep(.ant-input-affix-wrapper-focused),
[data-theme='dark'] .search-box :deep(.ant-input-affix-wrapper:hover) {
  border-color: #334155;
  box-shadow: none;
}

.search-box :deep(.ant-input) {
  background-color: transparent !important;
  color: var(--text-color);
  font-family: 'ZhuZiAYuanJWD', sans-serif;
  font-size: 16px !important;
}

.search-box :deep(.ant-input::placeholder) {
  color: var(--text-color-light);
  font-family: 'ZhuZiAYuanJWD', sans-serif;
  font-size: 16px;
}

.search-box :deep(.anticon) {
  color: var(--text-color-light);
  margin-right: 6px;
}

.nav-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
  margin-bottom: 20px;
}

.nav-card {
  background-color: var(--card-bg);
  border: var(--card-border);
  border-radius: var(--card-radius);
  padding: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.nav-card:hover {
  background-color: var(--card-bg-hover);
}

.nav-card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 4px;
}

.nav-card-title {
  font-size: 16px;
  font-weight: normal;
  color: var(--text-color);
}

.nav-card-path {
  font-size: 12px;
  color: var(--text-color-light);
  font-family: 'ZhuZiAYuanJWD', sans-serif;
  margin-left: 12px;
  flex-shrink: 0;
}

.nav-card-desc {
  font-size: 12px;
  color: var(--text-color-light);
  line-height: 1.5;
}

.empty-state {
  text-align: center;
  padding: 60px 20px;
}

.empty-state :deep(.ant-empty-description) {
  color: var(--text-color-light);
}
</style>
