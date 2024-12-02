<template>
  <div
    v-if="selectedObject"
    class="bg-gray-900 text-white"
  >
    <h3 class="font-bold mb-2">Selected Object Details</h3>
    <ul>
      <li><strong>Type:</strong> {{ selectedObject.type }}</li>
      <li><strong>Left:</strong> {{ selectedObject.left }}</li>
      <li><strong>Top:</strong> {{ selectedObject.top }}</li>
      <li><strong>Width:</strong> {{ selectedObject.width }}</li>
      <li><strong>Height:</strong> {{ selectedObject.height }}</li>

      {{
        JSON.stringify(selectedObject, null, 2)
      }}
    </ul>
  </div>
  <div v-else class="bg-gray-900 text-white">
    <p>No object selected</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useEditorStore } from '../../stores/editor';

const editorStore = useEditorStore();
const selectedObject = computed(() => editorStore.selectedObject);
</script>

<style scoped>

</style>
