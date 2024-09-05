<template>
  <header class="bg-indigo-700 text-white">
    <div class="container mx-auto px-4 py-4 flex items-center justify-between">
      <div class="flex items-center space-x-4">
        <img src="/profile-picture.jpeg" alt="Normy Wang" class="h-10 w-10 rounded-full">
        <h1 class="text-xl font-semibold">Normy Wang</h1>
      </div>
      <nav class="hidden md:block">
        <ul class="flex space-x-6">
          <li><NuxtLink to="/" class="hover:text-indigo-200 transition duration-300">Home</NuxtLink></li>
          <li><NuxtLink to="/about" class="hover:text-indigo-200 transition duration-300">About</NuxtLink></li>
          <li><NuxtLink to="/projects" class="hover:text-indigo-200 transition duration-300">Projects</NuxtLink></li>
          <li><NuxtLink to="/cooking" class="hover:text-indigo-200 transition duration-300">Cooking</NuxtLink></li>
          <li><NuxtLink to="/germany" class="hover:text-indigo-200 transition duration-300">Living in Germany</NuxtLink></li>
          <li><NuxtLink to="/contact" class="hover:text-indigo-200 transition duration-300">Contact</NuxtLink></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
// No additional script needed for this component
</script>