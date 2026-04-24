/**
 * 拼音排序比较函数（使用内置 localeCompare）
 */
export function comparePinyin(a: string, b: string): number {
  return a.localeCompare(b, 'zh-CN');
}

/**
 * 检查文本是否匹配搜索关键词
 */
export function matchSearch(text: string, keyword: string): boolean {
  if (!keyword) return true;
  const lowerKeyword = keyword.toLowerCase();
  const lowerText = text.toLowerCase();
  return lowerText.includes(lowerKeyword);
}
