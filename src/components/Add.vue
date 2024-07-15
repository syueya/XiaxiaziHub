<template>
  <!-- 添加模态框 -->
  <div class="modal">
    <div class="modal-content">
      <button class="closeButton" @click="close">&times;</button>
      <label>
        请输入你要添加的内容:
      </label>

      <CategoryModal 
        :name="categoryName" 
        :icon="categoryIcon" 
        :no="categoryNo" 
        @update:name="handleUpdateName" 
        @update:icon="handleUpdateIcon" 
        @update:no="handleUpdateNo"
    />

      <button class="saveButton" @click="saveButton">保存</button>
    </div>
  </div>
</template>


<script lang="ts" setup name="Add">
  import { ref } from 'vue';
  import { useBookmarks } from '../types/bookmarks.ts';
  import CategoryModal from './CategoryModal.vue'
  const { jsonData, addNewCategory } = useBookmarks();


  // 删除按钮
  const props = defineProps({
    isVisible: Boolean
  });
  const close = () => {
    emit('close');
  };
  const emit = defineEmits(['close']);

  // 保存按钮
  const categoryName = ref('');
  const categoryIcon = ref('');
  const categoryNo = ref('');

  const handleUpdateName = (value) => {
    categoryName.value = value;
  };
  const handleUpdateIcon = (value) => {
    categoryIcon.value = value;
  };
  const handleUpdateNo = (value) => {
    categoryNo.value = value;
  };


  const saveButton = () => {
    if (!categoryName.value || !categoryNo.value) {
      alert('请填写分类名称和序号');
      return;
    }
    const newCategory = {
      categoryNo: categoryNo.value,
      categoryIcon: categoryIcon.value,
      categoryName: categoryName.value,
      items: [] // 初始为空
    };
    addNewCategory(newCategory);
};


</script>

<style>
  @import '../assets/modal.css';
  @import '../assets/tablebutton.css';
</style>