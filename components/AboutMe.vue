<template>
  <div class="about-me">
    
    <div class="hero-section" id="About">
      <div class="container mx-auto px-4 flex items-center">
        <img src="/my-picture.jpg" alt="Normy Wang" class="rounded-full w-32 h-32 mr-8">
        <div>
          <h1 class="text-4xl font-bold text-indigo-900 mb-2">Normy Wang</h1>
          <p class="text-lg text-indigo-700 mb-4">Biotech Professional, Aspiring Coder and AI Enthusiast</p>
          <p class="text-md text-indigo-600 max-w-2xl">Leveraging biotech expertise while learning coding and AI techniques to explore new possibilities in technology and digital solutions.</p>
        </div>
      </div>
    </div>
    
    <div class="max-w-4xl mx-auto p-6">
      <section id="Background" class="mb-12 bg-white bg-opacity-75 rounded-lg shadow-lg p-8 transition-all hover:shadow-xl">
        <h2 class="text-2xl font-semibold mb-4 text-indigo-700 border-b pb-2">Background</h2>
        <p class="mb-6 text-gray-700 leading-relaxed">
          With a background in Chemical Energy Engineering and experience in virus research, I'm now embarking on a journey into the world of coding and AI. My previous work at a Virus Research Institute provided me with hands-on experience in biotechnological processes, particularly in viral research and production methods.
        </p>
        <p class="mb-6 text-gray-700 leading-relaxed">
          Currently, I'm focusing on learning coding and exploring AI applications. I'm particularly interested in applying these new skills to create social media tools and build websites as a way to practice and develop my abilities. My goal is to gain proficiency in programming and AI, aiming to eventually bridge the gap between my biotech experience and the digital world.
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
            <li v-for="(responsibility, index) in job.responsibilities" :key="index" v-show="index < 3 || showAll[job.title]">
              {{ responsibility }}
            </li>
          </ul>
          <button v-if="job.responsibilities.length > 3" @click="toggleShowAll(job.title)" class="mt-2 text-indigo-600 hover:text-indigo-800">
            {{ showAll[job.title] ? 'Show less' : 'Show more' }}
          </button>
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
          My aim is to continue developing my skills in coding and AI applications. I'm particularly interested in gaining proficiency in programming languages and understanding how AI can be applied in various fields. By leveraging my background in biotech and building new expertise in programming and AI, I hope to eventually contribute to innovative digital solutions that could benefit the scientific community or have wider applications.
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
import { ref, reactive } from 'vue'

const sections = ['About', 'Background', 'Education', 'Skills', 'Experience', 'Interests', 'Future']

const education = ref([
  { 
    title: 'MSc in Chemical Energy & Engineering',
    institution: 'OVGU - Die Otto-von-Guericke-Universität Magdeburg',
    year: '2015 - 2018'
  },
  { 
    title: 'BSc in Pharmaceutical Engineering',
    institution: 'Southeast University Chengxian College',
    year: '2009 - 2013'
  }
])

const skills = ref([
  { name: 'Bioprocess Research', level: 90, icon: '🧬' },
  { name: 'Laboratory Techniques', level: 90, icon: '🔬' },
  { name: 'Virus Production', level: 85, icon: '🦠' },
  { name: 'Project Coordination', level: 75, icon: '📊' },
  { name: 'SOP Documentation', level: 80, icon: '📝' },
  { name: 'Programming', level: 30, icon: '💻' },
  { name: 'AI Concepts', level: 25, icon: '🤖' },
  { name: 'Prompt Engineering', level: 40, icon: '✍️' },
])

const workExperience = ref([
  {
    title: 'Technical Assistant (Research Assistant)',
    company: 'Max Planck Institute for Dynamics of Complex Technical Systems Magdeburg',
    period: '10.2019 – 05.2023',
    responsibilities: [
      'Supported the development of innovative methods for virus production and purification.',
      'Operated virus laboratory and analysis instruments, ensuring accurate experimental data.',
      'Coordinated laboratory operations and documentation, including SOP updates.',
      'Managed laboratory inventory and coordinated with internal and external partners.',
      'Trained and supervised internship students in laboratory protocols and safety practices.',
      'Assisted in scheduling and coordinating experiments for optimal resource utilization.'
    ]
  },
  {
    title: 'Project Coordinator',
    company: 'Jiangsu Alpha Pharmaceutical Co., Ltd.',
    period: '11.2013 - 09.2015',
    responsibilities: [
      'Coordinated multiple biotech projects, managing timelines and communication.',
      'Contributed to three patents, providing support in research and development efforts.',
      'Prepared and managed project documentation, including progress reports.',
      'Organized meetings and discussions with project teams and stakeholders.',
      'Monitored project deadlines and tracked progress to ensure timely milestone achievement.'
    ]
  }
])

const professionalInterests = ref([
  { 
    name: 'Programming',
    icon: '💻',
    description: 'Learning various programming languages and applying them to create practical applications.'
  },
  { 
    name: 'AI Applications',
    icon: '🤖',
    description: 'Exploring the potential of AI in various fields and understanding its practical implementations.'
  },
  { 
    name: 'Web Development',
    icon: '🌐',
    description: 'Building skills in web development to create functional and user-friendly websites.'
  },
  {
    name: 'Social Media Tools',
    icon: '📱',
    description: 'Developing social media applications as a way to practice and apply coding and AI concepts.'
  }
])

const socialLinks = ref([
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/qing-wang-02aa77140/', icon: '🔗' },
  { name: 'GitHub', url: 'https://github.com/NormyWang', icon: '🐙' },
  { name: 'Twitter', url: 'https://twitter.com/your-twitter-handle', icon: '🐦' },
])

const showAll = reactive({})

const toggleShowAll = (jobTitle) => {
  showAll[jobTitle] = !showAll[jobTitle]
}
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