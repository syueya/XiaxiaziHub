<template>
  <div id="layout-groups" class="layout-pages">
    <ul>
      <li v-for="category in jsonData" :key="category.category_No">
        <div class="bookmark-group" :id="category.category_name">
          <div class="group">
            <div class="bookmark-group-icon">
              {{ category.category_icon }}
            </div>
            <h2 class="bookmark-group-name">
              {{ category.category_name }}
            </h2>
          </div>
          <div class="bookmark-list-area">
            <!-- 遍历每个分类下的 items 数组 -->
            <ul>
              <li v-for="item in category.items" :key="item.name">
                <div class="bookmark-list">
                  <a :href="item.href" target="_blank" class="bookmark-href">
                    <div class="bookmark-icon-area">
                      <img :src="item.icon" alt="icon" class="bookmark-icon">
                      <div class="bookmark-text">
                        <div class="bookmark-name">
                          {{ item.name }}
                        </div>
                        <div class="bookmark-description">

                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

      </li>
    </ul>
  </div >
</template>

<script setup lang="ts">
  import { useBookmarks } from '../types/bookmarks.ts';


  // 使用 useBookmarks 钩子函数，获取 jsonData
  const { jsonData } = useBookmarks();


</script>


<style scoped>
  @import '../assets/home.css';
</style>