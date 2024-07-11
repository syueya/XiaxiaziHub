<template>
  <div class="branding">
    <img src="/logo.ico" alt="logo" class="logo-icon">
    <h2 class="logo-title">夏夏子导航</h2>
  </div>

</template>

<script setup lang="ts" name="Header">
  
</script>

<style scoped>
  .branding {

    display: flex;          /* 启用Flexbox布局 */
    justify-content: flex-start;   /* 主轴对齐方式：左对齐 */
    align-items: center;    /* 交叉轴对齐方式：垂直居中 */

 
    word-spacing: 5px;
    margin: 30px 0;
    height: 70px;
    line-height: 70px;
    background-image: linear-gradient(45deg, gray, white);
    border-radius: 10px;
    box-shadow: 0 0 2px;
    font-size: 24px;
  }

  .logo-icon {
    height: 50px; 
    width: auto;
    margin-left: 10px; /* 与标题保持一定间距 */
    margin-right: 10px; /* 与标题保持一定间距 */
  }

</style>