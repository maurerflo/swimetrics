<template>
  <div class="media-browser p-4 bg-gray-200 rounded shadow">
    <h3 class="font-bold mb-2">Media Browser</h3>
    <!-- Upload Section -->
    <input
      type="file"
      @change="handleFileUpload"
      accept="image/*,video/*"
      multiple
      class="mb-4 block w-full border rounded p-2"
    />
    <!-- Media List -->
    <div v-if="mediaFiles.length" class="media-list grid grid-cols-3 gap-4">
      <div
        v-for="(file, index) in mediaFiles"
        :key="index"
        class="media-item border rounded p-2 cursor-pointer hover:bg-gray-100"
        @click="addToCanvas(file)"
      >
        <template v-if="file.type.startsWith('image/')">
          <img :src="file.url" alt="Image" class="w-full h-auto" />
        </template>
        <template v-else-if="file.type.startsWith('video/')">
          <video :src="file.url" controls class="w-full h-auto"></video>
        </template>
      </div>
    </div>
    <p v-else>No media files uploaded</p>
  </div>
</template>

<script setup lang="ts">
import { useMediaStore } from '../../../stores/media';
import { useEditorStore } from '../../../stores/editor';

const mediaStore = useMediaStore();
const editorStore = useEditorStore();

const mediaFiles = mediaStore.allMediaFiles;

// Handle file uploads
const handleFileUpload = (event: Event) => {
  const files = (event.target as HTMLInputElement).files;
  if (files) {
    for (const file of Array.from(files)) {
      const url = URL.createObjectURL(file);
      mediaStore.addMediaFile({ type: file.type, url });
    }
  }
};

// Add selected media to the canvas
const addToCanvas = (file: { type: string; url: string }) => {
  if (file.type.startsWith('image/')) {
    console.log('Adding image to canvas:', file.url);
    editorStore.addImage(file.url);
  } else if (file.type.startsWith('video/')) {
    console.log('Adding video to canvas:', file.url);
    editorStore.addVideo(file.url);
  }
};
</script>

<style scoped>
.media-browser {
  max-width: 400px;
  max-height: 600px;
  overflow-y: auto;
}
.media-item img,
.media-item video {
  max-height: 100px;
  object-fit: cover;
}
</style>
