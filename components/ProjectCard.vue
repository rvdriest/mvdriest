<template>
	<div>
		<div class="h-80">
			<img :src="post.image" :alt="post.title" class="w-full h-full object-cover rounded-md"/>
		</div>
		<p class="text-gray-500 font-medium mt-5">{{post.type}}</p>
		<h3 class="font-semibold text-2xl mt-2 mb-3">{{post.title}}</h3>
		<NuxtLink :to="localePath(`/projects/${post.slug}`)" class="bg-secondary text-white px-6 py-2 inline-block rounded font-medium">{{$t('SEE_MORE')}}</NuxtLink>
	</div>
</template>

<script>
export default {
	props: {
		post: {type: Object, required: true}
	}
}
</script>