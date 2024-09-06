<template>
  <footer class="bg-gray-800 text-white">
    <div class="container mx-auto px-4 py-8">
      <div class="text-center mb-4">
        <p class="italic">"From lab bench to keyboard, every day is a new learning opportunity."</p>
      </div>
      <div class="flex justify-center space-x-4 mb-4">
        <NuxtLink to="/about" class="hover:text-indigo-300">About</NuxtLink>
        <NuxtLink to="/projects" class="hover:text-indigo-300">Projects</NuxtLink>
        <NuxtLink to="/cooking" class="hover:text-indigo-300">Cooking</NuxtLink>
        <NuxtLink to="/germany" class="hover:text-indigo-300">Living in Germany</NuxtLink>
      </div>
     
      <div class="mt-8 text-center text-sm">
        <p>&copy; {{ new Date().getFullYear() }} Normy Wang. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No additional script needed for this component
</script>