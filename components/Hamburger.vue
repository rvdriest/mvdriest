<template>
	<svg viewBox="0 0 100 80" width="40" height="40" class="cursor-pointer fill-current" :class="{'text-white': white, 'text-dark': !white}">
		<rect width="100" height="15"></rect>
		<rect y="30" width="100" height="15"></rect>
		<rect y="60" width="100" height="15"></rect>
	</svg>
</template>

<script>
export default {
	props: {
		white: {type: Boolean, default: false},
	}
}
</script>