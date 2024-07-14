<template>
    <li :key="category.category_No">
      <div class="bookmark-group" :id="category.category_name">
        <div class="group">
            <!-- 类图标 -->
            <img :src="`src/images/${category.category_icon}`" alt="icon" class="bookmark-group-icon">
            <h2 class="bookmark-group-name">{{ category.category_name }}</h2>
        </div>
        <div class="bookmark-list-area">
          <BookmarkItem v-for="item in category.items" :key="item.name" :item="item"/>
        </div>
      </div>
    </li>
  </template>
  
  <script setup lang="ts">
    import BookmarkItem from "./BookmarkItem.vue";

  </script>

<style>
  @import '../assets/categoryitem.css';
</style>