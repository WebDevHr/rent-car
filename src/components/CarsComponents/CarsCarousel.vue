<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
    <div>
        <Carousel v-model="currentSlide" :autoplay="4000" :items-to-show="3" :wrap-around="true" :transition="800"
            class="h-[300px] md:h-[400px] lg:h-[600px]">
            <Slide v-for="slide in cars" :key="slide" class="h-[200px] md:h-[300px] lg:h-[500px]">
                <div class="carousel__item">
                    <div class="flex flex-col items-center">
                        <img :src="slide" :alt="slide">
                        <h1>tip</h1>
                        <h5>ad</h5>
                        <button class="border w-32">click me</button>
                    </div>
                </div>
            </Slide>

            <template #addons>
                <Pagination />
            </template>
        </Carousel>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue'
import { Carousel, Pagination, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
    name: 'CarsCarousel',
    components: {
        Carousel,
        Slide,
        Pagination,
    },
    setup() {
        const currentSlide = ref(0)
        const cars = ref<Array<string>>([
            '/img/FiloImages/1.png',
            '/img/FiloImages/2.png',
            '/img/FiloImages/3.png',
            '/img/FiloImages/4.png',
            '/img/FiloImages/5.png',
        ])

        return {
            cars,
            currentSlide
        }
    }
})
</script>
  
<style scoped>
.carousel__slide {
    padding: 5px;
}

.carousel__viewport {
    perspective: 2000px;
}

.carousel__track {
    transform-style: preserve-3d;
}

.carousel__slide--sliding {
    transition: 0.5s;
}

.carousel__slide {
    opacity: 0.9;
    transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active~.carousel__slide {
    transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
    opacity: 1;
    transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
    opacity: 1;
    transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
    opacity: 1;
    transform: rotateY(0) scale(1.1);
}
</style>