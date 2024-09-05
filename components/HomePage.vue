<template>
    <div class="container mx-auto px-4 py-12">
      <div class="max-w-4xl mx-auto">
        <div class="flex flex-col md:flex-row items-center mb-8">
          <img 
            src="/profile-picture.jpeg" 
            alt="Your Name" 
            class="profile-image rounded-full object-cover shadow-lg mb-4 md:mb-0 md:mr-6"
          >
          <div class="text-center md:text-left">
            <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">Welcome to Your Name's World</h1>
            <p class="text-lg md:text-xl mb-4">Chemical Engineer | Informatics Enthusiast | Food Lover | Traveler</p>
          </div>
        </div>
        <div class="text-center md:text-left">
          <p class="text-base lg:text-lg mb-6">
            Hello! I'm a chemical engineer with a passion for informatics, cooking, and exploring the world. 
            Join me as I share my journey through code, cuisine, and culture.
          </p>
          <div class="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <NuxtLink to="/about" class="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition duration-300 text-sm md:text-base">About Me</NuxtLink>
            <NuxtLink to="/projects" class="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition duration-300 text-sm md:text-base">My Projects</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  // No additional script needed for this component
  </script>
  
  <style scoped>
  .profile-image {
    width: 80px;
    height: 80px;
    max-width: 80px;
    max-height: 80px;
  }
  
  @media (min-width: 768px) {
    .profile-image {
      width: 100px;
      height: 100px;
      max-width: 100px;
      max-height: 100px;
    }
  }
  </style>