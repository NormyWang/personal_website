<template>
    <div class="recipe-detail bg-gradient-to-br from-yellow-50 to-orange-50 min-h-screen pb-12">
      <!-- Header Section -->
      <section class="py-20 bg-gradient-to-r from-yellow-200 to-orange-200">
        <div class="container mx-auto px-4 text-center">
          <h1 class="text-5xl md:text-6xl font-bold mb-4 text-orange-900">Ofengeröstetes Hähnchen</h1>
          <p class="text-xl text-orange-700 max-w-2xl mx-auto">Saftiges Hähnchen mit Paprika, Kartoffeln und Lauch aus dem Ofen</p>
        </div>
      </section>
  
      <!-- Recipe Details -->
      <section class="py-12">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="/oven-roasted-chicken.jpeg" 
              alt="Ofengeröstetes Hähnchen" 
              class="w-full h-80 object-cover"
            >
            <div class="p-8">
              <!-- Recipe Info -->
              <div class="mb-6">
                <p class="text-gray-600"><i class="fas fa-clock mr-2"></i>Zubereitungszeit: 6 Stunden (inkl. Marinierzeit)</p>
                <p class="text-gray-600"><i class="fas fa-utensils mr-2"></i>Portionen: 4-6</p>
              </div>
  
              <!-- Recipe Content -->
              <div class="md:flex md:space-x-8">
                <!-- Ingredients -->
                <div class="md:w-1/3">
                  <h3 class="text-2xl font-semibold mb-4 text-orange-900">Zutaten</h3>
                  <ul class="space-y-2 text-orange-700">
                    <li><i class="fas fa-check-circle mr-2 text-green-500"></i>1 ganzes Hähnchen (ca. 1,5 kg)</li>
                    <li><i class="fas fa-check-circle mr-2 text-green-500"></i>2 Paprika (rot oder gelb)</li>
                    <li><i class="fas fa-check-circle mr-2 text-green-500"></i>2-3 Kartoffeln</li>
                    <li><i class="fas fa-check-circle mr-2 text-green-500"></i>2 Lauchstangen</li>
                    <li><i class="fas fa-check-circle mr-2 text-green-500"></i>2 Scheiben Ingwer (ca. 10 g)</li>
                    <li><i class="fas fa-check-circle mr-2 text-green-500"></i>2 Frühlingszwiebeln</li>
                    <li><i class="fas fa-check-circle mr-2 text-green-500"></i>15 g Reiswein</li>
                    <li><i class="fas fa-check-circle mr-2 text-green-500"></i>30 g Sojasauce</li>
                    <li><i class="fas fa-check-circle mr-2 text-green-500"></i>15 g Austernsauce</li>
                    <li><i class="fas fa-check-circle mr-2 text-green-500"></i>15 g dunkle Sojasauce</li>
                    <li><i class="fas fa-check-circle mr-2 text-green-500"></i>45 g Honig</li>
                    <li><i class="fas fa-check-circle mr-2 text-green-500"></i>Schwarzer Pfeffer und Salz</li>
                    <li><i class="fas fa-check-circle mr-2 text-green-500"></i>30 g Olivenöl</li>
                    <li><i class="fas fa-check-circle mr-2 text-green-500"></i>Alufolie</li>
                  </ul>
                </div>
  
                <!-- Instructions -->
                <div class="md:w-2/3 mt-8 md:mt-0">
                  <h3 class="text-2xl font-semibold mb-4 text-orange-900">Anleitung</h3>
                  <ol class="space-y-4 text-orange-700">
                    <li class="flex">
                      <span class="font-bold mr-4">1.</span>
                      <p>Hähnchen waschen und 2 Stunden in Salzwasser einlegen. Mit einem Zahnstocher 99 Löcher in die Haut stechen.</p>
                    </li>
                    <li class="flex">
                      <span class="font-bold mr-4">2.</span>
                      <p>Hähnchen mit Ingwer, Frühlingszwiebeln, Reiswein, Sojasaucen, Austernsauce, 30 g Honig, Pfeffer und Salz marinieren. 4 Stunden im Kühlschrank ziehen lassen.</p>
                    </li>
                    <li class="flex">
                      <span class="font-bold mr-4">3.</span>
                      <p>Gemüse vorbereiten: Paprika und Lauch in Stücke schneiden. Kartoffeln schälen, in Stücke schneiden und mit Olivenöl, Salz und Pfeffer vermischen.</p>
                    </li>
                    <li class="flex">
                      <span class="font-bold mr-4">4.</span>
                      <p>Ofen auf 240°C vorheizen. Flügelspitzen und Beinenden des Hähnchens mit Alufolie umwickeln.</p>
                    </li>
                    <li class="flex">
                      <span class="font-bold mr-4">5.</span>
                      <p>Kartoffeln 10 Minuten rösten, dann Hähnchen darauflegen und weitere 10 Minuten rösten.</p>
                    </li>
                    <li class="flex">
                      <span class="font-bold mr-4">6.</span>
                      <p>Temperatur auf 180°C senken und 30 Minuten rösten. Dann Paprika und Lauch hinzufügen und weitere 20 Minuten rösten, dabei das Hähnchen einmal wenden.</p>
                    </li>
                    <li class="flex">
                      <span class="font-bold mr-4">7.</span>
                      <p>In den letzten 5 Minuten das Hähnchen mit 15 g Honig bestreichen und fertig rösten.</p>
                    </li>
                    <li class="flex">
                      <span class="font-bold mr-4">8.</span>
                      <p>Gargrad überprüfen (Kerntemperatur 75°C oder klarer Saft beim Einstechen).</p>
                    </li>
                    <li class="flex">
                      <span class="font-bold mr-4">9.</span>
                      <p>Hähnchen und Gemüse kurz abkühlen lassen, in Stücke schneiden und servieren.</p>
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