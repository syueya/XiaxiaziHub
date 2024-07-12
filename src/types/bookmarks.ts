// useBookmarks.ts
import { ref } from 'vue';

// 导入 JSON 数据
import data from '../data/bookmarks.json';

// 创建响应式引用
export function useBookmarks() {
  const jsonData = ref(data);

  // 你可以在这里添加任何数据处理逻辑
  // 例如，过滤或排序 jsonData

  return { jsonData };
}
