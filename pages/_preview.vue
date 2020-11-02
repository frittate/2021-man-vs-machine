<template>
  <div>
    <nuxt-link to="/" class="text-red-700 block py-4 mb-8">
      &larr; Back home
    </nuxt-link>
    <p class="uppercase font-black text-3xl text-red-700 mb-4">
      {{ content.title }}
    </p>
    <nuxt-content :document="content" class="mb-12 prose text-white" />
    <GetBlock class="mb-12" />
    <nuxt-link to="/" class="text-red-700 block py-4 mb-8">
      &larr; Back home
    </nuxt-link>
  </div>
</template>

<script>
import GetBlock from '@/components/GetBlock'

export default {
  components: {
    GetBlock
  },
  async fetch () {
    this.content = await this.$content(`${this.currentLanguage}/${this.$route.params.preview}`).fetch()
  },
  data () {
    return {
      content: {}
    }
  },
  computed: {
    currentLanguage () {
      return this.$route.query && this.$route.query.lang === 'de' ? 'de' : 'en'
    }
  },
  head () {
    return {
      title: `Man vs Machine | A collection of short stories | Ragnar Martinson | ${this.content.title}`
    }
  }
}
</script>
