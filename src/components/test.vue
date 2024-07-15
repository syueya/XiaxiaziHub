<template>
  <main class="pages">
    <div id="layout-groups" class="layout-pages">
      <div id="category-management" class="page-content">

        <div class="toolbar">
          <span class="toolbar-text-1">😊 您可以拖动来实现排序</span>
          <div>
            <button class="add-button-category" @click="addModal">添加</button>
            <Add v-if="isModalVisible" @close="hideTel" />



            <button class="multi-delete-button-category" @click="deleteCategories">批量删除</button>
          </div>
        </div>

        <TableCategory/>

      </div>
    </div>
  </main>



  <!-- 编辑模态框 -->
  <div  class="modal" id="edit_Modal">
    <div class="modal-content" id="edit_modal-content">
      <span class="close" id="edit_close">&times;</span>
      <label>
        请修改你要编辑的分类:
      </label>
      <CategoryModal/>
      <button class="saveButton" id="edit_saveButton">保存</button>
    </div>
  </div>

  <!-- 编辑模态框的保存模态框 -->
   <EditSave/>

  <!-- 删除模态框 -->
  <div  class="modal" id="del_Modal">
    <div class="modal-content" id="del_modal-content">
      <span class="close" id="del_close">&times;</span>
      <label>
        你真的要删除这个分类吗？
      </label>
      <CategoryModal/>
      <button class="saveButton" id="del_saveButton">确定</button>
    </div>
  </div>

  <!-- 删除模态框的保存模态框 -->
   <DelSave/>


  <!-- 批量删除及保存模态框 -->
  <MultiDelModal/>
  
</template>


<script setup lang="ts" name="Category">
  import { ref } from 'vue';
  import EditSave from '../components/EditSave.vue'
  import DelSave from '../components/DelSave.vue'
  import MultiDelModal from '../components/MultiDelModal.vue'

  import TableCategory from '../components/Table-category.vue'

  import Add from '../components/Add.vue';

  const showTel = () => {
      isModalVisible.value = true;
    };

    const hideTel = () => {
      isModalVisible.value = false;
    };


  



    const deleteCategories = () => {
      console.log('按钮被点击了！')
    }
    

</script>

<style scoped>
  @import '../assets/manage.css';
  @import '../assets/category.css';
</style>