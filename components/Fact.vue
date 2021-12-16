<template>
	<div class="flex items-center">
		<img :src="require(`~/assets/icons/${icon}.svg`)" :alt="icon" class="mr-4 w-8 h-8"/>
		<p class="font-medium text-lg"><slot></slot></p>
	</div>
</template>

<script>
export default {
	props: {
		icon: {type: String, required: true},
	}
}
</script>

