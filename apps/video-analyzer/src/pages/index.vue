<template>
  <main>
    <section
      class="relative pb-12 bg-white pt-28 sm:pb-16 sm:pt-32 lg:pb-20 xl:pt-48 xl:pb-32">
      <div class="absolute inset-0">
        <img
          class="hidden object-cover w-full h-full md:block"
          src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/2/background.png"
          alt=""
        />
      </div>

      <div class="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="flex">
          <div class="w-full md:max-w-xs lg:max-w-md">
            <h1 class="text-4xl font-bold text-gray-900 sm:text-5xl">
              Some marketing blah blah and so on and so forth
            </h1>
            <p class="mt-5 text-base font-normal leading-7 text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula
              massa in enim luctus. Rutrum arcu.
            </p>

            <p class="mt-10 text-base font-bold text-gray-900">
              Join the email list to:
            </p>
            <ul class="mt-4 space-y-4">
              <li class="flex items-center">
                <span class="text-base"> 💸 </span>
                <span class="flex-1 text-base font-medium text-gray-900 ml-2.5">
                  Get 10 Web & Mobile UI Inspirations Every Week
                </span>
              </li>

              <li class="flex items-center">
                <span class="text-base"> 🎁 </span>
                <span class="flex-1 text-base font-medium text-gray-900 ml-2.5">
                  Exclusive Discount on Design Resources
                </span>
              </li>

              <li class="flex items-center">
                <span class="text-base"> ⌛️ </span>
                <span class="flex-1 text-base font-medium text-gray-900 ml-2.5">
                  3 Random Subscriber will Get Featured on Emails
                </span>
              </li>
            </ul>

            <div class="relative inline-flex mt-10 group">
              <div
                class="absolute transitiona-all duration-1000 opacity-70 inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"
              ></div>

              <a
                href="#"
                title=""
                class="relative inline-flex items-center justify-center px-6 py-3 text-base font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button"
              >
                Join Newsletter For Free
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-12 md:hidden sm:mt-16">
        <img
          class="object-cover w-full h-full"
          src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/2/background-mobile.png"
          alt=""
        />
      </div>
    </section>
  </main>
</template>
<script setup lang="ts"></script>
<style scoped></style>
