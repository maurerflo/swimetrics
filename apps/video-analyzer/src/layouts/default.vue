<script setup lang="ts">
import AppHeader from '../components/AppHeader.vue';
</script>

<template>
  <div class="relative">
    <AppHeader />
    <slot/>
  </div>
</template>

<style scoped></style>
