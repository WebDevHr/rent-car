<script lang="ts">
import { defineComponent } from 'vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'HomePage',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
})
</script>

<template>
  <div class="bg-gray-100 w-full">
    <main class="mt-1 w-4/5 mx-auto">
      <Carousel>
        <Slide v-for="slide in 10" :key="slide">
          <div class="carousel__item">{{ slide }}</div>
        </Slide>

        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
      <HelloWorld msg="Hello World Component" />
    </main>
  </div>
</template>


<style>
.carousel__item {
  min-height: 500px;
  width: 100%;
  background-color: white;
  color: black;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
}
</style>