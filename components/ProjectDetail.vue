<template>
	<div class="flex items-center h-10">
		<slot></slot>
		<div class="flex flex-col ml-4">
			<label class="text-gray-400 text-sm">{{title}}</label>
			<p class="text-white font-medium text-lg">{{value}}</p>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		title: {type: String, required: true},
		value: {type: String, required: true,}
	}
}
</script>