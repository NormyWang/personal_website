<template>
  <div class="container mx-auto px-4 py-12">
    <h2 class="text-3xl font-bold mb-8">My Favorite Recipes</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="recipe in recipes" :key="recipe.id" class="bg-white shadow-md rounded-lg overflow-hidden">
        <img :src="recipe.image" :alt="recipe.name" class="w-full h-48 object-cover">
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-2">{{ recipe.name }}</h3>
          <p class="text-gray-600 mb-4">{{ recipe.description }}</p>
          <NuxtLink :to="`/cooking/${recipe.id}`" class="text-indigo-600 hover:text-indigo-800">View Recipe</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const recipes = ref([
  {
    id: 1,
    name: 'Sichuan Mapo Tofu',
    description: 'A spicy and flavorful tofu dish from Sichuan cuisine.',
    image: '/cooking/mapo-tofu.jpg'
  },
  {
    id: 2,
    name: 'Cantonese Steamed Fish',
    description: 'A light and healthy steamed fish with ginger and scallions.',
    image: '/cooking/steamed-fish.jpg'
  },
  // Add more recipes as needed
]);
</script>