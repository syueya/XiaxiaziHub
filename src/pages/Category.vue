<template>
  <main class="pages">
    <div id="layout-groups" class="layout-pages">
      <div id="category-management" class="page-content">

        <div class="toolbar">
          <span class="toolbar-text-1">😊 您可以拖动来实现排序</span>
          <div>
            <button class="add-button-category" @click="handleAddClick">添加</button>
            <Add v-show="isModalVisible" :isVisible="isModalVisible" @close="isModalVisible = false" />

            <button class="multi-delete-button-category" @click="deleteCategories">批量删除</button>
          </div>
        </div>
        <TableCategory/>
      </div>
    </div>
  </main>


  
</template>


<script setup lang="ts" name="Category">
  import { ref } from 'vue';
  import TableCategory from '../components/Table-category.vue'
  import Add from '../components/Add.vue';
  const isModalVisible = ref(false);
   
   const handleAddClick = () => {
     isModalVisible.value = true;
   };

    const deleteCategories = () => {
      console.log('按钮被点击了！')
    }
    

</script>

<style scoped>
  @import '../assets/manage.css';
  @import '../assets/category.css';


</style>