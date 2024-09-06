<template>
  <div class="homepage">
    <!-- Hero Section -->
    <section class="hero relative py-20 flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100">
      <div class="relative z-10 text-center text-indigo-900 max-w-3xl mx-auto px-4">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Hi, I'm Normy Wang!</h1>
        <p class="text-xl md:text-2xl mb-8">Pharma & Biotech Professional, Aspiring Coder and AI Enthusiast,
          Culinary Explorer</p>
        <NuxtLink to="/about"
          class="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition duration-300">
          Discover My Journey</NuxtLink>
      </div>
    </section>

    <!-- Brief Intro Section -->
    <section id="about" class="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-bold mb-6 text-indigo-900">About Me</h2>
          <p class="text-lg mb-6 text-indigo-800">
            With a background in Pharmaceutical Engineering and Chemical Energy Engineering, I've worked
            across various facets of the pharma industries and biotech research institute. From study in germany,
            then virus production research, my journey has been diverse and exciting. Now, I'm exploring the world of
            coding and AI, bringing my scientific background to this new frontier. Based in Germany, I
            balance my professional growth with a passion for culinary adventures and cultural experiences.
          </p>
          <NuxtLink to="/about" class="text-indigo-600 hover:text-indigo-800">Read more about my journey
            &rarr;</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Highlighted Projects / Key Interests -->
    <section class="py-16 bg-gradient-to-r from-blue-100 to-purple-100">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">My Experience & Interests</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(project, index) in projects" :key="index" class="bg-white rounded-lg shadow-md p-6">
            <div class="text-4xl mb-4" v-html="project.icon"></div>
            <h3 class="text-xl font-semibold mb-2">{{ project.title }}</h3>
            <p class="text-gray-600 mb-4">{{ project.description }}</p>
            <NuxtLink :to="project.link" class="text-indigo-600 hover:text-indigo-800">Learn more &rarr;
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action / Get in Touch section removed -->
  </div>
</template>

<script setup>
import { ref } from 'vue'
// Remove Header import
// import Header from './Header.vue'

const projects = ref([
  { icon: '🧬', title: 'Pharma & Biotech Journey', description: 'My experience in pharmaceutical engineering and biotech research.', link: '/projects' },
  { icon: '💻', title: 'Exploring Code with AI', description: 'My adventure in learning programming with AI assistance.', link: '/projects' },
  { icon: '🍳', title: 'Culinary Explorations', description: 'Recipes and food experiences from around the world.', link: '/cooking' },
  { icon: '🇩🇪', title: 'Life in Germany', description: 'My experiences and observations living abroad.', link: '/germany' }
])

// Remove socialLinks and recentUpdates as they're no longer needed
// const socialLinks = ref({ ... })
// const recentUpdates = ref([ ... ])

// Remove getSocialIcon function if it's not used elsewhere
// const getSocialIcon = (name) => { ... }
</script>

<style scoped>
.hero {
  background-attachment: fixed;
}

/* Remove the background image styles as we're using gradients now */
</style>