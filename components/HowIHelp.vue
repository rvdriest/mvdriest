<template>
	<Container class="bg-dark text-white py-36">
		<div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-60 gap-12">
			<div>
				<h2 class="font-semibold text-4xl">Hoe kan ik u helpen?</h2>
				<p class="text-gray-300 my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
				<NuxtLink :to="localePath('/projects')" class="text-primary font-semibold text-lg inline-flex items-center border-b-2 border-transparent hover:border-primary group transition-all duration-300 ease-in-out">Diensten<img src="~/assets/images/right-arrow.png" class="ml-2 group-hover:-rotate-45 transition-transform ease-in-out duration-500"/></NuxtLink>
			</div>
			<div class="flex space-x-20">
				<div>
					<p class="text-primary font-semibold">Design</p>
					<ul class="space-y-2 mt-2">
						<li><NuxtLink :to="localePath('/projects')" class="font-semibold">Web design</NuxtLink></li>
						<li><NuxtLink :to="localePath('/projects')" class="font-semibold">Packaging design</NuxtLink></li>
						<li><NuxtLink :to="localePath('/projects')" class="font-semibold">Branding</NuxtLink></li>
						<li><NuxtLink :to="localePath('/projects')" class="font-semibold">Prototyping</NuxtLink></li>
					</ul>
				</div>
				<div>
					<p class="text-primary font-semibold">Video</p>
					<ul class="space-y-2 mt-2">
						<li><NuxtLink :to="localePath('/projects')" class="font-semibold">Video editing</NuxtLink></li>
					</ul>
				</div>
			</div>
		</div>
	</Container>
</template>