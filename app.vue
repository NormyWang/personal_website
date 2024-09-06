<template>
  <div id="app">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="css">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  :root {
    --header-height: 4rem; /* Adjust this value based on your header's actual height */
  }

  html {
    scroll-padding-top: var(--header-height);
  }

  #app {
    @apply min-h-screen font-sans;
  }
</style>
