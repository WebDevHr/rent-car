<template>
  <div id="app">
    <header-component />
    <transition name="fade" mode="out-in">
      <router-view :key="$route.fullPath" />
    </transition>
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

/** Transitions **/
.fade-enter {
  opacity: 0;
  translate: -30px 0px;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease;
}

.fade-leave-to {
  opacity: 0;
  translate: -30px 0px;
}
</style>

