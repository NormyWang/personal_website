<template>
  <footer class="bg-gray-800 text-white">
    <div class="container mx-auto px-4 py-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-lg font-semibold mb-4">About Me</h3>
          <p class="text-sm">Chemical engineer turned informatics enthusiast. Sharing my journey through code, cuisine, and culture.</p>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li><NuxtLink to="/" class="text-sm hover:text-indigo-300">Home</NuxtLink></li>
            <li><NuxtLink to="/about" class="text-sm hover:text-indigo-300">About</NuxtLink></li>
            <li><NuxtLink to="/projects" class="text-sm hover:text-indigo-300">Projects</NuxtLink></li>
            <li><NuxtLink to="/recipes" class="text-sm hover:text-indigo-300">Recipes</NuxtLink></li>
            <li><NuxtLink to="/travel" class="text-sm hover:text-indigo-300">Travel</NuxtLink></li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-4">Connect</h3>
          <div class="flex space-x-4">
            <a href="#" class="text-2xl hover:text-indigo-300"><i class="fab fa-facebook"></i></a>
            <a href="#" class="text-2xl hover:text-indigo-300"><i class="fab fa-instagram"></i></a>
            <a href="#" class="text-2xl hover:text-indigo-300"><i class="fab fa-linkedin"></i></a>
          </div>
        </div>
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