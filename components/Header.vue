<template>
  <nav class="bg-white shadow-md fixed top-0 left-0 right-0 z-50 h-auto min-h-[var(--header-height)]">
    <div class="container mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center">
      <div class="flex items-center mb-3 sm:mb-0">
        <img src="/profile-picture.jpeg" alt="Normy Wang" class="w-10 h-10 rounded-full mr-3">
        <span class="text-xl font-semibold text-gray-800">Normy Wang</span>
      </div>
      <div class="flex flex-wrap justify-center gap-4">
        <NuxtLink v-for="(link, name) in navLinks" :key="name" :to="link" class="text-gray-600 hover:text-indigo-600">
          {{ name }}
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const navLinks = ref({
  Home: '/',
  About: '/about',
  Projects: '/projects',
  Cooking: '/cooking',
  'Living in Germany': '/germany',
  FAQ: '/FAQ'
})
</script>

<style>
:root {
  --header-height: 4rem; /* Adjust this value based on your header's actual height */
}

@media (max-width: 640px) {
  :root {
    --header-height: auto;
  }
}
</style>