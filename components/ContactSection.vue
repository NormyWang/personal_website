<template>
    <div class="container mx-auto px-4 py-12">
      <h2 class="text-3xl font-bold mb-8">Get in Touch</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <form @submit.prevent="submitForm" class="space-y-4">
            <div>
              <label for="name" class="block mb-1">Name</label>
              <input type="text" id="name" v-model="form.name" required class="w-full px-4 py-2 border rounded-md">
            </div>
            <div>
              <label for="email" class="block mb-1">Email</label>
              <input type="email" id="email" v-model="form.email" required class="w-full px-4 py-2 border rounded-md">
            </div>
            <div>
              <label for="message" class="block mb-1">Message</label>
              <textarea id="message" v-model="form.message" required rows="4" class="w-full px-4 py-2 border rounded-md"></textarea>
            </div>
            <button type="submit" class="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition duration-300">Send Message</button>
          </form>
        </div>
        <div>
          <h3 class="text-2xl font-semibold mb-4">Connect with Me</h3>
          <p class="mb-4">Feel free to reach out through social media or email. I'm always happy to connect with fellow enthusiasts in chemical engineering, informatics, cooking, or travel!</p>
          <div class="flex space-x-4 mb-4">
            <a href="#" class="text-2xl text-indigo-600 hover:text-indigo-800"><i class="fab fa-facebook"></i></a>
            <a href="#" class="text-2xl text-indigo-600 hover:text-indigo-800"><i class="fab fa-instagram"></i></a>
            <a href="#" class="text-2xl text-indigo-600 hover:text-indigo-800"><i class="fab fa-linkedin"></i></a>
          </div>
          <p>Email: your.email@example.com</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const form = ref({
    name: '',
    email: '',
    message: ''
  });
  
  const submitForm = () => {
    // Implement form submission logic here
    console.log('Form submitted:', form.value);
    // Reset form after submission
    form.value = { name: '', email: '', message: '' };
  };
  </script>