<template>
	<div class="bg-dark p-10">
		<slot></slot>
		<h2 class="text-gray-500 mt-6 mb-2">{{title}}</h2>
		<p class="text-white font-medium">{{content}}</p>
	</div>
</template>

<script>
export default {
	props: {
		title: {type: String, required: true},
		content: {type: String, required: true},
	}
}
</script>