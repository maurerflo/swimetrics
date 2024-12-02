<template>
  <div class="timeline bg-gray-900 text-white p-4 rounded shadow-md w-full max-w-full mx-auto">
    <!-- Layers and Timeline -->
    <div class="flex">
      <!-- Layers Section -->
      <div class="layers bg-gray-800 w-1/4 p-2 rounded-l">
        <h3 class="text-sm font-bold mb-4">LAYERS</h3>
        <div v-for="layer in layers" :key="layer.id" class="layer-item mb-2 flex items-center">
          <div class="w-6 h-6 bg-blue-500 rounded mr-2"></div>
          <span class="text-sm font-medium">{{ layer.name }}</span>
        </div>
      </div>

      <!-- Timeline Grid -->
      <div class="timeline-grid flex-1 bg-gray-700 p-4 rounded-r relative overflow-x-scroll">
        <!-- Time Indicators -->
        <div class="time-indicators flex mb-2">
          <div
            v-for="time in timelineDuration"
            :key="time"
            class="text-xs text-gray-400 w-20 text-center"
          >
            {{ time }}s
          </div>
        </div>

        <!-- Layers Timeline -->
        <div v-for="layer in layers" :key="layer.id" class="layer-row flex items-center relative h-10">
          <div
            class="layer-bar bg-lime-500 h-full rounded absolute cursor-grab"
            :style="{ left: `${layer.startTime * 10}px`, width: `${(layer.endTime - layer.startTime) * 10}px` }"
            draggable="true"
            @dragstart="startDrag(layer, $event)"
            @dragend="endDrag(layer, $event)"
          ></div>
        </div>

        <!-- Playback Pointer -->
        <div
          class="playback-pointer w-0.5 h-full bg-gray-300 absolute"
          :style="{ left: `${currentTime * 10}px` }"
        ></div>
      </div>
    </div>

    <!-- Playback Controls -->
    <div class="playback-controls flex items-center justify-between mt-4">
      <!-- Slider -->
      <div class="flex items-center space-x-2">
        <div class="text-sm"><i class="fa-solid fa-mountain"></i></div>
        <input
          type="range"
          min="0"
          :max="timelineDuration.length"
          step="0.1"
          v-model="currentTime"
          class="w-64"
        />
        <div class="text-sm"><i class="fa-solid fa-mountain"></i></div>
      </div>

      <!-- Speed Control -->
      <div class="text-sm">
        <span class="text-gray-400">Speed:</span>
        <select v-model="playbackSpeed" class="bg-gray-800 border border-gray-700 rounded text-sm text-white">
          <option value="0.5">0.5x</option>
          <option value="1">1x</option>
          <option value="1.5">1.5x</option>
          <option value="2">2x</option>
        </select>
      </div>

      <!-- Time Display -->
      <div class="text-sm flex items-center space-x-4">
        <span>{{ formatTime(currentTime) }}</span>
        <button @click="togglePlayback" class="bg-blue-500 text-white px-3 py-1 rounded">
          <i v-if="!isPlaying" class="fa-solid fa-play"></i>
          <i v-else class="fa-solid fa-pause"></i>
        </button>
        <span>{{ formatTime(timelineDuration.length) }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Timeline Data
const timelineDuration = Array.from({ length: 11 }, (_, i) => i); // 0 to 10 seconds
const layers = ref([
  { id: 1, name: 'Image1', startTime: 0, endTime: 5 },
]);

// Playback State
const currentTime = ref(0);
const isPlaying = ref(false);
const playbackSpeed = ref(1);
let playbackInterval: number | null = null;

// Add drag functionality
const startDrag = (layer: any, event: DragEvent) => {
  event.dataTransfer?.setData('layer-id', layer.id.toString());
};

const endDrag = (layer: any, event: DragEvent) => {
  const layerId = parseInt(event.dataTransfer?.getData('layer-id') || '0', 10);
  const draggedLayer = layers.value.find((l) => l.id === layerId);

  if (draggedLayer) {
    const newStartTime = Math.max(0, Math.round(event.offsetX / 10));
    const duration = draggedLayer.endTime - draggedLayer.startTime;
    draggedLayer.startTime = newStartTime;
    draggedLayer.endTime = newStartTime + duration;
  }
};

// Playback Controls
const togglePlayback = () => {
  if (isPlaying.value) {
    isPlaying.value = false;
    if (playbackInterval) clearInterval(playbackInterval);
  } else {
    isPlaying.value = true;
    playbackInterval = setInterval(() => {
      if (currentTime.value < timelineDuration.length) {
        currentTime.value += 0.1 * playbackSpeed.value;
      } else {
        togglePlayback();
      }
    }, 100);
  }
};

// Format Time
const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};
</script>

<style scoped>
.timeline {
  width: 100%;
}

.layer-item {
  transition: background-color 0.2s ease-in-out;
}

.layer-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

input[type='range'] {
  appearance: none;
  width: 100%;
  background: transparent;
}

input[type='range']::-webkit-slider-thumb {
  appearance: none;
  width: 16px;
  height: 16px;
  background: #3b82f6;
  border-radius: 50%;
  cursor: pointer;
}

input[type='range']::-webkit-slider-runnable-track {
  height: 4px;
  background: #9ca3af;
  border-radius: 10px;
}
</style>
