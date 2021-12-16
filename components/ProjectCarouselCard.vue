<template>
	<div class="group aspect-w-6 aspect-h-8 w-full hover:scale-105 cursor-pointer transition-transform relative" @click="$router.push(`/projects/${project.slug}`)">
		<img :src="project.image" :alt="project.title" class="w-full h-full object-cover rounded-md"/>
		<div class="hidden group-hover:flex justify-center items-center absolute inset-0 bg-dark opacity-40"></div>
		<div class="invisible overflow-hidden group-hover:visible absolute inset-0">
			<div class="h-full text-white flex flex-col justify-end items-start p-8">
				<div class="flex flex-col transform -translate-x-14 translate-y-14 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-300 ease-in-out">
					<span class="text-xl">{{ project.type }}</span>
					<span class="text-2xl font-bold">{{ project.title }}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		project: {
			type: Object,
			required: true,
		},
	}
}
</script>