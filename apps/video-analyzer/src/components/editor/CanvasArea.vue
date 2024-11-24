<template>
  <div ref="canvasContainerRef" class="flex-grow bg-gray-100 w-full relative">
    <canvas id="editor-canvas" class="absolute top-0 left-0 w-full h-full" />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import useCanvas from '../../composable/useCanvas';

const canvasContainerRef = ref(null);
const { initCanvas } = useCanvas();

onMounted(() => {
  initCanvas();
});
</script>
