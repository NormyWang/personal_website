<template>
      <div class="flex flex-col min-h-screen">
        <Header />
        <main class="flex-grow pt-[var(--header-height)]">
          <slot></slot>
        </main>
        <Footer />
      </div>
    </template>
    
    <script setup>
    import Header from '@/components/Header.vue';
    import Footer from '@/components/Footer.vue';
    </script>

    <style scoped>
    @media (max-width: 640px) {
      main {
        padding-top: 5rem;
      }
    }
    </style>