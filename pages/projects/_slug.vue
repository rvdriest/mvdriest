<template>
	<div>
		<DarkHeader>
			<h1 class="text-white font-semibold text-3xl">{{post.title}}</h1>
			<p class="text-gray-400 my-4 max-w-lg">{{post.description}}</p>
			<div class="flex flex-wrap mt-4">
				<ProjectDetail :title="$t('PROJECT_DETAILS.DATE')" :value="date" class="mr-16 my-4">
					<svg data-name="clock (1)" viewBox="0 0 33.573 33.573" xmlns="http://www.w3.org/2000/svg" class="h-full">
						<g transform="translate(15.486 7.789)" data-name="Group 520">
							<g data-name="Group 519">
								<path transform="translate(-236.17 -118.78)" d="m243.45 130.74-4.681-3.511v-7.151a1.3 1.3 0 1 0-2.6 0v7.8a1.3 1.3 0 0 0 0.52 1.04l5.2 3.9a1.3 1.3 0 0 0 1.56-2.081z" fill="#fff" data-name="Path 509"/>
							</g>
						</g>
						<g data-name="Group 522">
							<g data-name="Group 521">
								<path d="M16.787,0A16.787,16.787,0,1,0,33.573,16.787,16.8,16.8,0,0,0,16.787,0Zm0,30.973A14.186,14.186,0,1,1,30.973,16.787,14.2,14.2,0,0,1,16.787,30.973Z" fill="#fff" data-name="Path 510"/>
							</g>
						</g>
					</svg>
				</ProjectDetail>
				<ProjectDetail :title="$t('PROJECT_DETAILS.CLIENT')" :value="post.client" class="mr-16 my-4">
					<svg viewBox="0 0 34.483 35.073" xmlns="http://www.w3.org/2000/svg" class="h-full">
						<g transform="translate(-89.883 -133.19)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="3" data-name="Group 543">
							<path transform="translate(0 -6.068)" d="m91.383 174.33a15.742 15.742 0 0 1 31.483 0" data-name="Path 511"/>
							<circle transform="translate(98.209 134.69)" cx="8.916" cy="8.916" r="8.916" data-name="Ellipse 25"/>
						</g>
					</svg>
				</ProjectDetail>
				<ProjectDetail :title="$t('PROJECT_DETAILS.THEME')" :value="post.type" class="my-4">
					<svg viewBox="0 0 31.057 36.573" xmlns="http://www.w3.org/2000/svg" class="h-full">
						<g transform="translate(-45.778 -28.833)" fill="none" stroke="#fff" stroke-width="3" data-name="Group 544">
							<path transform="translate(-37.03 -78.592)" d="m94.5 130.56" stroke-linecap="round" stroke-linejoin="round" data-name="Path 512"/>
							<path transform="translate(0)" d="m57.47 51.964-10.192-4.113v-17.518h28.057v17.518l-10.192 4.113" stroke-linecap="round" stroke-linejoin="round" data-name="Path 513"/>
							<path transform="translate(-37.03 -78.592)" d="m94.5 130.56v8.105a3.837 3.837 0 0 0 3.837 3.837 3.837 3.837 0 0 0 3.837-3.837v-8.105" stroke-miterlimit="10" data-name="Path 514"/>
							<line transform="translate(47.278 43.619)" x2="28.057" stroke-linecap="round" stroke-linejoin="round" data-name="Line 1"/>
							<line transform="translate(61.306 30.333)" y2="5.468" stroke-linecap="round" stroke-linejoin="round" data-name="Line 2"/>
							<line transform="translate(54.292 30.333)" y2="5.468" stroke-linecap="round" stroke-linejoin="round" data-name="Line 3"/>
							<line transform="translate(68.321 30.333)" y2="5.468" stroke-linecap="round" stroke-linejoin="round" data-name="Line 4"/>
						</g>
					</svg>
				</ProjectDetail>
			</div>
		</DarkHeader>
		<Container class="py-28">
			<nuxt-content :document="post" class="prose prose-sm lg:prose-lg xl:prose-xl"/>
		</Container>
		<Footer />
	</div>
</template>

<script>
export default {
	async asyncData({ $content, params, error, app }) {
		const post = await $content(app.i18n.locale, params.slug)
			.fetch()
			.catch(() => error({statusCode: 404, message: 'Page not found!'}))

			return {
				post
			}
	},
	computed: {
		date() {
			const options = { year: 'numeric', month: 'long',  day: 'numeric'};
			if(this.$i18n.locale === 'nl') {
				console.log(this.post.createdAt);
				return new Date(this.post.createdAt).toLocaleDateString('nl-NL', options)
			}else if(this.$i18n.locale === 'en') {
				return new Date(this.post.createdAt).toLocaleDateString('en-GB', options)
			}else {
				return new Date(this.post.createdAt).toLocaleDateString('en-GB', options)
			}
		}
	}
}
</script>