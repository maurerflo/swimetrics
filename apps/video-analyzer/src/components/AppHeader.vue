<script setup lang="ts">
import { ref } from 'vue';

// State for mobile menu
const isMenuExpanded = ref(false);

// Toggle menu visibility
function toggleMenu() {
  isMenuExpanded.value = !isMenuExpanded.value;
}
</script>

<template>
  <header
    class="absolute inset-x-0 top-0 z-10 py-4 bg-white md:bg-transparent sm:py-5"
  >
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <nav class="flex items-center justify-between">
        <div class="flex shrink-0">
          <a href="#" title="" class="flex">
            <img
              class="w-auto h-8"
              src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/logo.svg"
              alt=""
            />
          </a>
        </div>

        <div class="flex lg:hidden">
          <button
            type="button"
            class="text-gray-900"
            :aria-expanded="isMenuExpanded"
            @click="toggleMenu"
          >
            <span v-if="!isMenuExpanded" aria-hidden="true">
              <svg
                class="w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </span>

            <span v-if="isMenuExpanded" aria-hidden="true">
              <svg
                class="w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
          </button>
        </div>

        <div
          class="hidden lg:flex lg:items-center lg:justify-start lg:ml-16 lg:mr-auto lg:space-x-10"
        >
          <a
            href="#"
            title=""
            class="text-base font-medium text-gray-900 transition-all duration-200 hover:text-indigo-600"
          >
            Features
          </a>

          <a
            href="#"
            title=""
            class="text-base font-medium text-gray-900 transition-all duration-200 hover:text-indigo-600"
          >
            Pricing
          </a>

          <a
            href="#"
            title=""
            class="text-base font-medium text-gray-900 transition-all duration-200 hover:text-indigo-600"
          >
            Support
          </a>
        </div>

        <div class="hidden lg:flex">
          <NuxtLink
            top-0=""
            title=""
            class="inline-flex items-center justify-center px-6 py-2 sm:py-2.5 text-base font-semibold text-white transition-all duration-200 bg-gray-900 rounded-lg sm:text-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            role="button"
          >
            Login
          </NuxtLink>
        </div>
      </nav>

      <nav v-if="isMenuExpanded" class="md:hide">
        <div class="px-1 pt-8 pb-4">
          <div class="grid gap-y-6">
            <a
              href="#"
              title=""
              class="flex items-center text-base font-medium text-gray-900 transition-all duration-200 focus:outline-none focus:ring-0"
            >
              Features
            </a>

            <a
              href="#"
              title=""
              class="flex items-center text-base font-medium text-gray-900 transition-all duration-200 focus:outline-none focus:ring-0"
            >
              Pricing
            </a>

            <a
              href="#"
              title=""
              class="flex items-center text-base font-medium text-gray-900 transition-all duration-200 focus:outline-none focus:ring-0"
            >
              Support
            </a>

            <a
              href="#"
              title=""
              class="inline-flex items-center justify-center px-6 py-2 text-base font-semibold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-lg hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              role="button"
            >
              Get Design Inspiration
            </a>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped></style>
