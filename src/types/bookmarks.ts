// useBookmarks.ts
import { ref, watchEffect } from 'vue';

// 导入 JSON 数据
import data from '../data/bookmarks.json';



// 创建响应式引用
export function useBookmarks() {
  
    const jsonData = ref(data);
    
    // 创建一个新的响应式数组来存储 items 数据
    const itemsArray = ref<{ name: string; icon: string; href: string; description: string }[]>([])

    // 在组件的 setup 函数中，使用 watchEffect 来观察 jsonData 的变化
    watchEffect(() => {
      // 当 jsonData 发生变化时，将所有类别的 items 数组合并到 itemsArray 中
      itemsArray.value = jsonData.value.flatMap(category => category.items)
    })

    return { jsonData, itemsArray }
}
