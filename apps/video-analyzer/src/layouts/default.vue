<script setup lang="ts"></script>

<template>
  <div class="flex flex-col h-screen">
    <AppHeader />
    <main class="flex-grow flex overflow-hidden">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<style scoped></style>
