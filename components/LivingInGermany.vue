<template>
  <div class="living-in-germany">
    <!-- Header Section -->
    <section class="py-20 bg-gradient-to-r from-blue-100 to-purple-100">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4 text-indigo-900">Living in Germany</h1>
        <p class="text-xl md:text-2xl text-indigo-800">My Journey and Experiences</p>
      </div>
    </section>

    <!-- Content Section -->
    <section class="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto grid gap-8">
          <!-- Teaching Section -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="p-6">
              <h2 class="text-2xl font-semibold mb-4 text-indigo-800">Teaching Experience</h2>
              <p class="text-indigo-700 mb-4">My journey as an educator in the German education system, including insights into teaching methods, cultural adaptations, and professional growth.</p>
              <NuxtLink 
                to="/germany/teaching" 
                class="inline-block bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-300"
              >
                Explore Teaching Journey
              </NuxtLink>
            </div>
          </div>

          <!-- Cooking Section -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="p-6">
              <h2 class="text-2xl font-semibold mb-4 text-indigo-800">German Cooking</h2>
              <p class="text-indigo-700 mb-4">Discover the rich culinary heritage of Germany through traditional recipes, modern interpretations, and my personal cooking adventures.</p>
              <NuxtLink 
                to="/germany/cooking" 
                class="inline-block bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-300"
              >
                Explore German Cuisine
              </NuxtLink>
            </div>
          </div>

          <!-- German Language Section -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="p-6">
              <h2 class="text-2xl font-semibold mb-4 text-indigo-800">German Language Journey</h2>
              <p class="text-indigo-700 mb-4">Follow my language learning path, from beginner to fluency, with practical tips, recommended resources, and real-world learning strategies.</p>
              <NuxtLink 
                to="/germany/german-language" 
                class="inline-block bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-300"
              >
                Start Language Journey
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Component logic using Composition API
</script>
