<script setup lang="ts">
import Card2 from '../components/Card2.vue'
import Card3 from '../components/Card3.vue'
</script>

<template>
  <div>
    <h1 class="m-10 font-bold max-sm:text-xl max-md:text-xl">Why People Love Nike ?</h1>
    <div class="flex justify-center items-center mt-5">
      <img src="../IMG/IMG_Blog/LikeNike/Sport Nike.jpg" alt="Nike Thailand" class="rounded-xl IMG1_Blog1">
    </div>


    <div class="flex justify-center items-center">
      <p class="text-lg m-10 paragraph">Due to its high-quality characteristics, impressive design aesthetics, and genuine
        social value, it is no wonder that Nike has gained widespread popularity and become a brand beloved by people
        worldwide. Whether it's athletes, trainers, or individuals seeking quality products that align with their daily
        lives, they can rely on Nike to provide exceptional experiences and styles.</p>
    </div>

    <div class="grid grid-cols-2 max-sm:block">
      <div class="flex justify-center items-center mt-10">
        <img src="../IMG/IMG_Blog/LikeNike/Nike Thailand.jpg" alt="Nike Thailand" class="rounded-xl IMG2_Blog1">
      </div>

      <div class="flex justify-center items-center m-10">
        <p>Superb Quality: Nike is a brand that instills confidence in producing high-quality products. Through
          rigorous
          testing and stringent standards, Nike's clothing and footwear are designed to be durable, long-lasting, and
          comfortable. By utilizing premium materials, Nike users feel assured that their purchases will provide them with
          a great user experience and durability.</p>
      </div>
    </div>

    <div class="flex justify-center items-center m-10">
      <div class="paragraph">
        <p>Nike plays a significant social role, from supporting sports and fostering camaraderie to promoting physical
          fitness and well-being. They advocate for and support gender equality and demonstrate social responsibility.
          Nike has become an influential advocate, understanding and addressing critical social issues that impact
          communities. People who love Nike feel confident that they are supporting a brand that actively works to address
          and solve societal problems.</p>
        <br>
        <p> Nike represents contemporary style and fashion. Their designs are beautiful, complete, and carry strong
          messages. Nike products have well-crafted and excellent stitching, along with captivating and eye-catching
          colors
          and graphics. Nike's design contributes to creating an identity and excellence for those who wear their
          products.
        </p>
      </div>
    </div>

    <p class="text-4xl mb-10 font-bold">Blog</p>
    <div class="flex justify-center items-center">
      <div class="grid grid-cols-2 gap-5 max-sm:block max-md:block">
        <Card2 />
        <Card3 />
      </div>
    </div>

  </div>
</template>

<style scoped>
@media (max-width: 400px) {
  .IMG_Blog1 .IMG2_Blog1 {
    width: 300px;
    height: auto;
  }
}

.paragraph {
  width: 60rem;
}

.IMG1_Blog1 {
  width: 600px;
  height: auto;
}

.IMG2_Blog1 {
  width: 400px;
  height: auto;
}</style>