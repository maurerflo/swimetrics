<script setup lang="ts">
import Canvas from '../components/editor/Canvas.vue';
import Sidebar from '../components/editor/Sidebar.vue';

definePageMeta({
  layout: 'editor',
});
</script>

<template>
  <!-- Main Content -->
  <main class="flex flex-grow overflow-hidden">
    <!-- Left Sidebar -->
    <Sidebar class="flex flex-col"></Sidebar>

    <!-- Main Canvas Area -->
    <Canvas class="flex-grow relative"></Canvas>

    <!-- Right Attribute Bar -->
    <!--    <Attributebar class="flex flex-col w-64"></Attributebar>-->
  </main>
</template>

<style scoped></style>
