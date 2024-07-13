<template>
  <!--图标和标题-->
  <div class="branding">
    <img src="/logo.ico" alt="logo" class="logo-icon">
    <h2 class="logo-title">夏夏子导航</h2>
  </div>

  <!--搜索框-->
  <div class="search-box">
    <input aria-label="Search" autocomplete="off" spellcheck="false">
    <div class="search-results" id="searchResults">
      <!--搜索结果-->
    </div>
  </div> 

  <!-- 导航区 -->
  <div class="navigate">
    <RouterLink replace to="/" active-class="active">主页</RouterLink>
    <RouterLink replace to="/category" active-class="active">分类管理</RouterLink>
    <RouterLink replace to="/card" active-class="active">卡片列表</RouterLink>
  </div>

</template>

<script setup lang="ts" name="Header">
    import {RouterLink} from 'vue-router'
    
</script>

<style scoped>
  @import '../assets/header.css';
</style>