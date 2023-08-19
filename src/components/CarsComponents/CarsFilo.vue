<script lang="ts">
import CarsCarousel from "../../components/CarsComponents/CarsCarousel.vue"
export default {
    components: {
        CarsCarousel
    },
}
</script>

<template>
    <div class="text-center py-10">
        <h1 class="text-xl md:text-3xl font-bold py-2 fontFamilyCinzel">FİLO İLE TANIŞIN</h1>
        <h5 class="text-sm md:text-lg fontFamilyNunito">SUV'lerden, elektrikli araçlara, nereye diderseniz gidin, sürüşünüz
            var.</h5>
        <cars-carousel />
    </div>
</template>
