<template>
  <div class="living-in-germany">
    <!-- Header Section -->
    <section class="py-20 bg-gradient-to-r from-blue-100 to-purple-100">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4 text-indigo-900">Living in Germany</h1>
        <p class="text-xl md:text-2xl text-indigo-800">Language Learning and Personal Experiences</p>
      </div>
    </section>

    <!-- Content Section -->
    <section class="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <!-- Learn German Section -->
          <div class="mb-12 bg-white rounded-lg shadow-md overflow-hidden">
            <div class="p-6">
              <h2 class="text-2xl font-semibold mb-4 text-indigo-800">Learn German</h2>
              <p class="text-indigo-700 mb-4">Learning German is an essential part of living in Germany. Here are some tips and resources to help you on your language journey:</p>
              <ul class="list-disc list-inside mb-4 text-indigo-600">
                <li>Start with basic phrases and greetings</li>
                <li>Use language learning apps like Duolingo or Babbel</li>
                <li>Watch German TV shows with subtitles</li>
                <li>Attend language exchange meetups</li>
                <li>Consider taking a formal language course at a Volkshochschule</li>
              </ul>
              <div class="bg-indigo-50 rounded-lg p-6">
                <h3 class="text-xl font-semibold mb-2 text-indigo-800">Useful Resources for German Learning</h3>
                <ul class="list-disc list-inside mt-2 text-indigo-600">
                  <li><a href="https://www.tagesschau.de/" class="underline">Tagesschau</a> - News in German</li>
                  <li><a href="https://slowgerman.com/" class="underline">Slow German Podcast</a> - For beginners and intermediate learners</li>
                  <li><a href="https://www.nachrichtenleicht.de/" class="underline">Nachrichten Leicht</a> - Simplified German news</li>
                  <li><a href="https://www.youtube.com/channel/UCbxb2fqe9oNgglAoYqsYOtQ" class="underline">Easy German YouTube Channel</a> - German lessons and street interviews</li>
                  <li><a href="https://www.dw.com/de/deutsch-lernen/s-2055" class="underline">Deutsche Welle</a> - German courses and news in simple German</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Life Story Section -->
          <div class="mb-12 bg-white rounded-lg shadow-md overflow-hidden">
            <div class="p-6">
              <h2 class="text-2xl font-semibold mb-4 text-indigo-800">Life Story</h2>
              <p class="text-indigo-700 mb-4">My journey of living in Germany has been filled with unique experiences and personal growth. Here are some highlights:</p>
              <ul class="list-disc list-inside mb-4 text-indigo-600">
                <li>Moving to Germany and initial culture shock</li>
                <li>Navigating the bureaucracy and settling in</li>
                <li>Making friends and building a social network</li>
                <li>Exploring different cities and regions</li>
                <li>Adapting to German customs and traditions</li>
              </ul>
              <div class="bg-indigo-50 rounded-lg p-6">
                <h3 class="text-xl font-semibold mb-2 text-indigo-800">My German Journey</h3>
                <p class="text-indigo-700 mb-2">Here are some highlights from my life in Germany:</p>
                <ul class="list-disc list-inside mt-2 text-indigo-600">
                  <li>
                    <NuxtLink to="/germany/education" class="hover:underline">
                      Education: Pursuing a master's degree at a German university
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/germany/faith" class="hover:underline">
                      Faith: Joining a local church and participating in community events
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/germany/travel" class="hover:underline">
                      Travel: Exploring picturesque towns and breathtaking landscapes
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/germany/love-story" class="hover:underline">
                      Love Story: Meeting my husband at church and our journey to marriage
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/germany/personal-growth" class="hover:underline">
                      Personal Growth: Attending tech meetups and expanding my professional network
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/germany/cultural-integration" class="hover:underline">
                      Cultural Integration: Celebrating local festivals and embracing German traditions
                    </NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// No additional script needed for this component
</script>