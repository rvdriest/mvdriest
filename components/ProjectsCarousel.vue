<template>
	<div class="relative h-full z-10 -mx-20">
		<div class="overflow-y-hidden flex space-x-8 h-full -mx-6 px-[6.5rem]">
			<div class="space-y-8 relative flex-1 top-16 animate-infinite-scroll" :style="{height: scrollableListHeight}">
				<ProjectCarouselCard v-for="(project, index) in firstColumn" :key="index" :project="project"/>
			</div>
			<div class="space-y-8 relative flex-1 top-32 animate-infinite-scroll" :style="{height: scrollableListHeight}">
				<ProjectCarouselCard v-for="(project, index) in secondColumn" :key="index" :project="project"/>
			</div>
		</div>
		<div class="absolute top-0 left-0 right-0 w-full h-10 bg-gradient-to-b from-dark to-transparent -mr-20"></div>
		<div class="absolute bottom-0 left-0 right-0 w-full h-36 bg-gradient-to-t from-dark to-transparent -mr-40"></div>
	</div>
</template>

<script>
export default {
	props: {
		projects: {
			type: Array,
			required: true,
		},
	},
	computed: {
		firstColumn() {
			// get all odd projects
			const firstColumnProjects = this.projects.filter((project, index) => index % 2 === 0);
			return [...firstColumnProjects, ...firstColumnProjects]
		},
		secondColumn() {
			// get all even projects
			const secondColumnProjects = this.projects.filter((project, index) => index % 2 === 1);
			return [...secondColumnProjects, ...secondColumnProjects]
		},
		scrollableListHeight() {
			const amountOfProjects = this.projects.length;
			const heightOfProject = 384;

			return `calc((${heightOfProject}px * ${amountOfProjects}) + ((${amountOfProjects} - 1) * 2rem) + 2rem)`;
		},
	}
}
</script>