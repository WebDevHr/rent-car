<template>
  <div>
    <header-component />
    <router-view></router-view>
    <footer-component />
  </div>
</template>

<script lang="ts">
import HeaderComponent from "../src/components/GlobalComponents/HeaderComponent.vue"
import FooterComponent from "../src/components/GlobalComponents/FooterComponent.vue"
export default {
  components: {
    HeaderComponent,
    FooterComponent
  },
}
</script>

<style>
.fontFamilyCinzel {
  font-family: 'Cinzel', serif;
}

.fontFamilyNunito {
  font-family: 'Nunito', sans-serif;
}
</style>

