<template>
  <div>
    <header class="max-h-screen h-[42rem] lg:h-screen min-h-[35rem] bg-dark flex flex-col relative">
      <!-- <Navbar id="navbar" :sticky="fixedNavbar" class="px-8 py-6 lg:px-20"/> -->
      <Navbar transparent/>
      <div class="flex h-full px-8 lg:px-32">
        <div class="flex-1 hidden lg:block">
          <ProjectsCarousel :projects="posts"/>
        </div>
        <div class="flex-1 flex flex-col justify-center h-full text-left px-8 lg:px-20">
          <p class="text-primary mb-8 font-medium text-xl">{{$t('WELCOME')}}</p>
          <h1 class="text-white text-3xl md:text-4xl lg:text-5xl mb-8 lg:leading-snug">{{$t('HEADER_TITLE')}}</h1>
          <p class="text-white max-w-md">
            {{$t('HEADER_NAME')}}
            {{$t('HEADER_PLEASURE_TO_MEET')}}
            {{$t('IM_A')}}
              <span class="text-primary">{{$t('GRAPHIC_DESIGNER')}}</span>
            {{$t('BASED_IN')}} 
          </p>
        </div>
      </div>
    </header>
    <WhoAmI />
    <HowIHelp />
    <Container class="py-24">
      <div class="flex items-center flex-wrap mb-4">
        <h2 class="text-3xl font-semibold mr-4 mb-4">Projecten</h2>
        <NuxtLink :to="localePath('/projects')" class="px-8 h-12 rounded flex border-[3px] items-center group whitespace-nowrap mb-4">Zie alle <svg viewBox="0 0 19.538 13.886" xmlns="http://www.w3.org/2000/svg" class="h-3 ml-2 group-hover:-rotate-45 transition-transform ease-in-out">
<path transform="translate(.25 -4.424)" d="M12.82,4.875a.675.675,0,0,0-.959.95l4.865,4.865H.672A.668.668,0,0,0,0,11.362a.676.676,0,0,0,.672.681H16.725L11.86,16.9a.689.689,0,0,0,0,.959.672.672,0,0,0,.959,0l6.017-6.017a.661.661,0,0,0,0-.95Z" fill="gray" stroke="gray" stroke-width=".5"/>
</svg></NuxtLink>
      </div>
      <ProjectsGrid>
        <ProjectCard v-for="post in posts" :key="post.slug" :post="post"/>
      </ProjectsGrid>
    </Container>
    <Footer />
  </div>
</template>

<script>
export default {
    async asyncData({ $content, app, error }) {
        const posts = await $content(app.i18n.locale)
            .only(["catagory", "title", "type", "slug", "image"])
            .sortBy("createdAt", "asc")
            .limit(4)
            .fetch()
            .catch(() => error({ statusCode: 404, message: "Page not found!" }));
        return {
            posts
        };
    },
    data() {
        return {
            fixedNavbar: false,
        };
    },
}
</script>
