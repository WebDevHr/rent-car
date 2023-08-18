<script setup lang="ts">
// useRoute, useHead, and HelloWorld are automatically imported. See vite.config.ts for details.

</script>

<template>
  <div class="relative py-8">
    <div
      class="absolute inset-0 bg-[url(/img/grid.svg)] bg-top [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]">
    </div>
  </div>
  <div class="container relative max-w-2xl mx-auto bg-white shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5">
    <header class="px-4 pt-6 prose-sm md:px-6 md:prose">

    </header>
    <main>
      <HelloWorld msg="Hello World Component" />
    </main>
    <footer class="py-6 text-sm text-center text-gray-700">

    </footer>
  </div>
</template>
