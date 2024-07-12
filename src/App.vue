<template>
  <!-- 导航栏 -->
  <div class="navbar">
    <Header/>
  </div>

  <!-- 侧边栏 -->
  <div class="sidebar">
    <Siderbar/>
  </div>
      
  <!-- 展示区 -->
  <div class="main-content">
    <RouterView></RouterView>
  </div>

</template>

<script lang="ts" setup name="App">
  import {RouterView} from 'vue-router'
  import Header from './components/Header.vue'
  import Siderbar from './components/Sidebar.vue'

</script>

<style>
  @import '../src/assets/css/app.css';

</style>
