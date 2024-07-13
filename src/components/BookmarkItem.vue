<template>
    <div class="bookmark-list">
      <a :href="item.href" target="_blank" class="bookmark-href">
        <div class="bookmark-icon-area">
            <img :src="`src/images/${item.icon}`" alt="icon" class="bookmark-icon">
        </div>    
        <div class="bookmark-text">
            <div class="bookmark-name">{{ item.name }}</div>
            <div class="bookmark-description">{{ item.description }}</div>
        </div>
      </a>
    </div>
  </template>
  
<script setup lang="ts">
    defineProps<{
        item: {
        name: string;
        description: string;
        href: string;
        icon: string;
        };
    }>();
</script>


<style>
  @import '../assets/bookmarkitem.css';
</style>