<template>
  <div class="flex w-full h-full">
    <CanvasArea class="basis-9/12	" />
    <Sidebar class="basis-3/12" />
  </div>
</template>
<script setup lang="ts">
import CanvasArea from '../components/editor/CanvasArea.vue';
import Sidebar from '../components/editor/Sidebar.vue';
</script>
