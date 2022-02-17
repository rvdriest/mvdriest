<template>
	<Container class="text-white py-16 bg-dark">
		<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 4xl:grid-cols-5 md:gap-20">
			<div class="hidden 4xl:block">
				<Logo />
			</div>
			<div class="mb-8 xl:mb-0">
				<h3 class="text-2xl font-semibold">{{$t('FOOTER.CONTACT')}}</h3>
				<ul class="space-y-2 mt-3">
					<li><a href="mailto:martijn.vandriest@gmail.com" class="hover:underline">martijn.vandriest@gmail.com</a></li>
				</ul>
			</div>
			<div class="mb-8 xl:mb-0">
				<h3 class="text-2xl font-semibold">{{$t('FOOTER.PAGES')}}</h3>
				<ul class="space-y-2 mt-3">
					<li><NuxtLink :to="localePath('/')" class="hover:underline">{{$t('FOOTER.HOMEPAGE')}}</NuxtLink></li>
					<li><NuxtLink :to="localePath('/services')" class="hover:underline">{{$t('NAVBAR.SERVICES')}}</NuxtLink></li>
					<li><NuxtLink :to="localePath('/aboutme')" class="hover:underline">{{$t('NAVBAR.ABOUT_ME')}}</NuxtLink></li>
					<li><NuxtLink :to="localePath('/projects')" class="hover:underline">{{$t('NAVBAR.PORTFOLIO')}}</NuxtLink></li>
					<li><NuxtLink :to="localePath('/contact')" class="hover:underline">{{$t('NAVBAR.CONTACT')}}</NuxtLink></li>
				</ul>
			</div>
			<div class="mb-8 md:mb-0">
				<h3 class="text-2xl font-semibold">{{$t('FOOTER.OTHER')}}</h3>
				<ul class="space-y-2 mt-3">
					<li><a href="/CV.pdf" target="_blank" class="hover:underline">{{$t('FOOTER.MY_CV')}}</a></li>
				</ul>
			</div>
			<div>
				<div class="flex space-x-6">
					<a href="https://www.behance.net/martijnvandri" target="_blank">
						<svg viewBox="0 0 32.705 20.579" xmlns="http://www.w3.org/2000/svg" class="h-6">
							<g transform="translate(-10 -117.5)" fill="#f5ff00" data-name="behance logo">
								<path transform="translate(0)" d="M19.686,117.5a12.659,12.659,0,0,1,2.678.259,5.8,5.8,0,0,1,2.075.851,4.011,4.011,0,0,1,1.342,1.573,5.538,5.538,0,0,1,.474,2.419,4.531,4.531,0,0,1-.7,2.594,5.157,5.157,0,0,1-2.092,1.7,4.96,4.96,0,0,1,2.842,1.917,6.3,6.3,0,0,1,.333,5.993A5.254,5.254,0,0,1,25,136.67a7.243,7.243,0,0,1-2.334,1.066,10.482,10.482,0,0,1-2.7.344H10V117.5Zm-.575,8.327a3.265,3.265,0,0,0,1.99-.575,2.176,2.176,0,0,0,.778-1.872,2.391,2.391,0,0,0-.259-1.184,1.94,1.94,0,0,0-.693-.722,2.89,2.89,0,0,0-.992-.361,6.515,6.515,0,0,0-1.167-.1h-4.24v4.815Zm.259,8.733a6.2,6.2,0,0,0,1.269-.13A3.008,3.008,0,0,0,21.7,134a2.165,2.165,0,0,0,.733-.823,2.851,2.851,0,0,0,.276-1.325,2.669,2.669,0,0,0-.891-2.261,3.815,3.815,0,0,0-2.362-.677H14.527v5.649Z" data-name="Path 545"/>
								<path transform="translate(-298.37 -82)" d="M331.3,216.133a4.195,4.195,0,0,0,4.781.271,2.555,2.555,0,0,0,1.094-1.314h3.6a6.832,6.832,0,0,1-2.65,3.834,7.82,7.82,0,0,1-4.324,1.156,8.437,8.437,0,0,1-3.169-.564,6.493,6.493,0,0,1-2.391-1.6,7.174,7.174,0,0,1-1.511-2.481,9.07,9.07,0,0,1-.536-3.169,8.641,8.641,0,0,1,.547-3.112,7.2,7.2,0,0,1,3.964-4.15,7.683,7.683,0,0,1,3.1-.6,7.081,7.081,0,0,1,3.315.733,6.692,6.692,0,0,1,2.323,1.973,8.228,8.228,0,0,1,1.314,2.825,10.42,10.42,0,0,1,.288,3.315H330.3A4.139,4.139,0,0,0,331.3,216.133Zm4.629-7.843a2.883,2.883,0,0,0-2.233-.806,3.582,3.582,0,0,0-1.629.333,3.068,3.068,0,0,0-1.037.823,3.023,3.023,0,0,0-.547,1.037,4.489,4.489,0,0,0-.186.981h6.659A4.78,4.78,0,0,0,335.931,208.29Z" data-name="Path 546"/>
								<rect transform="translate(31.227 118.54)" width="8.322" height="2.306" data-name="Rectangle 1008"/>
							</g>
						</svg>
						<span class="sr-only">Behance</span>
					</a>
					<a href="https://www.linkedin.com/in/martijnvandriest/" target="_blank">
						<svg viewBox="0 0 24.238 24.238" xmlns="http://www.w3.org/2000/svg" class="h-6">
							<path transform="translate(.084 .075)" d="M24.148,24.163h.006V15.273c0-4.349-.936-7.7-6.02-7.7a5.278,5.278,0,0,0-4.754,2.613h-.071V7.98H8.489V24.162h5.019V16.149c0-2.11.4-4.15,3.013-4.15,2.574,0,2.613,2.408,2.613,4.285v7.878Z" fill="#f5ff00" data-name="Path 542"/>
							<path transform="translate(.004 .079)" d="M.4,7.977H5.421V24.159H.4Z" fill="#f5ff00" data-name="Path 543"/>
							<path transform="translate(0)" d="M2.911,0A2.924,2.924,0,1,0,5.821,2.911,2.911,2.911,0,0,0,2.911,0Z" fill="#f5ff00" data-name="Path 544"/>
						</svg>

						<span class="sr-only">Linkedin</span>
					</a>
					<a href="https://www.instagram.com/mvdesigns__/" target="_blank">
						<svg viewBox="0 0 24.565 24.57" xmlns="http://www.w3.org/2000/svg" class="h-6">
							<path transform="translate(-.449)" d="M24.951,7.224a8.978,8.978,0,0,0-.571-2.981,6.294,6.294,0,0,0-3.6-3.595A9,9,0,0,0,17.8.077C16.489.014,16.072,0,12.736,0S8.983.014,7.672.072A8.981,8.981,0,0,0,4.692.643,6,6,0,0,0,2.512,2.064,6.049,6.049,0,0,0,1.1,4.238,9,9,0,0,0,.525,7.219C.463,8.534.449,8.952.449,12.288s.014,3.753.072,5.064a8.977,8.977,0,0,0,.571,2.981,6.293,6.293,0,0,0,3.595,3.595,9,9,0,0,0,2.981.571c1.31.058,1.728.072,5.064.072s3.753-.014,5.064-.072a8.976,8.976,0,0,0,2.981-.571,6.285,6.285,0,0,0,3.6-3.595,9.008,9.008,0,0,0,.571-2.981c.058-1.31.072-1.728.072-5.064s0-3.753-.062-5.064ZM22.739,17.255a6.735,6.735,0,0,1-.422,2.28,4.076,4.076,0,0,1-2.333,2.333,6.758,6.758,0,0,1-2.28.422c-1.3.058-1.685.072-4.963.072s-3.672-.014-4.963-.072a6.731,6.731,0,0,1-2.28-.422,3.781,3.781,0,0,1-1.411-.917A3.82,3.82,0,0,1,3.17,19.54a6.759,6.759,0,0,1-.422-2.28c-.058-1.3-.072-1.685-.072-4.963s.014-3.672.072-4.963a6.731,6.731,0,0,1,.422-2.28,3.734,3.734,0,0,1,.922-1.411A3.814,3.814,0,0,1,5.5,2.726,6.763,6.763,0,0,1,7.783,2.3c1.3-.058,1.685-.072,4.963-.072s3.672.014,4.963.072a6.734,6.734,0,0,1,2.28.422,3.778,3.778,0,0,1,1.411.917,3.819,3.819,0,0,1,.917,1.411,6.762,6.762,0,0,1,.422,2.28c.058,1.3.072,1.685.072,4.963s-.014,3.662-.072,4.958Zm0,0" fill="#f5ff00" data-name="Path 539"/>
							<path transform="translate(-118.97 -118.52)" d="m131.26 124.5a6.312 6.312 0 1 0 6.312 6.312 6.313 6.313 0 0 0-6.312-6.312zm0 10.406a4.094 4.094 0 1 1 4.094-4.094 4.095 4.095 0 0 1-4.094 4.094z" fill="#f5ff00" data-name="Path 540"/>
							<path transform="translate(-345.07 -84.349)" d="m365.4 90.075a1.474 1.474 0 1 1-1.474-1.474 1.474 1.474 0 0 1 1.474 1.474z" fill="#f5ff00" data-name="Path 541"/>
						</svg>

						<span class="sr-only">Instagram</span>
					</a>
				</div>
			</div>
		</div>
		<div>
			<div class="w-full h-[1px] bg-gray-500 mt-16"></div>
			<div class="flex justify-between items-center flex-wrap mt-4">
				<p>&copy; 2021 Martijn van Driest</p>
			</div>
		</div>
	</Container>
</template>