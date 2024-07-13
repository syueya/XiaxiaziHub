<template>
    <ul>
      <!-- 遍历jsonData数组 -->
      <li v-for="category in jsonData" :key="category.category_No">
        <!-- 使用模板字符串绑定点击事件 -->
        <div @click="scrollToCategory(category.category_name)" class="category_siderbar">
            {{ category.category_name }}
        </div>
      </li>
    </ul>
  
</template>
  
<script setup lang="ts" name="Siderbar">

    import { ref } from 'vue'; // 导入 ref
    import { useBookmarks } from '../types/bookmarks'; // 确保路径正确

    const { jsonData } = useBookmarks();

    // 滚动到特定分类的方法
    const scrollToCategory = (categoryName: string) => {
    // 等待下一个事件循环，确保 DOM 更新完成
    window.setTimeout(() => {
        const element = document.getElementById(categoryName);
        if (element) {
        // 滚动到元素并使其位于顶部
        window.scrollTo({
            top: element.offsetTop,
            behavior: 'smooth'
        });
        }
    }, 0);
    };

</script>
  
<style scoped>
</style>