<template>
	<button class=" py-2 px-4 whitespace-nowrap" :class="{'bg-primary text-dark': active, 'bg-primary-dark text-primary': !active}" v-on="$listeners">
		<slot></slot>
	</button>
</template>

<script>
export default {
	props: {
		active: {type: Boolean, default: false},
	}
}
</script>