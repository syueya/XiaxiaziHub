<template>
  <div class="app">
    <Header/>
    <Search/>
    <Siderbar/>

    </div>
    <!-- 导航区 -->
    <div class="navigate">
      <RouterLink replace to="/home" active-class="active">主页</RouterLink>
      <RouterLink replace :to="{name:'xinwen'}" active-class="active">分类管理</RouterLink>
      <RouterLink replace :to="{path:'/about'}" active-class="active">卡片列表</RouterLink>
    </div>
    
    <!-- 展示区 -->
    <div class="main-content">
      <RouterView></RouterView>
    </div>

</template>

<script lang="ts" setup name="App">
  import {RouterView,RouterLink} from 'vue-router'
  import Header from './components/Header.vue'
  import Search from './components/Search.vue'
  import Siderbar from './components/Sidebar.vue'

</script>

<style>

</style>
