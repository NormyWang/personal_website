<template>
  <div class="recipes-section">
    <!-- Header Section -->
    <section class="py-20 bg-gradient-to-r from-blue-100 to-purple-100">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4 text-indigo-900">My Favorite Recipes</h1>
        <p class="text-xl md:text-2xl text-indigo-800">Exploring Culinary Delights from Around the World</p>
      </div>
    </section>

    <!-- Recipes List -->
    <section class="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="recipe in recipes" :key="recipe.id" class="bg-white shadow-md rounded-lg overflow-hidden">
            <img :src="recipe.image" :alt="recipe.name" class="w-full h-48 object-cover">
            <div class="p-6">
              <h2 class="text-xl font-semibold mb-2 text-indigo-800">{{ recipe.name }}</h2>
              <p class="text-indigo-600 mb-4">{{ recipe.description }}</p>
              <NuxtLink :to="`/cooking/${recipe.id}`" class="text-indigo-600 hover:text-indigo-800">
                View Recipe &rarr;
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
defineProps({
  recipes: {
    type: Array,
    required: true
  }
});
</script>