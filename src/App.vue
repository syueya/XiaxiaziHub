<template>
  <!-- 导航栏 -->
  <div class="navbar">
    <Header/>
  </div>


      
  <!-- 展示区 -->

  <RouterView></RouterView>


</template>

<script lang="ts" setup name="App">
  import {RouterView} from 'vue-router'
  import Header from './components/Header.vue'


</script>

<style>
  @import '../src/assets/app.css';

</style>
