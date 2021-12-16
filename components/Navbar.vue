<template>
	<nav id="navbar" class="flex md:items-center justify-between flex-col md:flex-row top-0 w-full transition-transform py-6 px-8 lg:px-32 z-50" :class="navClasses">
		<div class="flex justify-between items-center md:mb-0" :class="{'mb-8': open}">
			<div class="lg:w-36 w-28">
				<NuxtLink :to="localePath('/')">
					<Logo />
				</NuxtLink>
			</div>
			<div class="md:hidden inline-block" @click="toggle">
				<Hamburger :white="open || sticky || smalldark"/>
			</div>
		</div>
		<ul class="md:flex-1 md:flex md:justify-center lg:space-x-16 md:space-x-10 md:items-center space-y-10 md:space-y-0" :class="{'block': open, 'hidden': !open}">
			<li>
				<NuxtLink :to="localePath('/services')" class="text-white font-semibold md:py-2" active-class="text-primary border-b-2 border-primary">{{$t('NAVBAR.SERVICES')}}</NuxtLink>
			</li>
			<li>
				<NuxtLink :to="localePath('/aboutme')" class="text-white font-semibold md:py-2" active-class="text-primary border-b-2 border-primary">{{$t('NAVBAR.ABOUT_ME')}}</NuxtLink>
			</li>
			<li>
				<NuxtLink :to="localePath('/projects')" class="text-white font-semibold md:py-2" active-class="text-primary border-b-2 border-primary">{{$t('NAVBAR.PORTFOLIO')}}</NuxtLink>
			</li>
			<li class="md:hidden">
				<NuxtLink :to="localePath('/contact')" class="text-white font-semibold md:py-2" active-class="text-primary border-b-2 border-primary">{{$t('NAVBAR.CONTACT')}}</NuxtLink>
			</li>
		</ul>
		<NuxtLink :to="localePath('/contact')" class="text-white font-semibold border-4 border-white lg:w-36 w-28 text-center py-2 rounded hover:bg-white hover:text-dark transition-colors hidden md:inline-block">{{$t('NAVBAR.CONTACT')}}</NuxtLink>
		
	</nav>
</template>

<script>
export default {
	props: {
		smalldark: {type: Boolean, default: false},
	},
	data() {
		return {
			open: false,
			sticky: false,
		}
	},
	computed: {
		navClasses() {
			// :class="{'bg-dark fixed animate-slide-down': sticky, 'absolute': !sticky, 'bg-dark': open || smalldark, 'md:bg-transparent': smalldark && !sticky && !open}"
			const classes = [];

			if(this.sticky) {
				['bg-dark', 'fixed', 'animate-slide-down'].forEach(c => classes.push(c));
			} else {
				['absolute'].forEach(c => classes.push(c));
			}

			if(this.open || this.smalldark) {
				classes.push('bg-dark');
			}

			if(this.smalldark && !this.sticky && !this.open) {
				classes.push('md:bg-transparent');
			}
			return classes;
		}
	},
	mounted() {
		// console.log(this.$el);
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll(event) {
      const navbar = this.$el;
      if(window.scrollY >= navbar.clientHeight) {
        this.sticky = true;
      }else {
        this.sticky = false;
      }
    },
		toggle() {
			this.open = !this.open;
		}
  }
}
</script>

<style>

</style>