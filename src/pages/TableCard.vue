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
                  <option value="">请选择</option>
                  <!-- 其他选项根据需要添加 -->
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
          <table id="myTable-card">
            <thead>
            <tr>
              <th>选择</th>
              <th>序号</th>
              <th>所属分类</th>
              <th>名称</th>
              <th>图标</th>
              <th>链接</th>
              <th>描述</th>
              <th>操作</th>
            </tr>
            </thead>
              <tbody id="tableBody-card">
                <tr v-for="bookmark in itemsArray" :key="bookmark.name">
                <td>
                  <input type="checkbox">
                </td>
                <td></td>
                <td></td>
                <td>{{ bookmark.name }}</td>
                <td>{{ bookmark.icon }}</td>
                <td>{{ bookmark.href }}</td>
                <td>{{ bookmark.description }}</td>
                <td>
                  <button @click="editItem(item)" class="edit-button-card">编辑</button>
                  <button @click="deleteItem(item)" class="delete-button-card">删除</button>
                </td>
              </tr>
              </tbody>
          </table>
        </div>
      </div>
    </main>

    <!-- 添加模态框 -->
    <div class="modal" id="add_Modal-card" >
      <div class="modal-content"  id="add_modal-content-card">
        <span class="close" id="add_close-card">&times;</span>
        <label>请输入你要添加的网页:</label>
        <CardModal/>
        <button class="saveButton" id="add_saveButton-card">保存</button>
      </div>
    </div>

    <!-- 添加模态框的保存模态框 -->
    <AddSave/>

  <!-- 编辑模态框 -->
  <div  class="modal" id="edit_Modal-card">
    <div class="modal-content" id="edit_modal-content-card">
      <span class="close" id="edit_close-card">&times;</span>
        <label>
          请修改你要编辑的分类:
        </label>
        <CardModal/>
        <button class="saveButton" id="edit_saveButton">保存</button>
      </div>
    </div>

    <!-- 编辑模态框的保存模态框 -->
    <EditSave/>

  <!-- 删除模态框 -->
  <div  class="modal" id="del_Modal-card">
    <div class="modal-content" id="del_modal-content-card">
      <span class="close" id="del_close-card">&times;</span>
      <label>
        你真的要删除这个网页吗？
      </label>
      <CardModal/>
      <button class="saveButton" id="del_saveButton-card">确定</button>
    </div>
  </div>

  <!-- 删除模态框的保存模态框 -->
  <DelSave/>

  <!-- 批量删除及保存模态框 -->
  <MultiDelModal/>
  
</template>

<script setup lang="ts" name="TableCard">
  import CardModal from '../components/CardModal.vue'
  import AddSave from '../components/AddSave.vue'
  import EditSave from '../components/EditSave.vue'
  import DelSave from '../components/DelSave.vue'
  import MultiDelModal from '../components/MultiDelModal.vue'
  import { useBookmarks } from '../types/bookmarks.ts';

  const { jsonData, itemsArray } = useBookmarks();

</script>

<style>
  @import '../assets/manage.css';
  @import '../assets/table-card.css';
</style>