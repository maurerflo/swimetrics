<template>
  <div ref="containerRef" class="w-full h-full bg-gray-700 relative">
    <canvas ref="canvasRef" class="w-full h-full absolute top-0 left-0" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { useResizeObserver } from '@vueuse/core';
import { useEditorStore } from '../../stores/editor';

const containerRef = ref(null);
const canvasRef = ref(null);
const editorStore = useEditorStore();

const resizeCanvas = () => {
  if (containerRef.value) {
    const { clientWidth, clientHeight } = containerRef.value;
    editorStore.resizeCanvas(clientWidth, clientHeight);
  }
};

onMounted(() => {
  if (canvasRef.value && containerRef.value) {
    editorStore.initializeCanvas(canvasRef.value, {
      width: containerRef.value.clientWidth,
      height: containerRef.value.clientHeight,
      backgroundColor: '#f3f4f6',
    });

    // Observe container resizing
    useResizeObserver(containerRef, resizeCanvas);
  }
});

onUnmounted(() => {
  editorStore.disposeCanvas();
});
</script>
