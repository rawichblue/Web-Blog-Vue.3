<script setup lang="ts">
import Card1 from '../components/Card1.vue'
import Card3 from '../components/Card3.vue'
</script>

<template>
    <div>
        <h1 class="m-10 font-bold max-sm:text-xl max-md:text-xl">Recommended Nike Shoes for Various Sports Activities</h1>
        <div class="flex justify-center items-center mt-5">
            <img src="../IMG/IMG_Blog/RecommendNike/NikeSport.jpg" alt="Nike Thailand" class="rounded-xl IMG1_Blog1">
        </div>


        <div class="flex justify-center items-center">
            <p class="text-lg m-10 paragraph">Nike shoes suitable for different sports activities, enhancing performance and
                comfort during sports engagements such as running, training, football, badminton, and more. Athletes
                participating in various sports should consider choosing the appropriate Nike shoes for their specific
                activities. With their comprehensive features and exceptional qualities, Nike shoes will provide the utmost
                comfort and performance enhancement during sports engagements</p>
        </div>

        <div class="grid grid-cols-3 max-sm:block">
            <div>
                <div class="flex justify-center items-center">
                    <div>
                        <img src="../IMG/IMG_Blog/RecommendNike/NikeRunningShoes.jpg" alt="Nike Running Shoes"
                            class="rounded-full w-80 h-60">
                    </div>

                </div>
                <br>
                <p class="p-5 mb-5">Nike offers a variety of running shoe models suitable for all distances, from short sprints to
                    long-distance running. Nike running shoes often incorporate technology that provides excellent
                    cushioning and flexibility. These shoes also feature systems for breathability and heat dissipation,
                    ensuring your feet stay comfortable and cool during runs.</p>
            </div>

            <div>
                <div class="flex justify-center items-center">
                    <div>
                        <img src="../IMG/IMG_Blog/RecommendNike/NikeSoccerShoes.jpg" alt="Nike Soccer Shoes"
                            class="rounded-full w-80 h-60 object-cover">
                    </div>
                </div>


                <br>
                <p class="p-5 mb-5">For football players, Nike football shoes are a staple not to be missed. They are designed to provide
                    durability and flexibility, crucial for precise movements on the field. Nike football shoes come with
                    stud configurations that enhance excellent traction and centering features that help control direction
                    and speed of movement.</p>
            </div>

            <div>
                <div class="flex justify-center items-center">
                    <div>
                        <img src="../IMG/IMG_Blog/RecommendNike/NikeBasketballShoes.jpg" alt="Nike Basketball Shoes"
                            class="rounded-full w-80 h-60 object-cover">
                    </div>

                </div>
                <br>
                <p class="p-5 mb-5">Nike basketball shoes are designed for the unique demands of the sport, providing cushioning, ankle
                    support, and traction on the court. These shoes offer responsive cushioning for explosive jumps, lateral
                    stability for quick cuts and crossovers, and durable outsoles for grip. Nike basketball shoes are worn
                    by professional athletes and basketball enthusiasts alike.</p>
            </div>


        </div>


        <p class="text-4xl mt-10 mb-10 font-bold">Blog</p>
        <div class="flex justify-center items-center">
            <div class="grid grid-cols-2 gap-5 max-sm:block max-md:block">
                <Card1 />
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
.IMG1_Blog1 {
  width: 600px;
  height: auto;
}

</style>