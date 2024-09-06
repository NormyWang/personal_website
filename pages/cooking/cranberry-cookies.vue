<template>
  <div class="recipe-detail bg-gradient-to-br from-purple-50 to-blue-50 min-h-screen pb-12">
    <!-- Header Section -->
    <section class="py-20 bg-gradient-to-r from-purple-200 to-blue-200">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-5xl md:text-6xl font-bold mb-4 text-indigo-900">Cranberry Cookies</h1>
        <p class="text-xl text-indigo-700 max-w-2xl mx-auto">Delightful homemade cookies bursting with tangy cranberries and sweet white chocolate chips</p>
      </div>
    </section>

    <!-- Recipe Details -->
    <section class="py-12">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <img 
            src="/cranberry-cookies.jpeg" 
            alt="Cranberry Cookies" 
            class="w-full h-80 object-cover"
          >
          <div class="p-8">
            <!-- Recipe Info -->
            <div class="flex justify-between items-center mb-6">
              <div>
                <p class="text-gray-600"><i class="fas fa-clock mr-2"></i>Prep time: 20 mins</p>
                <p class="text-gray-600"><i class="fas fa-utensils mr-2"></i>Serves: 24 cookies</p>
              </div>
              <button class="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition">
                <i class="fas fa-print mr-2"></i>Print Recipe
              </button>
            </div>

            <!-- Recipe Content -->
            <div class="md:flex md:space-x-8">
              <!-- Ingredients -->
              <div class="md:w-1/3">
                <h3 class="text-2xl font-semibold mb-4 text-indigo-900">Ingredients</h3>
                <ul class="space-y-2 text-indigo-700">
                  <li><i class="fas fa-check-circle mr-2 text-green-500"></i>200g soft butter</li>
                  <li><i class="fas fa-check-circle mr-2 text-green-500"></i>150g sugar</li>
                  <li><i class="fas fa-check-circle mr-2 text-green-500"></i>1 large egg</li>
                  <li><i class="fas fa-check-circle mr-2 text-green-500"></i>1 tsp vanilla extract</li>
                  <li><i class="fas fa-check-circle mr-2 text-green-500"></i>300g all-purpose flour</li>
                  <li><i class="fas fa-check-circle mr-2 text-green-500"></i>1/2 tsp baking soda</li>
                  <li><i class="fas fa-check-circle mr-2 text-green-500"></i>1/4 tsp salt</li>
                  <li><i class="fas fa-check-circle mr-2 text-green-500"></i>150g dried cranberries</li>
                  <li><i class="fas fa-check-circle mr-2 text-green-500"></i>100g white chocolate chips (optional)</li>
                </ul>
              </div>

              <!-- Instructions -->
              <div class="md:w-2/3 mt-8 md:mt-0">
                <h3 class="text-2xl font-semibold mb-4 text-indigo-900">Instructions</h3>
                <ol class="space-y-4 text-indigo-700">
                  <li class="flex">
                    <span class="font-bold mr-4">1.</span>
                    <p>Preheat the oven to 175°C (350°F). Line a baking sheet with parchment paper or a silicone baking mat.</p>
                  </li>
                  <li class="flex">
                    <span class="font-bold mr-4">2.</span>
                    <p>In a large bowl, cream together 200g soft butter and 150g sugar until light and fluffy, about 2-3 minutes.</p>
                  </li>
                  <li class="flex">
                    <span class="font-bold mr-4">3.</span>
                    <p>Add 1 egg and 1 tsp vanilla extract, mix well.</p>
                  </li>
                  <li class="flex">
                    <span class="font-bold mr-4">4.</span>
                    <p>In another bowl, sift together 300g flour, 1/2 tsp baking soda, and 1/4 tsp salt.</p>
                  </li>
                  <li class="flex">
                    <span class="font-bold mr-4">5.</span>
                    <p>Gradually add the dry ingredients to the butter mixture, mixing until well combined.</p>
                  </li>
                  <li class="flex">
                    <span class="font-bold mr-4">6.</span>
                    <p>Fold in 150g dried cranberries and 100g white chocolate chips (if using) with a spatula.</p>
                  </li>
                  <li class="flex">
                    <span class="font-bold mr-4">7.</span>
                    <p>Drop spoonfuls of dough onto the prepared baking sheet, leaving space between each cookie.</p>
                  </li>
                  <li class="flex">
                    <span class="font-bold mr-4">8.</span>
                    <p>Bake for 12-15 minutes, until the edges are golden brown but the center is still soft.</p>
                  </li>
                  <li class="flex">
                    <span class="font-bold mr-4">9.</span>
                    <p>Remove from the oven and let cool on the baking sheet for a few minutes before transferring to a wire rack to cool completely.</p>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// No script needed for this static version
</script>

<style>
/* Add any custom styles here if needed */
</style>