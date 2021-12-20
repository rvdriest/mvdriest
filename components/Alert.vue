<template>
	<div :class="styles[type]" class="py-4 px-6">
		<p class="font-medium"><slot></slot></p>
	</div>
</template>

<script>
export default {
	props: {
		type: {type: String, default: 'warning', enum: ['success', 'danger', 'warning']},
	},
	data() {
		return {
			styles: {
				success: ['bg-green-500', 'text-white'],
				danger: ['bg-red-500', 'text-white'],
				warning: ['bg-yellow-500', 'text-white'],

			}
		}
	}
}
</script>

<style>

</style>