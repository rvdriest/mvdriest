<template>
	<Container class="py-28">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-32">
			<div class="grid grid-cols-1 sm:grid-cols-2 gap-5 ">
				<div class="sm:col-span-2">
					<h2 class="font-semibold text-2xl mb-4">{{$t('ABOUT_ME.WHO_AM_I')}}</h2>
					<p class="text-gray-600">{{$t('ABOUT_ME.INTRODUCTION')}}</p>
				</div>
				<div class="mt-4 sm:mt-0">
					<img src="~/assets/icons/book.svg" alt="Brush" class="mb-4 w-16 h-16 p-2">
					<h2 class="font-semibold text-xl mb-4">{{$t('ABOUT_ME.STUDIOUS')}}</h2>
					<p class="text-gray-600">{{$t('ABOUT_ME.STUDIOUS_DESCRIPTION')}}</p>
				</div>
				<div>
					<img src="~/assets/icons/pushup.svg" alt="Brush" class="mb-4 w-16 h-16">
					<h2 class="font-semibold text-xl mb-4">{{$t('ABOUT_ME.DRIVEN')}}</h2>
					<p class="text-gray-600">{{$t('ABOUT_ME.DRIVEN_DESCRIPTION')}}</p>
				</div>
			</div>
			<div class="flex items-center justify-center">
				<img src="~/assets/images/boxes.png" alt="Boxes">
			</div>
		</div>
	</Container>
</template>