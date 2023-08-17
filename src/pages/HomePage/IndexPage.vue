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
  setup() {
    const img = [
      'src/assets/img/CarouselImages/2.jpg',
      'src/assets/img/CarouselImages/1.jpg',
      'src/assets/img/CarouselImages/3.jpg',
      'src/assets/img/CarouselImages/4.jpg',
      'src/assets/img/CarouselImages/5.jpg',
      'src/assets/img/CarouselImages/6.jpg',
    ]
    return {
      img,
    }
  }
})
</script>

<template>
  <div class="bg-gray-50 w-full">
    <main class="pt-5 w-4/5 mx-auto">
      <Carousel>
        <Slide v-for="slide in img" :key="slide">
          <div class="carousel__item">
            <img :src="slide" alt="" class="inset-0 object-cover">
          </div>
        </Slide>

        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
      <HelloWorld msg="Hello World Component" />
    </main>
<<<<<<< HEAD
    <footer class="py-6 text-sm text-center text-gray-700">
     
    </footer>
  </div>
</template>
=======
  </div>
</template>


<style>
.carousel__item {
  min-height: 480px;
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
>>>>>>> b1b1567818daf7e5eeea4e2966618138e050492d
