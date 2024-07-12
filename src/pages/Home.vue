<template>
  <div id="layout-groups" class="layout-pages">
    <!-- JS脚本将会在这里生成书签列表 -->
     <h2>test</h2>
  </div>
</template>

<script setup lang="ts" name="Home">
  import {onMounted} from 'vue'
  import {useRouter} from 'vue-router'

  const router = useRouter()

  /* onMounted(()=>{
    setTimeout(()=>{
      router.push('/news')
    },3000)
  }) */
</script>

<style scoped>
  .home {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
</style>