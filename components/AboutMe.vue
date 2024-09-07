<template>
  <div class="about-me">
    
    <div class="hero-section" id="About">
      <div class="container mx-auto px-4 flex items-center">
        <img src="/my-picture.jpg" alt="Normy Wang" class="rounded-full w-32 h-32 mr-8">
        <div>
          <h1 class="text-4xl font-bold text-indigo-900 mb-2">Normy Wang</h1>
          <p class="text-lg text-indigo-700 mb-4">Pharma & Biotech Professional, Aspiring Coder and AI Enthusiast</p>
          <p class="text-md text-indigo-600 max-w-2xl">Leveraging bioprocess engineering expertise while learning modern coding and AI techniques to explore innovations in virus research and sustainable biotech solutions.</p>
        </div>
      </div>
    </div>
    
    <div class="max-w-4xl mx-auto p-6">
      <section id="Background" class="mb-12 bg-white bg-opacity-75 rounded-lg shadow-lg p-8 transition-all hover:shadow-xl">
        <h2 class="text-2xl font-semibold mb-4 text-indigo-700 border-b pb-2">Background</h2>
        <p class="mb-6 text-gray-700 leading-relaxed">
          I completed my master's in Chemical Energy Engineering, but my career took a different path. After my studies, I worked as a technical assistant at a Virus Research Institute, where I specialized in laboratory techniques, focusing on the development and purification of virus production methods. My work involved hands-on experience in various biotechnological processes, particularly in viral research.
        </p>
        <p class="mb-6 text-gray-700 leading-relaxed">
          Currently, I am learning coding and exploring bioinformatics, with a strong interest in integrating AI tools to enhance research efficiency. My future goal is to combine my experience in virus research with my growing programming skills to contribute to innovative biotech solutions, focusing on sustainable technologies and advancements in the pharmaceutical field.
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
          My aim is to further integrate AI and machine learning techniques into bioinformatics and virus research, 
          focusing on developing predictive models for genomic data analysis and virus-host interactions. I'm keen on 
          exploring the potential of computational biology in enhancing our understanding of viral mechanisms and 
          accelerating the development of antiviral strategies. Additionally, I aspire to contribute to the field of 
          personalized medicine by leveraging bioinformatics tools to analyze large-scale biological datasets.
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
  { name: 'Chemical Engineering', level: 80, icon: '🧪' },
  { name: 'Bioprocess Research', level: 90, icon: '🧬' },
  { name: 'Laboratory Techniques', level: 90, icon: '🔬' },
  { name: 'Virus Production & Purification', level: 85, icon: '🦠' },
  { name: 'Project Coordination', level: 75, icon: '📊' },
  { name: 'SOP Documentation', level: 80, icon: '📝' },
  { name: 'Prompt Engineering', level: 70, icon: '🤖' },
  { name: 'Programming', level: 50, icon: '💻' },
])

const workExperience = ref([
  {
    title: 'Technical Assistant (Research Assistant)',
    company: 'Max Planck Institute for Dynamics of Complex Technical Systems Magdeburg',
    period: '10.2019 – 05.2023',
    responsibilities: [
      'Supported the development of innovative methods for virus production and purification, working on both upstream and downstream processes.',
      'Operated virus laboratory and analysis instruments, ensuring accurate experimental data and results.',
      'Coordinated laboratory cleaning and testing requirements, liaising with internal teams and external partners.',
      'Assisted in drafting and updating Standard Operating Procedures (SOPs) and other essential laboratory documentation.',
      'Managed laboratory inventory, including ordering necessary equipment, consumables, and office supplies.',
      'Provided guidance and supervision to internship students, ensuring smooth lab integration and understanding of procedures.',
      'Trained new colleagues in laboratory protocols and safety practices, ensuring a well-organized and efficient working environment.',
      'Collaborated with internal and external partners to schedule and coordinate experiments, ensuring optimal use of resources and time.'
    ]
  },
  {
    title: 'Project Coordinator',
    company: 'Jiangsu Alpha Pharmaceutical Co., Ltd.',
    period: '11.2013 - 09.2015',
    responsibilities: [
      'Contributed to three patents, providing support in research and development efforts (non-primary inventor).',
      'Coordinated multiple projects, managing timelines, communication, and documentation across various departments.',
      'Planned and organized project schedules, ensuring alignment with project goals and deadlines.',
      'Prepared and managed project documentation, including progress reports, financial reports, and final reports.',
      'Delivered presentations and reports to responsible departments and stakeholders, ensuring effective communication of project status.',
      'Organized meetings and discussions with project teams, investors, external testers, and officials, facilitating collaboration and decision-making.',
      'Monitored deadlines, tracked progress, and provided feedback to ensure project milestones were achieved on time.'
    ]
  },
  // Add more work experiences as needed
])

const professionalInterests = ref([
  { 
    name: 'Bioprocess Engineering',
    icon: '🧫',
    description: 'Optimizing bioprocesses for sustainable production of biopharmaceuticals and viral vectors.'
  },
  { 
    name: 'Programming in Research',
    icon: '👨‍💻',
    description: 'Applying programming skills to enhance data analysis and automation in bioprocess research.'
  },
  { 
    name: 'AI Applications in Biotech',
    icon: '🤖',
    description: 'Exploring AI potential in bioprocess optimization and predictive modeling for virus production.'
  },
  {
    name: 'Virus Production & Purification',
    icon: '🦠',
    description: 'Developing and improving methods for efficient virus production and purification in bioreactors.'
  }
])

const socialLinks = ref([
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/qing-wang-02aa77140/', icon: '🔗' },
  { name: 'GitHub', url: 'https://github.com/NormyWang', icon: '🐙' },
  { name: 'ORCID', url: 'https://orcid.org/your-orcid-id', icon: '🆔' },
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