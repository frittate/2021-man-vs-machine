<template>
  <div class="md:max-w-xl lg:max-w-5xl text-white font-inter">
    <Navigation :lang="currentLanguage" />
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
        <img src="/man-vs-machine-cover_2.jpg" alt="">
      </div>
    </div>
    <div class="pt-16 px-4 text-lg">
      <nuxt-content :document="blurb" class="mb-12" />
      <nuxt-content :document="testimonials" class="" />
    </div>
    <div class="pt-16 px-4 flex flex-col items-center">
      <p class="uppercase text-3xl mb-8">
        {{ index.get }}
      </p>
      <Button v-for="button in buttons" :key="button.title" :href="button.href" :title="button.title" />
    </div>
    <div class="pt-16 px-4 flex flex-col items-center">
      <p class="uppercase text-3xl mb-8">
        {{ index.aboutTitle }}
      </p>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button'
import Navigation from '@/components/Navigation'

export default {
  components: {
    Button,
    Navigation
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
      index: {},
      buttons: [
        {
          title: 'Amazon DE',
          href: 'www.amazon.de'
        },
        {
          title: 'Amazon UK',
          href: 'www.amazon.co.uk'
        },
        {
          title: 'Amazon US',
          href: 'www.amazon.co.uk'
        },
        {
          title: 'PDF e-book',
          href: 'www.ebook.uk'
        },
        {
          title: 'Apple iBook',
          href: 'www.amazon.co.uk'
        },
        {
          title: 'Tolino',
          href: 'www.amazon.co.uk'
        },
        {
          title: 'Barnes & Nobles',
          href: 'www.amazon.co.uk'
        }
      ]
    }
  },
  computed: {
    currentLanguage () {
      return this.$route.query && this.$route.query.lang === 'de' ? 'de' : 'en'
    }
  },
  watch: {
    '$route.query': '$fetch'
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
