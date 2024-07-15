<template>
    <!-- 表格 -->
    <table id="myTable-card">
    <thead>
    <tr>
        <th>选择</th>
        <th>所属分类</th>
        <th>名称</th>
        <th>图标</th>
        <th>链接</th>
        <th>描述</th>
        <th>操作</th>
    </tr>
    </thead>
        <tbody id="tableBody-card">
        <tr v-for="bookmark in bookmarksWithCategoryName" :key="bookmark.href">
            <td>
            <input type="checkbox">
            </td>
            <td>{{ bookmark.categoryName }}</td>
            <td>{{ bookmark.name }}</td>
            <td>{{ bookmark.icon }}</td>
            <td>{{ bookmark.href }}</td>
            <td>{{ bookmark.description }}</td>
            <td>
            <button @click="editItem" class="edit-button-card">编辑</button>
            <button @click="deleteItem" class="delete-button-card">删除</button>
            </td>
        </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts" name="TableBookmark">

  import { useBookmarks } from '../types/bookmarks.ts';

  const { jsonData} = useBookmarks();

  const bookmarksWithCategoryName = jsonData.value.flatMap(category => {
    return category.items.map(item => {
      return {
        ...item,
        categoryName: category.categoryName
      }
    })
  })

  const editItem = () => {
        // 处理编辑逻辑

        }

    const deleteItem = () => {
        // 处理删除逻辑

    }

</script>

<style>
    @import '../assets/tablebutton.css';
</style>