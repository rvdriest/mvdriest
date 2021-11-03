<template>
	<div>
		<DarkHeader>
			<h1 class="text-white font-semibold text-3xl">{{$t('PORTFOLIO')}}</h1>
			<p class="text-gray-400 my-4 max-w-lg">{{$t('PORTFOLIO_DESCRIPTION')}}</p>
			<div class="flex items-center flex-wrap">
				<p class="text-white font-medium mr-4">{{$t('SUBJECTS')}}:</p>
				<ul class="flex flex-wrap">
					<li class="mr-4 my-2"><CatagoryButton :active="isSelected('ALL')" @click="setSelected('ALL')">{{$t('SUBJECT_TYPES.ALL')}}</CatagoryButton></li>
					<li class="mr-4 my-2"><CatagoryButton :active="isSelected('WEB')" @click="setSelected('WEB')">{{$t('SUBJECT_TYPES.WEB_DESIGN')}}</CatagoryButton></li>
					<li class="mr-4 my-2"><CatagoryButton :active="isSelected('PACKAGING')" @click="setSelected('PACKAGING')">{{$t('SUBJECT_TYPES.PACKAGING_DESIGN')}}</CatagoryButton></li>
					<li class="mr-4 my-2"><CatagoryButton :active="isSelected('BRANDING')" @click="setSelected('BRANDING')">{{$t('SUBJECT_TYPES.BRANDING')}}</CatagoryButton></li>
					<li class="mr-4 my-2"><CatagoryButton :active="isSelected('VIDEO')" @click="setSelected('VIDEO')">{{$t('SUBJECT_TYPES.VIDEO_EDITING')}}</CatagoryButton></li>
				</ul>
			</div>
		</DarkHeader>
		<div>
			<Container class="py-24">
				<h2 class="text-3xl font-semibold mb-8">Projecten</h2>
				<ProjectsGrid>
					<ProjectCard v-for="post in filteredPosts" :key="post.slug" :post="post"/>
				</ProjectsGrid>
			</Container>
		</div>
		<Footer />
	</div>
</template>

<script>
export default {
	async asyncData({ $content, app, error }) {
		const posts = await $content(app.i18n.locale)
			.only(['catagory', 'title', 'type', 'slug', 'image'])
			.sortBy('createdAt', 'asc')
			.fetch()
			.catch(() => error({statusCode: 404, message: 'Page not found!'}))

			return {
				posts
			}
	},
	data() {
		return {
			selected: 'ALL', // ALL, WEB, PACKAGING, BRANDING, VIDEO
		}
	},
	computed: {
		filteredPosts() {
			return this.posts.filter(this.filterPost);
		}
	},
	methods: {
		isSelected(selected) {
			return this.selected === selected
		},
		setSelected(key) {
			this.selected = key;
		},
		filterPost(post) {
			if(this.selected === 'ALL') return true;

			return post.catagory === this.selected;
		}
	}
}
</script>