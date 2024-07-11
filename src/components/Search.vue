
<template>
  <div class="search-box">
    <input aria-label="Search" autocomplete="off" spellcheck="false">
    <div class="search-results" id="searchResults">
    <!--搜索结果-->
    </div>
  </div>

</template>

<script setup lang="ts" name="Search">
  
</script>

<style scoped>
.search-box {
    flex: 0 0 auto;  /* 元素会保持其原始的尺寸（由内容决定），不会收缩或伸展以适应剩余空间或空间不足 */
    vertical-align: top;
    display: inline-block;
    position: relative;
}
/* 搜索框 */
.search-box input {
    cursor: text;
    width: 10rem;
    height: 2rem;
    color: #4e6e8e;
    display: inline-block;
    border: 1px solid #cfd4db;
    border-radius: 2rem;
    font-size: .9rem;
    line-height: 2rem;
    padding: 0 .5rem 0 2rem;
    outline: none;  /* 移除元素轮廓样式的属性 */
    transition: all .2s ease; /* 元素在属性变化时会以持续时间为 0.2 秒的动画方式平滑过渡到新的状态。 */
    background: #fff url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='13'%3E%3Cg stroke-width='2' stroke='%23aaa' fill='none'%3E%3Cpath d='M11.29 11.71l-4-4'/%3E%3Ccircle cx='5' cy='5' r='4'/%3E%3C/g%3E%3C/svg%3E") .6rem .5rem no-repeat; /* #fff 表示背景颜色为白色，url("") 表示一个搜索的背景图像，.6rem .5rem 表示背景图像的位置偏移为水平方向上 0.6rem、垂直方向上 0.5rem，no-repeat 表示不要重复平铺背景图像。 */
    background-size: 1rem; /*  背景图像的宽度和高度都被设置为 1rem。 */
}
</style>
