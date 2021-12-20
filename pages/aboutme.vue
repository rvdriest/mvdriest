<template>
	<div>
		<DarkHeader>
			<h1 class="text-white">{{$t('NAVBAR.ABOUT_ME')}}</h1>
			<h2 class="text-white font-semibold text-3xl my-4">{{$t('ABOUT_ME.DRIVEN_BY_CREATIVITY')}}</h2>
			<p class="text-gray-400 max-w-lg">{{$t('ABOUT_ME.DRIVEN_BY_CREATIVITY_INFO')}}</p>
		</DarkHeader>
		<section class="h-72 w-full -mt-16">
			<Container>
				<div class="w-full bg-primary h-72 flex items-center justify-center px-4 relative">
					<div class="absolute inset-0 w-full h-full">
						<img src="~/assets/images/martijn-2.jpg" alt="Martijn" class="w-full h-full object-cover">
					</div>
					<h2 class="text-white font-semibold text-2xl text-center z-10">{{$t('ABOUT_ME.MY_NAME')}}</h2>
				</div>
			</Container>
		</section>
		<section class="my-24">
			<Container>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-3">
					<div>
						<h3 class="font-semibold text-xl mb-3">{{$t('ABOUT_ME.HOW_I_STARTED')}}</h3>
						<p class="text-gray-700">{{$t('ABOUT_ME.HOW_I_STARTED_DESCRIPTION')}}</p>
					</div>
					<div>
						<h3 class="font-semibold text-xl mb-3">{{$t('ABOUT_ME.MY_SPECIALITIES')}}</h3>
						<p class="text-gray-700">{{$t('ABOUT_ME.MY_SPECIALITIES_DESCIPRTION')}}</p>
					</div>
				</div>
			</Container>
		</section>
		<section class="mb-24">
			<Container>
				<div class="grid grid-cols-1 lg:grid-cols-2">
					<div class="bg-dark text-white px-16 py-12">
						<h2 class="font-semibold text-3xl mb-11">{{$t('ABOUT_ME.FUN_FACTS')}}</h2>
						<ul class="space-y-7">
							<li><Fact icon="run">{{$t('ABOUT_ME.GOES_TO_EXTREMES')}}</Fact></li>
							<li><Fact icon="coffee">{{$t('ABOUT_ME.LOVES_GOOD_COFFEE')}}</Fact></li>
							<li><Fact icon="football">{{$t('ABOUT_ME.FOOTBALL_FAVORITE_SPORT')}}</Fact></li>
							<li><Fact icon="tennis">{{$t('ABOUT_ME.PLAY_REGULARLY_TENNIS')}}</Fact></li>
							<li><Fact icon="design">{{$t('ABOUT_ME.DESIGN_IS_MY_PASSION')}}</Fact></li>
						</ul>
					</div>
					<div>
						<img src="~/assets/images/martijn.png" alt="Martijn van Driest" class="w-full h-full object-cover"/>
					</div>
				</div>
			</Container>
		</section>
		<Footer/>
	</div>
</template>