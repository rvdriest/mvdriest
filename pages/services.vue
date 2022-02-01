<template>
	<div>
		<DarkHeader small>
			<h1 class="text-white font-semibold text-3xl">{{$t('NAVBAR.SERVICES')}}</h1>
			<p class="text-gray-400 my-4 max-w-lg">{{$t('SERVICES.INFO')}}</p>
		</DarkHeader>
		<Container class="py-24">
			<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
				<ServiceCard :title="$t('SUBJECT_TYPES.WEB_DESIGN')" :content="$t('SERVICES.WEB_DESIGN_INFO')">
					<svg viewBox="0 0 62.409 58.076" xmlns="http://www.w3.org/2000/svg" class="h-14">
						<path transform="translate(0 -16.453)" d="M4.377,52.621V21.3a.472.472,0,0,1,.47-.471H51a.472.472,0,0,1,.47.471v23.81h4.377V21.3A4.853,4.853,0,0,0,51,16.453H4.848A4.853,4.853,0,0,0,0,21.3v31.32A4.853,4.853,0,0,0,4.848,57.47h15.47v6.284H17.879a2.189,2.189,0,0,0,0,4.377H37.968a2.189,2.189,0,1,0,0-4.377H35.527V57.47h7.421V53.093H4.848A.472.472,0,0,1,4.377,52.621Z" fill="#f5ff00" data-name="Path 10"/>
						<path transform="translate(-301.28 -223.49)" d="m360.89 254.89h-11.137a2.8 2.8 0 0 0-2.794 2.794v21.092a2.8 2.8 0 0 0 2.794 2.795h11.138a2.8 2.8 0 0 0 2.794-2.795v-21.092a2.8 2.8 0 0 0-2.795-2.794zm-10.648 3.283h10.157v18.314h-10.157zm5.078 21.912a1.18 1.18 0 0 1-0.558-0.154 1.093 1.093 0 1 1 0.558 0.154z" fill="#f5ff00" data-name="Path 11"/>
					</svg>
				</ServiceCard>
				<ServiceCard :title="$t('SUBJECT_TYPES.BRANDING')" :content="$t('SERVICES.BRANDING_INFO')">
					<svg viewBox="0 0 43.036 58.072" xmlns="http://www.w3.org/2000/svg" class="h-14">
						<g fill="none" data-name="Path 550">
							<path d="M0,0H43.036V58.072L21.451,40.3,0,58.072Z"/>
							<path d="m5 5v42.437l16.441-13.621 16.595 13.663v-42.479h-33.036m-5-5h43.036v58.072l-21.585-17.772-21.451 17.772v-58.072z" fill="#f5ff00"/>
						</g>
					</svg>
				</ServiceCard>
				<ServiceCard :title="$t('SUBJECT_TYPES.VIDEO_EDITING')" :content="$t('SERVICES.VIDEO_EDITING_INFO')">
					<svg viewBox="0 0 50 58" xmlns="http://www.w3.org/2000/svg" class="h-14">
						<g transform="translate(50) rotate(90)" fill="none" data-name="Polygon 4">
							<path d="M24.675,7.457a5,5,0,0,1,8.65,0l20.32,35.034A5,5,0,0,1,49.32,50H8.68a5,5,0,0,1-4.325-7.509Z"/>
							<path d="m29 9.9658c-1.9073e-6 0-5.722e-6 0 0-1.1444e-5l-20.32 35.034h40.64l-20.32-35.034m-3.8147e-6 -5c1.6809 0 3.3618 0.83047 4.3252 2.4914l20.32 35.034c1.9333 3.3333-0.47174 7.5086-4.3252 7.5086h-40.64c-3.8534 0-6.2585-4.1753-4.3252-7.5086l20.32-35.034c0.96334-1.6609 2.6442-2.4914 4.3251-2.4914z" fill="#f5ff00"/>
						</g>
					</svg>
				</ServiceCard>
				<ServiceCard :title="$t('SUBJECT_TYPES.PACKAGING_DESIGN')" :content="$t('SERVICES.PACKAGING_DESIGN_INFO')">
					<svg viewBox="0 0 64.936 58.076" xmlns="http://www.w3.org/2000/svg" class="h-14">
						<g transform="translate(-2 -3)" fill="#f5ff00">
							<path transform="translate(0)" d="M60.442,3H8.494A6.473,6.473,0,0,0,2,9.453v6.453a6.446,6.446,0,0,0,3.247,5.55V54.623a6.473,6.473,0,0,0,6.494,6.453H57.2a6.473,6.473,0,0,0,6.494-6.453V21.455a6.446,6.446,0,0,0,3.247-5.55V9.453A6.473,6.473,0,0,0,60.442,3ZM8.494,9.453H60.442v6.453H8.494Zm3.247,45.17V22.359H57.2V54.623Z" data-name="Path 552"/>
							<path transform="translate(13.577 17.816)" d="M8,11H33.781v6.445H8Z" data-name="Path 553"/>
						</g>
					</svg>

				</ServiceCard>
				<ServiceCard :title="$t('SUBJECT_TYPES.PROTOTYPING')" :content="$t('SERVICES.PROTOTYPING_INFO')">
					<svg viewBox="0 0 55 46" xmlns="http://www.w3.org/2000/svg" class="h-14">
						<g fill="none" data-name="Polygon 6">
							<path d="M27.5,0,55,46H0Z"/>
							<path d="m27.5 9.7442-18.686 31.256h37.371l-18.686-31.256m0-9.7442 27.5 46h-55l27.5-46z" fill="#f5ff00"/>
						</g>
					</svg>
				</ServiceCard>
			</div>
		</Container>
		<Footer />
	</div>
</template>

<script>
export default {
	head() {
    return {
      title: this.$t('PAGE_TITLE.SERVICES'),
    }
  },
}
</script>