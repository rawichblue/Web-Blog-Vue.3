<script setup lang="ts">
import Card2 from '../components/Card2.vue'
import Card1 from '../components/Card1.vue'
</script>

<template>
    <div>
        <div>
            <h1 class="m-10 font-bold max-sm:text-xl">Nike Apparel Review: Impressive Style and Modernity</h1>
            <div class="flex justify-center items-center mt-5">
                <img src="../IMG/IMG_Blog/ClothingReview/HoodieNike.jpg" alt="Hoodie Nike" class="rounded-xl IMG1_Blog1">
            </div>


            <div class="flex justify-center items-center">
                <p class="text-lg p-5 paragraph">review Nike apparel, focusing on the distinctive style and modernity that
                    Nike
                    is known for, as well as the emphasis on comfort and performance. Whether it's sports apparel, running
                    shoes, or casual wear, you will gain an overview of Nike's style and quality in this article.</p>
            </div>
        </div>

        <div class="grid grid-cols-2 max-sm:flex flex-col-reverse">
            <div class="flex justify-center items-center m-5 text-lg">
                <p class="text-lg p-5">Nike apparel offers both convenience and modernity. Through the use of technology,
                    Nike ensures that
                    users feel comfortable in all situations, accommodating body movements and enhancing performance in
                    sports activities. Additionally, Nike's designs are contemporary and stylish, impressing wearers by
                    meeting their personal style needs.</p>
            </div>

            <div class="flex justify-center items-center mt-5">
                <img src="../IMG/IMG_Blog/ClothingReview/SportBraNike.jpg" alt="Sport Bra Nike"
                    class="rounded-xl IMG2_Blog1">
            </div>
        </div>

        <div class="grid grid-cols-2 max-sm:block">
            <div>
                <p class="text-lg p-5">Nike apparel is widely recognized among athletes, trainers, and fitness enthusiasts
                    worldwide. With its unique identity and quality-focused innovation, Nike's designs have captured the
                    hearts of people globally for over fifty years.</p>
            </div>

            <div>
                <p class="text-lg p-5">Whether you are an athlete seeking modern style in sports performance, or someone
                    looking for value-for-money apparel for workouts and daily life, you no longer need to wonder. Nike
                    apparel provides an appealing option that meets your desired style and modernity while ensuring comfort
                    and convenience.</p>
            </div>
        </div>

        <div>
            <p class="text-4xl mb-10 font-bold">Blog</p>
            <div class="flex justify-center items-center">
                <div class="grid grid-cols-2 gap-5 max-sm:block max-md:block">
                    <Card2 />
                    <Card1 />
                </div>
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
    width: 300px;
    height: auto;
}</style>