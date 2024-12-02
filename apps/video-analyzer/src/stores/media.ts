import { defineStore } from 'pinia';

export const useMediaStore = defineStore('media', {
  state: () => ({
    mediaFiles: [] as { type: string; url: string }[], // Store media metadata
  }),

  actions: {
    addMediaFile(file: { type: string; url: string }) {
      this.mediaFiles.push(file);
    },

    removeMediaFile(url: string) {
      this.mediaFiles = this.mediaFiles.filter((file) => file.url !== url);
    },

    clearMediaFiles() {
      this.mediaFiles = [];
    },
  },

  getters: {
    allMediaFiles: (state) => state.mediaFiles,
    imageFiles: (state) => state.mediaFiles.filter((file) => file.type.startsWith('image/')),
    videoFiles: (state) => state.mediaFiles.filter((file) => file.type.startsWith('video/')),
  },
});
