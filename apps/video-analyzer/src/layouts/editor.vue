<template>
  <div class="flex flex-col w-screen h-screen bg-gray-900 text-white">
    <!-- Top Navigation (optional, if needed) -->
    <EditorHeader class="hidden md:block" />
    <!-- Main Content -->
    <slot />
  </div>
</template>

<script setup lang="ts">
import EditorHeader from '../components/editor/EditorHeader.vue';
</script>

<style scoped></style>
