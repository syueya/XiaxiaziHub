<template>
  <div class="search-box">
    <!-- 绑定输入框的v-model到响应式变量inputSearchTerm -->
    <input type="text" v-model="inputSearchTerm"/>
    <div class="search-results" :style="searchResultsStyle">
      <!-- 显示匹配的文本内容 -->
      <div v-for="item in searchResults" :key="item.href" class="search-result">
        <a :href="item.href" target="_blank" class="search-bookmark">
          <div class="search-bookmark-name">{{ item.name }}</div>
          <div class="search-bookmark-description">{{ item.description }}</div>
        </a>
      </div>
      <div class="search-count">共找到{{ searchCount }}条搜索结果</div>
    </div>
  </div>
</template>

<script setup lang="ts" name="Homesearch">
import useHomesearch from '../types/search.ts';
import { onMounted } from 'vue';

const {
  inputSearchTerm,
  searchResults,
  searchCount,
  fetchBookmarksFromHTML,
  searchResultsStyle
} = useHomesearch();

// 在组件挂载后获取所有书签信息
onMounted(async () => {
  await fetchBookmarksFromHTML();
});
</script>

<style scoped>
  @import '../assets/search.css';
</style>