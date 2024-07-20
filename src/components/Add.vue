<!-- Add.vue -->
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
        ref="categoryModal"
      />

      <button class="saveButton" @click="saveButton">保存</button>
    </div>
    <!-- 成功提示组件 -->
    <SuccessAlert ref="successAlert" />


  </div>
</template>


<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue';
import CategoryModal from './CategoryModal.vue'
import SuccessAlert from './SuccessAlert.vue';
import { useBookmarks } from '../types/bookmarks';

const { jsonData, addNewCategory } = useBookmarks();

// 删除按钮
const props = defineProps({
    isVisible: Boolean
});
const emit = defineEmits(['close']);

// 定义响应式状态
const categoryName = ref('');
const categoryIcon = ref('');
const categoryNo = ref('');
const successAlert = ref(null);
const categoryModal = ref(null); // 确保这里正确声明了 ref

const handleUpdateName = (value) => {
    categoryName.value = value;
};
const handleUpdateIcon = (value) => {
    categoryIcon.value = value;
};
const handleUpdateNo = (value) => {
    categoryNo.value = value;
};

const close = () => {
    emit('close');
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

    // 调用 SuccessAlert 的 showMessage 方法显示提示
    if (successAlert.value) {
        console.log("Calling showMessage on successAlert");
        successAlert.value.showMessage('成功添加');
    } else {
        console.log("successAlert is null");
    }

};





</script>

<style>
  @import '../assets/modal.css';
  @import '../assets/tablebutton.css';
</style>