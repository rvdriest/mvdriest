<template>
	<Container class="bg-dark text-white py-36">
		<div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-60 gap-12">
			<div>
				<h2 class="font-semibold text-4xl">{{$t('HOW_I_HELP.TITLE')}}</h2>
				<p class="text-gray-300 my-4">{{$t('HOW_I_HELP.DESCRIPTION')}}</p>
				<NuxtLink :to="localePath('/projects')" class="text-primary font-semibold text-lg inline-flex items-center border-b-2 border-transparent hover:border-primary group transition-all duration-300 ease-in-out">{{$t('NAVBAR.SERVICES')}}<img src="~/assets/images/right-arrow.png" class="ml-2 group-hover:-rotate-45 transition-transform ease-in-out duration-500"/></NuxtLink>
			</div>
			<div class="flex space-x-20">
				<div>
					<p class="text-primary font-semibold">{{$t('SUBJECT_HEADERS.DESIGN')}}</p>
					<ul class="space-y-2 mt-2">
						<li><NuxtLink :to="localePath('/projects')" class="font-semibold">{{$t('SUBJECT_TYPES.WEB_DESIGN')}}</NuxtLink></li>
						<li><NuxtLink :to="localePath('/projects')" class="font-semibold">{{$t('SUBJECT_TYPES.PACKAGING_DESIGN')}}</NuxtLink></li>
						<li><NuxtLink :to="localePath('/projects')" class="font-semibold">{{$t('SUBJECT_TYPES.BRANDING')}}</NuxtLink></li>
						<li><NuxtLink :to="localePath('/projects')" class="font-semibold">{{$t('SUBJECT_TYPES.PROTOTYPING')}}</NuxtLink></li>
					</ul>
				</div>
				<div>
					<p class="text-primary font-semibold">{{$t('SUBJECT_HEADERS.VIDEO')}}</p>
					<ul class="space-y-2 mt-2">
						<li><NuxtLink :to="localePath('/projects')" class="font-semibold">{{$t('SUBJECT_TYPES.VIDEO_EDITING')}}</NuxtLink></li>
					</ul>
				</div>
			</div>
		</div>
	</Container>
</template>