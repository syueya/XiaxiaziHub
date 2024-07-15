<template>
    <main class="pages">
      <div id="layout-groups" class="layout-pages">
        <!-- 卡片列表 -->
        <div id="card-list" class="page-content">
          <!-- 工具栏 -->
          <div class="toolbar">
            <div class="toolbar-text-2">
              <span>😊 所属分类</span>
              <div class="category-select-all" aria-label="所属分类">
                <!-- 选择框 -->
                <select id="category-select" @change="handleCategoryChange">
                  <option value="">请选择类别</option>
                  <option v-for="category in jsonData" :key="category.category_No" :value="category.category_name">
                    {{ category.category_name }}
                  </option>
                </select>
                <span class="arrow">&#9660;</span>
              </div>
            </div>
            <div>
              <!-- 添加按钮 -->
              <button class="add-button-card" @click="addCard">添加</button>
              <!-- 批量删除按钮 -->
              <button class="multi-delete-button-card" @click="deleteSelectedCards">批量删除</button>
            </div>
          </div>
          <!-- 表格 -->
          <TableBookmark/>

        </div>
      </div>
    </main>




  
</template>

<script setup lang="ts" name="TableCard">
  import CardModal from '../components/CardModal.vue'

  import TableBookmark from '../components/Table-bookmark.vue'

  import { useBookmarks } from '../types/bookmarks.ts';
  const { jsonData} = useBookmarks();


  const handleCategoryChange = () => {
        // 处理编辑逻辑

        }

    const addCard = () => {
        // 处理删除逻辑

    }

    const deleteSelectedCards = () => {
        // 处理删除逻辑

    }


</script>

<style>
  @import '../assets/manage.css';
  @import '../assets/table-card.css';
</style>