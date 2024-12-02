<template>
  <div>
    <!-- Search Bar -->
    <div class="flex items-center mb-4">
      <input
        type="text"
        placeholder="Search..."
        class="flex-1 px-3 py-2 rounded bg-gray-800 text-white border border-gray-700"
      />
      <button class="bg-blue-500 text-white px-4 py-2 rounded ml-2 hover:bg-blue-600">
        Go
      </button>
    </div>

    <!-- Shapes Section -->
    <h3 class="text-lg font-bold mb-2">Shapes</h3>
    <div class="grid grid-cols-5 gap-2 mb-4">
      <button v-for="shape in shapes" :key="shape" class="bg-gray-800 p-4 rounded">
        <span>{{ shape }}</span>
      </button>
    </div>

    <!-- Emojis Section -->
    <h3 class="text-lg font-bold mb-2">Emojis</h3>
    <div class="grid grid-cols-6 gap-2">
      <button
        v-for="emoji in emojis"
        :key="emoji"
        class="bg-gray-800 p-2 rounded flex items-center justify-center text-xl"
      >
        {{ emoji }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const shapes = ['⬜', '⬤', '🔺', '⭐', '❤️'];
const emojis = ['😀', '😂', '😍', '👍', '🔥', '💯', '🎉', '🌟', '🍕', '🏀'];
</script>
