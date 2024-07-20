<template>
    <transition name="fade">
      <div v-if="visible" :class="alertClass">
        {{ message }}
      </div>
    </transition>
</template>


<script setup lang="ts" name="SuccessAlert">
import { ref, defineComponent, computed } from 'vue';

// 定义 props
const props = defineProps({
  autoClose: {
    type: Number,
    default: 2000,
  },
});

// 定义响应式状态
const visible = ref(false);
const message = ref("");

// 定义计算属性
const alertClass = computed(() => 'alert-success');

// 定义方法
const showMessage = (msg: string) => {
  console.log("showMessage called with message:", msg); // 添加日志输出
  message.value = msg;
  visible.value = true;
  setTimeout(() => {
    visible.value = false;
  }, props.autoClose);
};

// 暴露 showMessage 方法
defineExpose({ showMessage });

</script>

<style scoped>
.alert-success {
  display: flex;
  align-items: center; /* 垂直居中 */
  justify-content: center; /* 水平居中 */
  color: red;
  font-size: 20px;

  
  position: fixed;
  top: 2px;
  left: 50%;
  width: 100px;
  height: 50px;
  z-index: 2000; /* 确保在最上层 */
  
}
</style>