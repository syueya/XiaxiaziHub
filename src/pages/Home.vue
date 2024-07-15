<template>
    <!-- 侧边栏 -->
    <div class="sidebar">
      <Siderbar/>
    </div>
    <div class="main-content">
      <div id="layout-groups" class="layout-pages">
        <ul>
          <li v-for="category in jsonData" :key="category.categoryNo">
            <div class="bookmark-group" :id="category.categoryName">
              <div class="group">
                  <!-- 类图标 -->
                  <img :src="`src/images/${category.categoryIcon}`" alt="icon" class="bookmark-group-icon">
                  <h2 class="bookmark-group-name">{{ category.categoryName }}</h2>
              </div>
              <div class="bookmark-list-area">
                <div class="bookmark-list" v-for="item in category.items" :key="item.href">
                  <a :href="item.href" target="_blank" class="bookmark-href">
                    <div class="bookmark-icon-area">
                        <img :src="`src/images/${item.icon}`" alt="icon" class="bookmark-icon">
                    </div>    
                    <div class="bookmark-text">
                        <div class="bookmark-name">{{ item.name }}</div>
                        <div class="bookmark-description">{{ item.description }}</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
  </div>
</template>

<script setup lang="ts">
  import Siderbar from '../components/Sidebar.vue'
  import { useBookmarks } from '../types/bookmarks.ts';


  const { jsonData } = useBookmarks();
</script>

<style>
  @import '../assets/home.css';
</style>