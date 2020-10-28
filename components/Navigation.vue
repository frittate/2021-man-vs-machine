<template>
  <ul class="flex py-4 px-2 text-red-700 space-x-10">
    <li v-for="navItem in nav.items" :key="navItem.title">
      <nuxt-link to="navItem.href">
        {{ navItem.title }}
      </nuxt-link>
    </li>
    <li class="ml-auto">
      <nuxt-link :to="{ path: '/', query: switchLanguageQuery}" class="hover:text-white">
        {{ lang === 'de' ? 'Switch to English' : 'Auf Deutsch anzeigen' }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Navigation',
  props: {
    lang: {
      type: String,
      default: 'en'
    }
  },
  async fetch () {
    this.nav = await this.$content(`${this.lang}/nav`).fetch()
  },
  data () {
    return {
      nav: []
    }
  },
  computed: {
    switchLanguageQuery () {
      return this.$route.query.lang ? {} : { lang: 'de' }
    }
  }
}
</script>
