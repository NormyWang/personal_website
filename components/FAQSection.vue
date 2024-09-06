<template>
  <div class="faq-section">
    <!-- Header Section -->
    <section class="py-20 bg-gradient-to-r from-blue-100 to-purple-100">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4 text-indigo-900">Frequently Asked Questions</h1>
        <p class="text-xl md:text-2xl text-indigo-800">Find answers to common questions about my work and services</p>
      </div>
    </section>

    <!-- FAQ List Section -->
    <section class="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto">
          <div v-for="(faq, index) in faqs" :key="index" class="mb-8">
            <button
              @click="toggleFAQ(index)"
              class="w-full text-left bg-white p-4 rounded-lg shadow-md flex justify-between items-center hover:bg-indigo-50 transition duration-300"
            >
              <span class="text-lg font-semibold text-indigo-800">{{ faq.question }}</span>
              <span class="text-indigo-600">{{ faq.isOpen ? '−' : '+' }}</span>
            </button>
            <div v-if="faq.isOpen" class="mt-2 p-4 bg-white rounded-lg shadow-md">
              <p class="text-indigo-700">{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const faqs = ref([
  {
    question: "What services do you offer?",
    answer: "I specialize in enhancing social media development through the use of intelligent agents. My services focus on implementing AI-driven solutions to optimize social media strategies, automate content creation, and improve user engagement.",
    isOpen: false
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on complexity, but most projects are completed within 4-8 weeks.",
    isOpen: false
  },
  {
    question: "Do you offer ongoing maintenance and support?",
    answer: "Yes, I offer maintenance packages and ongoing support for all completed projects.",
    isOpen: false
  },
  {
    question: "How can AI agents improve social media development?",
    answer: "AI agents can analyze user behavior, automate content scheduling, personalize user experiences, and provide real-time insights for better decision-making in social media strategies.",
    isOpen: false
  },
  {
    question: "What platforms do your social media agents work with?",
    answer: "Our AI agents are designed to work with major social media platforms including Facebook, Twitter, Instagram, LinkedIn, and TikTok. We can also develop custom solutions for other platforms as needed.",
    isOpen: false
  },
  {
    question: "Can AI agents help with content creation?",
    answer: "Yes, our AI agents can assist in content creation by generating ideas, optimizing post timing, suggesting trending hashtags, and even drafting initial content based on your brand voice and goals.",
    isOpen: false
  },
  // Add more FAQs as needed
]);

const toggleFAQ = (index) => {
  faqs.value[index].isOpen = !faqs.value[index].isOpen;
};
</script>