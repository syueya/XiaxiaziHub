<template>
    <table id="myTable-category">
        <thead>
            <tr>
            <th>选择</th>
            <th>ID</th>
            <th>名称</th>
            <th>图标</th>
            <th>操作</th>
            </tr>
        </thead>
        <tbody id="tableBody-category">
            <tr v-for="category in jsonData" :key="category.category_No">
            <td>
                <input type="checkbox">
            </td>
            <td>{{ category.category_No }}</td>
            <td>{{ category.category_name }}</td>
            <td>{{ category.category_icon }}</td>
            <td>
                <button @click="editItem" class="edit-button">编辑</button>
                <button @click="deleteItem" class="delete-button">删除</button>
            </td>
            </tr>
            <!-- 表格行将通过数据动态生成 -->
        </tbody>
    </table>
  </template>
  
  
  <script setup lang="ts" name="TableCategory">
    import { useBookmarks } from '../types/bookmarks.ts';
  
    const { jsonData} = useBookmarks();



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