<template>
    <!-- 侧边栏 -->
    <div class="sidebar">
      <Siderbar/>
    </div>
    <div class="main-content">
      <div id="layout-groups" class="layout-pages">
        <ul>
          <CategoryItem v-for="category in jsonData" :key="category.category_No" :category="category"/>
        </ul>
      </div>
  </div>
</template>

<script setup lang="ts">
  import Siderbar from '../components/Sidebar.vue'
  import { useBookmarks } from '../types/bookmarks.ts';
  import CategoryItem from '../components/CategoryItem.vue';

  const { jsonData } = useBookmarks();
</script>

<style>
  @import '../assets/home.css';
</style>