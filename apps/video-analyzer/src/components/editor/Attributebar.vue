<template>
  <div
    :class="[
      'bg-gray-800 transition-all duration-300 h-screen',
      isCollapsed ? 'hidden' : 'block']"
  >
    <!-- Sidebar -->
    <div
      :class="[
        'bg-gray-800 text-white transition-all duration-300',
        isCollapsed ? 'w-16' : 'w-64',
      ]"
      class="h-full flex flex-col"
    >
      <button
        class="p-4 focus:outline-none hover:bg-gray-700 transition-colors"
        @click="toggleSidebar"
      >
        <span v-if="isCollapsed">☰</span>
        <span v-else>Collapse</span>
      </button>

      <!-- Sidebar Content -->
      <nav class="flex-1">
        <ul>
          <li
            v-for="item in menuItems"
            :key="item.label"
            class="p-4 hover:bg-gray-700 transition-colors cursor-pointer"
          >
            <span v-if="isCollapsed">{{ item.icon }}</span>
            <span v-else>{{ item.label }}</span>
          </li>
        </ul>
      </nav>
    </div>

    <!-- Main Content -->
    <div class="flex-1 bg-gray-100 p-6">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isCollapsed = ref(false);

const toggleSidebar = () => {
  isCollapsed.value = !isCollapsed.value;
};

const menuItems = [
  { label: 'Dashboard', icon: '📊' },
  { label: 'Shapes', icon: '🔳' },
  { label: 'Videos', icon: '🎥' },
  { label: 'Settings', icon: '⚙️' },
];
</script>

<style scoped></style>
