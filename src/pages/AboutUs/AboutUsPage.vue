<script setup lang="ts">

const route = useRoute()

useHead({
	title: route.meta.title,
	meta: [
		{
			property: 'og:title',
			content: route.meta.title,
		},
		{
			name: 'twitter:title',
			content: route.meta.title,
		},
	],
})
</script>

<template>
	<div>
		<h1 class="bg-red-500">Hakkımızda</h1>
	</div>
</template>