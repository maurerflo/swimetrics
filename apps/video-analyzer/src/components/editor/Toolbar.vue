<template>
  <div class="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 p-4 flex items-center space-x-4">
    <button
      v-for="tool in tools"
      :key="tool.name"
      @click="tool.action"
      class="p-2 rounded hover:bg-gray-100"
    >
      {{ tool.name }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { useEditorStore } from '../../stores/editor'

const editorStore = useEditorStore()

const tools = [
  {
    name: 'Rectangle',
    action: () => editorStore.addShape('rectangle')
  },
  {
    name: 'Circle',
    action: () => editorStore.addShape('circle')
  },
  {
    name: 'Text',
    action: () => editorStore.addText()
  },
  {
    name: 'Delete',
    action: () => editorStore.deleteSelected()
  }
]
</script>
