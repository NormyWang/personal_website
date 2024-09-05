<template>
  <div class="container mx-auto px-4 py-12">
    <h1 class="text-3xl font-bold mb-8">My Favorite Recipes</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="recipe in recipes" :key="recipe.id" class="bg-white shadow-md rounded-lg overflow-hidden">
        <img :src="recipe.image" :alt="recipe.name" class="w-full h-48 object-cover">
        <div class="p-6">
          <h2 class="text-xl font-semibold mb-2">{{ recipe.name }}</h2>
          <p class="text-gray-600 mb-4">{{ recipe.description }}</p>
          <NuxtLink :to="`/cooking/${recipe.id}`" class="text-indigo-600 hover:text-indigo-800">View Recipe</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const recipes = ref([
  { id: 1, name: 'Kung Pao Chicken', description: 'A spicy, stir-fried Chinese dish made with diced chicken, peanuts, vegetables, and chili peppers.', image: '/cooking/kung-pao-chicken.jpg' },
  { id: 2, name: 'Sushi Rolls', description: 'Delicious Japanese dish consisting of rolled vinegared rice combined with various ingredients such as raw fish and vegetables.', image: '/cooking/sushi-rolls.jpg' },
  // Add more recipes as needed
]);
</script>