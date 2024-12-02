<template>
  <div class="relative">
    <button
      @click="toggleZoomDropdown"
      class="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300 focus:outline-none"
    >
      Zoom: {{ (zoomLevel * 100).toFixed(0) }}%
    </button>
    <ul
      v-if="isZoomDropdownVisible"
      class="absolute top-full left-0 bg-white border rounded mt-1 shadow-md"
    >
      <li
        v-for="level in zoomLevels"
        :key="level"
        @click="setZoom(level)"
        class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
      >
        {{ level }}%
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useEditorStore } from '../../stores/editor';

const editorStore = useEditorStore();
const zoomLevels = [50, 75, 100, 125, 150, 200];
const isZoomDropdownVisible = ref(false);

const zoomLevel = computed(() => editorStore.zoomLevel);

const toggleZoomDropdown = () => {
  isZoomDropdownVisible.value = !isZoomDropdownVisible.value;
};

const setZoom = (level: number) => {
  const zoomFactor = level / 100;
  editorStore.setZoom(zoomFactor);
  isZoomDropdownVisible.value = false;
};
</script>

<style scoped>
/* Style for dropdown */
</style>
