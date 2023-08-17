<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
  <div>
    <HeaderComponent />
    <router-view></router-view>
    <footer>
      <div>
        Here is footer
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import HeaderComponent from "../src/components/GlobalComponents/HeaderComponent.vue"
export default {
  components: {
    HeaderComponent
  },
}
</script>

