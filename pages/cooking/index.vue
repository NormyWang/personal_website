<template>
    <RecipesSection :recipes="recipes" />
</template>

<script setup>
import { ref } from 'vue';
import RecipesSection from '~/components/RecipesSection.vue';

const recipes = ref([
  { id: 'cranberry-cookies', name: 'Cranberry Cookies', description: 'Delicious homemade cookies with cranberries and white chocolate chips', image: '/cranberry-cookies.jpeg' },
  { id: 'oven-roasted-chicken', name: 'Ofengeröstetes Hähnchen', description: 'Saftiges Hähnchen mit Paprika, Kartoffeln und Lauch aus dem Ofen', image: '/oven-roasted-chicken.jpeg' },
]);
</script>