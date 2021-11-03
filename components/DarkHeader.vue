<template>
	<header class="max-h-screen bg-dark" :class="{'h-[32rem]': small, 'h-[38rem]': !small}">
		<Navbar smalldark/>
		<Container class="flex flex-col justify-center h-full">
			<slot></slot>
		</Container>
	</header>
</template>

<script>
export default {
	props: {
		small: { type: Boolean, default: false,}
	}
}
</script>
