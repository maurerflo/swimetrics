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

<template>
  <header class="h-12 bg-gray-800 flex items-center px-4 shadow-md">
    <h1 class="text-lg font-semibold">
      Video Editor
    </h1>
    <div class="toolbar">
      <button
        v-for="tool in tools"
        :key="tool.name"
        @click="tool.action"
        class="p-2 rounded hover:bg-gray-100"
      >
        {{ tool.name }}
      </button>
    </div>
  </header>
</template>

<style scoped></style>
