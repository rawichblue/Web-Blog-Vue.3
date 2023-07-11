<script setup lang="ts">
import Card1 from './Card1.vue'
import Card2 from './Card2.vue'
import Card3 from './Card3.vue'

</script>

<template>
  <img src="../IMG/NikeStore.jpg" alt="NikeStore" class="w-full">

  <button class="btn btn-outline btn-warning mt-10 text-base">Shopping</button>

  <div class="grid grid-cols-2 w-full h-96 max-sm:block max-md:block">
    <div class="flex justify-center items-center p-2 mx-10 tracking-widest">
      <p class="text-xl max-sm:hidden max-md:hidden"> <span class="text-warning">Nike</span>, Inc., an American sportswear
        manufacturing company, was founded
        in 1964 by Bill Bowerman,
        a sports coach at the University of Oregon, and Phil Knight, his own student. Originally named Blue Ribbon Sports
        from 1964 to 1978, the company is headquartered in Beaverton, Oregon, United States. They opened their first
        retail store in 1966 and introduced the Nike brand of footwear in 1972. In 1978, the company changed its name to
        Nike, Inc. Currently, Nike has retail stores and distributors in over 170 countries worldwide. The Nike logo,
        known as the Swoosh, is a curved checkmark symbol that has become iconic and recognizable to this day.</p>

      <p class="hidden max-sm:block max-md:block text-base"><span class="text-warning">Nike</span>, Inc. is an American
        sportswear company founded in 1964.
        They are known for their iconic
        Swoosh logo and globally recognized footwear. With retail stores in over 170 countries, Nike is a prominent name
        in the industry.</p>
    </div>

    <div class="flex justify-center items-center">
      <div class="carousel bg-cover rounded-xl boxCarousel">
        <div id="slide1" class="carousel-item relative w-full flex justify-center items-center">
          <img src="../IMG/NikeAirForce.jpg" alt="Nike Air Force">
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" class="btn btn-circle">❮</a>
            <a href="#slide2" class="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" class="carousel-item relative w-full flex justify-center items-center">
          <img src="../IMG/NikeDunkLow.jpg" alt="Nike Dunk Low">
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" class="btn btn-circle">❮</a>
            <a href="#slide3" class="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" class="carousel-item relative w-full flex justify-center items-center">
          <img src="../IMG/NikeShop.jpg" alt="Nike Shop">
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" class="btn btn-circle">❮</a>
            <a href="#slide1" class="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-1 mb-10 max-sm:mt-36 max-md:mt-36">
    <p class="text-xl max-sm:hidden max-md:hidden mx-10">The Nike logo , known as the Swoosh, was designed by Carolyn
      Davidson, a graphic design student from Portland State University. The inspiration for the design came from the wing
      of the Greek goddess of
      victory. This wing represents bravery and motivation, symbolizing the historical and cultural origins brought into
      the present world.</p>
    <p class="hidden max-sm:block max-md:block text-base">Nike's Swoosh logo was designed by Carolyn Davidson, a student
      at
      Portland State
      University, and symbolizes victory, bravery, and cultural heritage.</p>
  </div>

  <p class="text-4xl mb-10 font-bold">Blog</p>

  <div class="flex justify-center items-center">
    <div class="grid grid-cols-3 gap-5 max-sm:block max-md:block">
      <Card1 />
      <Card2 />
      <Card3 />
    </div>
  </div>
</template>

<style scoped></style>

