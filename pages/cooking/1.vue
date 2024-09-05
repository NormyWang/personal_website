<template>
    <div class="container mx-auto px-4 py-12">
      <h2 class="text-3xl font-bold mb-8">{{ recipe.name }}</h2>
      <img :src="recipe.image" :alt="recipe.name" class="w-full max-w-2xl mx-auto mb-8 rounded-lg shadow-md">
      <div class="max-w-2xl mx-auto">
        <p class="mb-4">{{ recipe.description }}</p>
        <h3 class="text-2xl font-semibold mb-4">Ingredients</h3>
        <ul class="list-disc list-inside mb-6">
          <li v-for="ingredient in recipe.ingredients" :key="ingredient">{{ ingredient }}</li>
        </ul>
        <h3 class="text-2xl font-semibold mb-4">Instructions</h3>
        <ol class="list-decimal list-inside">
          <li v-for="(step, index) in recipe.instructions" :key="index" class="mb-2">{{ step }}</li>
        </ol>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  const recipeId = parseInt(route.params.id);
  
  // This is a mock-up. In a real application, you would fetch this data from an API or database
  const recipe = ref({
    id: recipeId,
    name: 'Sichuan Mapo Tofu',
    description: 'A spicy and flavorful tofu dish from Sichuan cuisine.',
    image: '/cooking/mapo-tofu.jpg',
    ingredients: [
      '400g soft tofu',
      '100g ground pork',
      '2 tbsp Sichuan peppercorns',
      '4 tbsp chili oil',
      '2 cloves of garlic, minced',
      '1 tbsp ginger, minced',
      '2 tbsp doubanjiang (spicy fermented bean paste)',
      '1 tbsp soy sauce',
      '1 tsp sugar',
      '2 green onions, chopped'
    ],
    instructions: [
      'Cut tofu into 1-inch cubes and set aside.',
      'Heat chili oil in a wok over medium heat. Add Sichuan peppercorns and fry until fragrant.',
      'Add minced garlic and ginger, stir-fry for 30 seconds.',
      'Add ground pork and cook until browned.',
      'Stir in doubanjiang and cook for another minute.',
      'Add soy sauce, sugar, and 1/2 cup of water. Bring to a simmer.',
      'Gently add tofu cubes and simmer for 5 minutes.',
      'Thicken the sauce with a cornstarch slurry if desired.',
      'Garnish with chopped green onions and serve hot with rice.'
    ]
  });
  </script>