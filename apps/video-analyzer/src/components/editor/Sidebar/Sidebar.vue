<template>
  <div class="flex h-screen">
    <!-- Main Sidebar -->
    <aside
      class="w-20 bg-gray-800 text-white flex flex-col items-center py-4 space-y-4"
    >
      <button
        v-for="(tool, index) in tools"
        :key="index"
        class="w-12 h-12 flex items-center justify-center rounded-lg hover:bg-gray-700"
        :class="{ 'bg-gray-700': activeTool === tool.name }"
        aria-label="Select Tool"
        @click="selectTool(tool.name)"
      >
        <span aria-hidden="true" class="text-2xl font-bold">{{
          tool.shortName
        }}</span>
      </button>
    </aside>

    <!-- Sub View Sidebar -->
    <aside class="w-64 bg-gray-900 text-white flex flex-col">
      <component :is="getComponent(activeTool)" v-if="activeTool" />
      <div v-else class="p-4">
        <p>Select a tool from the main sidebar to see options here.</p>
      </div>
    </aside>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import MediaBrowser from './MediaBrowser.vue';
import ObjectsBrowser from './ObjectsBrowser.vue';

// Define tools with short names and corresponding submenus
const tools = [
  {
    name: 'Media Browser',
    shortName: 'MB',
    subItems: ['Images', 'Videos', 'Documents'],
    component: MediaBrowser,
  },
  {
    name: 'Shapes',
    shortName: 'S',
    subItems: ['Profile', 'Preferences', 'Privacy'],
    component: ObjectsBrowser,
  },
];

const activeTool = ref(null);

// Function to select a tool
const selectTool = (toolName) => {
  activeTool.value = toolName;
};

const getComponent = (toolName) => {
  const tool = tools.find((t) => t.name === toolName);
  return tool?.component;
};
</script>

<style>
/* Additional styling */
</style>
