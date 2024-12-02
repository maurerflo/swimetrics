<template>
  <div
    v-if="selectedObject"
    class="attribute-bar p-4 bg-gray-200 rounded shadow"
  >
    <h3 class="font-bold mb-2">Selected Object Details</h3>
    <ul>
      <li><strong>Type:</strong> {{ selectedObject.type }}</li>
      <li><strong>Left:</strong> {{ selectedObject.left }}</li>
      <li><strong>Top:</strong> {{ selectedObject.top }}</li>
      <li><strong>Width:</strong> {{ selectedObject.width }}</li>
      <li><strong>Height:</strong> {{ selectedObject.height }}</li>

      {{
        JSON.stringify(selectedObject)
      }}
    </ul>
    <div class="mt-4">
      <label class="block mb-1">Color:</label>
      <input
        type="color"
        v-model="fillColor"
        @input="updateObjectFill"
        class="w-full border rounded"
      />
    </div>
  </div>
  <div v-else class="attribute-bar p-4 bg-gray-200 rounded shadow">
    <p>No object selected</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useEditorStore } from '../../stores/editor';

const editorStore = useEditorStore();
const selectedObject = computed(() => editorStore.selectedObject);

// // Reactive state for color input
// const fillColor = ref(selectedObject.value?.fill || '#000000');
//
// // Update the fill color of the selected object
// const updateObjectFill = () => {
//   if (selectedObject.value) {
//     selectedObject.value.set('fill', fillColor.value);
//     editorStore.updateCanvas();
//   }
// };
</script>

<style scoped>
.attribute-bar {
  max-width: 300px;
}
</style>
