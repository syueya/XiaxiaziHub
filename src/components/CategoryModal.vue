<template>
    <label>
      序号:
      <input type="text" v-model="no">
    </label>
    <label>
      名称:
      <input type="text" v-model="name">
    </label>
    <label>
      图标:
      <input type="text" v-model="icon">
    </label>
  </template>
  
<script setup lang="ts">

    import { ref, watch } from 'vue';

    const props = defineProps({
        name: String,
        icon: String,
        no: String
    });

    const name = ref(props.name);
    const icon = ref(props.icon);
    const no = ref(props.no);

    const emit = defineEmits(['update:name', 'update:icon', 'update:no']);

    // 监听输入框的变化并同步到props
    watch(name, (newValue) => emit('update:name', newValue));
    watch(icon, (newValue) => emit('update:icon', newValue));
    watch(no, (newValue) => emit('update:no', newValue));


</script>