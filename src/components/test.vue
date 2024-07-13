<template>
    <div class="search-box">
      <!-- 绑定 v-model 到 inputSearchTerm 响应式引用 -->
      <input aria-label="Search" autocomplete="off" spellcheck="false" v-model="inputSearchTerm" @input="handleInput">
      <div class="search-results" id="searchResults">
        <div class="search-result">
          <div class="search-bookmark-name">
            <a href="" target="_blank">名称</a>   
          </div>
          <div class="search-bookmark-description">描述</div> 
        </div>
        <div class="search-count">共找到 条搜索结果</div>
      </div>
    </div> 
    </template>
    
    <script setup lang="ts"  name="Homesearch">
      import { ref } from 'vue';
  
      // 创建一个响应式引用
      const inputSearchTerm = ref<string>('');
  
      // 如果需要在输入时执行某些操作，可以添加方法并使用 @input 事件
      const handleInput = (event: Event) => {
      const inputElement = event.target as HTMLInputElement;
      
      console.log('即时输入的内容:', inputElement.value);
      // 这里可以添加更多的逻辑处理
      };
  
      
    </script>
    
    <style scoped>
      @import '../assets/search.css';
    </style>