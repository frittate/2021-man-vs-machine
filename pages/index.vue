<template>
  <div class="md:max-w-xl lg:max-w-5xl text-white font-inter">
    <!-- <Navigation :lang="currentLanguage" /> -->
    <div class="flex flex-col items-center">
      <h1 class="title text-4xl font-black lg:text-6xl block pt-16 bold leading-tight">
        {{ index.h1 }}
      </h1>
      <h2 class="title italic text-2xl lg:text-3xl mb-4">
        {{ index.h2 }}
      </h2>
      <h3 class="text-gray-400 text-lg">
        {{ index.h3 }}
      </h3>
      <div class="pt-16">
        <img src="/man-vs-machine-cover.jpg" alt="">
      </div>
    </div>

    <div class="pt-16 px-4 text-lg">
      <p class="uppercase font-black text-3xl mb-4">
        {{ blurb.title }}
      </p>
      <nuxt-content :document="blurb" class="mb-12 prose text-white" />
    </div>
    <!--  <div class="px-4 text-lg">
      <p class="uppercase font-black text-3xl mb-4">
        {{ testimonials.title }}
      </p>
      <nuxt-content :document="testimonials" class="prose" />
    </div> -->

    <GetBlock />
    <div class="pt-16 px-4 flex flex-col text-lg">
      <p class="uppercase font-black text-3xl mb-8">
        {{ about.title }}
      </p>
      <nuxt-content :document="about" class="mb-12 prose text-white" />
    </div>
  </div>
</template>

<script>
// import Navigation from '@/components/Navigation'
import GetBlock from '@/components/GetBlock'

export default {
  components: {
    GetBlock
    // Navigation
  },
  async fetch () {
    this.blurb = await this.$content(`${this.currentLanguage}/blurb`).fetch()
    this.testimonials = await this.$content(`${this.currentLanguage}/testimonials`).fetch()
    this.about = await this.$content(`${this.currentLanguage}/about`).fetch()
    this.index = await this.$content(`${this.currentLanguage}/index`).fetch()
  },
  data () {
    return {
      about: {},
      blurb: {},
      testimonials: {},
      index: {}
    }
  },
  computed: {
    currentLanguage () {
      return this.$route.query && this.$route.query.lang === 'de' ? 'de' : 'en'
    }
  },
  watch: {
    '$route.query': '$fetch'
  },
  head () {
    return {
      title: 'Man vs Machine | A collection of short stories | Ragnar Martinson'
    }
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

.font-inter {
  font-family: 'Inter', sans-serif;
}

.font-sans {
  font-family: 'Raleway', sans-serif;
}

</style>
