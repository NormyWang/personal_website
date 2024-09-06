<template>
  <div class="about-me">
    
    <div class="hero-section" id="About">
      <div class="container mx-auto px-4 flex items-center">
        <img src="/my-picture.jpg" alt="Normy Wang" class="rounded-full w-32 h-32 mr-8">
        <div>
          <h1 class="text-4xl font-bold text-indigo-900 mb-2">Normy Wang</h1>
          <p class="text-lg text-indigo-700 mb-4">Pharma & Biotech Professional, Aspiring Coder and AI Enthusiast, Culinary Explorer</p>
          <p class="text-md text-indigo-600 max-w-2xl">Bridging the gap between bioprocess engineering and modern programming techniques to drive innovation in sustainable technologies.</p>
        </div>
      </div>
    </div>
    
    <div class="max-w-4xl mx-auto p-6">
      <section id="Background" class="mb-12 bg-white bg-opacity-75 rounded-lg shadow-lg p-8 transition-all hover:shadow-xl">
        <h2 class="text-2xl font-semibold mb-4 text-indigo-700 border-b pb-2">Background</h2>
        <p class="mb-6 text-gray-700 leading-relaxed">
          As a chemical engineer specializing in bioprocess engineering, I've contributed to groundbreaking research in sustainable biofuel production. My experience spans from advanced laboratory techniques to complex data analysis. Currently, I'm leveraging my analytical mindset to explore the intersection of chemical engineering and modern programming, with a focus on applying AI techniques to optimize bioprocesses.
        </p>
      </section>
      
      <div class="grid gap-8 md:grid-cols-2">
        <section id="Education" class="bg-white rounded-lg shadow-lg p-8 transition-all hover:shadow-xl">
          <h2 class="text-2xl font-semibold mb-4 text-indigo-700 border-b pb-2">Education</h2>
          <ul class="space-y-4">
            <li v-for="(degree, index) in education" :key="index" 
                class="p-4 bg-indigo-50 rounded-md transition-all hover:bg-indigo-100 relative pl-8">
              <div class="absolute left-0 top-0 bottom-0 w-1 bg-indigo-300 rounded-full"></div>
              <p class="font-semibold">{{ degree.title }}</p>
              <p class="text-sm text-gray-600">{{ degree.institution }}</p>
              <p class="text-xs text-gray-500">{{ degree.year }}</p>
            </li>
          </ul>
        </section>
        
        <section id="Skills" class="bg-white rounded-lg shadow-lg p-8 transition-all hover:shadow-xl">
          <h2 class="text-2xl font-semibold mb-4 text-indigo-700 border-b pb-2">Skills</h2>
          <div class="grid grid-cols-2 gap-4">
            <div v-for="skill in skills" :key="skill.name" class="skill-item">
              <div class="relative pt-1">
                <div class="flex mb-2 items-center justify-between">
                  <div>
                    <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-indigo-600 bg-indigo-200">
                      {{ skill.icon }} {{ skill.name }}
                    </span>
                  </div>
                </div>
                <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-200">
                  <div :style="{ width: `${skill.level}%` }" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <section id="Experience" class="my-12 bg-white rounded-lg shadow-lg p-8 transition-all hover:shadow-xl">
        <h2 class="text-2xl font-semibold mb-4 text-indigo-700 border-b pb-2">Working Experience</h2>
        <div v-for="job in workExperience" :key="job.title" class="mb-6 p-4 bg-gray-50 rounded-lg transition-all hover:bg-gray-100">
          <h3 class="text-xl font-medium text-indigo-600">{{ job.title }}</h3>
          <p class="text-sm text-gray-600">{{ job.company }} | {{ job.period }}</p>
          <ul class="list-disc list-inside mt-2 text-gray-700">
            <li v-for="responsibility in job.responsibilities" :key="responsibility">{{ responsibility }}</li>
          </ul>
        </div>
      </section>

      <section id="Interests" class="bg-white rounded-lg shadow-lg p-8 transition-all hover:shadow-xl">
        <h2 class="text-2xl font-semibold mb-4 text-indigo-700 border-b pb-2">Professional Interests</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div v-for="interest in professionalInterests" :key="interest.name" 
              class="p-4 bg-indigo-50 rounded-md transition-all hover:bg-indigo-100 hover:transform hover:scale-105">
            <h3 class="flex items-center text-lg font-medium text-indigo-600 mb-2">
              <span class="text-2xl mr-3">{{ interest.icon }}</span>
              {{ interest.name }}
            </h3>
            <p class="text-gray-700">{{ interest.description }}</p>
          </div>
        </div>
      </section>

      <section id="Future" class="mt-12 bg-white rounded-lg shadow-lg p-8 transition-all hover:shadow-xl">
        <h2 class="text-2xl font-semibold mb-4 text-indigo-700 border-b pb-2">Future Goals</h2>
        <p class="text-gray-700 leading-relaxed">
          My aim is to further integrate AI and machine learning techniques into bioprocess engineering, 
          focusing on developing predictive models for process optimization. I'm also keen on exploring 
          the potential of synthetic biology in creating sustainable alternatives to traditional chemical processes.
        </p>
      </section>
    </div>
    
    <footer class="mt-12 py-8 bg-white bg-opacity-75 backdrop-filter backdrop-blur-sm">
      <div class="max-w-4xl mx-auto px-6 flex justify-center space-x-6">
        <a v-for="link in socialLinks" :key="link.name" :href="link.url" target="_blank" rel="noopener noreferrer" 
           class="text-indigo-600 hover:text-indigo-800 transition-colors">
          <span class="sr-only">{{ link.name }}</span>
          <span class="text-2xl">{{ link.icon }}</span>
        </a>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const sections = ['About', 'Background', 'Education', 'Skills', 'Experience', 'Interests', 'Future']

const education = ref([
  { 
    title: 'MSc in Chemical Energy & Engineering',
    institution: 'OVGU - Die Otto-von-Guericke-Universität Magdeburg',
    year: '2020 - 2022'
  },
  { 
    title: 'BSc in Pharmaceutical Engineering',
    institution: 'Southeast University Chengxian College',
    year: '2015 - 2019'
  }
])

const skills = ref([
  { name: 'Chemical Engineering', level: 80, icon: '🧪' },
  { name: 'Bioprocess Research', level: 90, icon: '🧬' },
  { name: 'Laboratory Techniques', level: 90, icon: '🔬' },
  { name: 'Prompt Engineering', level: 80, icon: '📝' },
  { name: 'Programming', level: 50, icon: '💻' },
])

const workExperience = ref([
  {
    title: 'Research Assistant',
    company: 'Bioprocess Engineering Lab, OVGU',
    period: 'Jan 2021 - Present',
    responsibilities: [
      'Conduct experiments on sustainable biofuel production',
      'Analyze and interpret complex datasets using Python',
      'Collaborate with interdisciplinary teams on cutting-edge research projects'
    ]
  },
  // Add more work experiences as needed
])

const professionalInterests = ref([
  { 
    name: 'Bioprocess Engineering',
    icon: '🧫',
    description: 'Optimizing bioprocesses for sustainable production of chemicals and materials.'
  },
  { 
    name: 'Programming in Research',
    icon: '👨‍💻',
    description: 'Leveraging programming skills to enhance data analysis and automation in scientific research.'
  },
  { 
    name: 'AI Applications',
    icon: '🤖',
    description: 'Exploring AI potential in various fields of chemical engineering and bioprocessing.'
  },
])

const socialLinks = ref([
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/qing-wang-02aa77140/', icon: '🔗' },
  { name: 'GitHub', url: 'https://github.com/NormyWang', icon: '🐙' },
  { name: 'ORCID', url: 'https://orcid.org/your-orcid-id', icon: '🆔' },
  { name: 'Twitter', url: 'https://twitter.com/your-twitter-handle', icon: '🐦' },
])
</script>

<style scoped>
.about-me {
  @apply bg-gradient-to-b from-blue-100 to-purple-100 min-h-screen;
}

.hero-section {
  @apply bg-gradient-to-r from-blue-100 to-purple-100 py-16 mb-12;
}

.skill-item {
  @apply transition-all duration-300 ease-in-out;
}

.skill-item:hover .bg-indigo-500 {
  @apply bg-indigo-600;
}

.pattern-dots {
  background-image: radial-gradient(currentColor 1px, transparent 1px);
  background-size: calc(10 * 1px) calc(10 * 1px);
}

footer {
  box-shadow: 0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06);
}

section {
  @apply backdrop-filter backdrop-blur-sm transition-all duration-300;
}

section:hover {
  @apply bg-opacity-90;
}
</style>