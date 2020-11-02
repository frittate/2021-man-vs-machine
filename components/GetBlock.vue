<template>
  <div class="pt-16 px-4 flex flex-col items-center bg-gray-300 mt-16 pb-8">
    <p class="uppercase font-black text-black text-3xl mb-8">
      {{ index.get }}
    </p>
    <Button v-for="button in buttons" :key="button.title" :href="button.href" :title="button.title" :tracking="button.tracking" />
  </div>
</template>

<script>
import Button from '@/components/Button'

export default {
  components: {
    Button
  },
  async fetch () {
    this.index = await this.$content(`${this.currentLanguage}/index`).fetch()
  },
  data () {
    return {
      index: {},
      buttons: [
        {
          title: 'Amazon DE',
          href: 'https://www.amazon.de/-/en/gp/product/B08MBBMJPB',
          tracking: 'U7GCF9HO'
        },
        {
          title: 'Amazon UK',
          href: 'https://www.amazon.co.uk/-/en/gp/product/B08MBBMJPB'
        },
        {
          title: 'Amazon US',
          href: 'https://www.amazon.com/-/en/gp/product/B08MBBMJPB',
          tracking: 'IRRPRDWU'
        },
        {
          title: 'Tolino - Thalia',
          href: 'https://www.thalia.de/shop/home/artikeldetails/ID150119673.html'
        },
        {
          title: 'Tolino - Hugendubel',
          href: 'https://www.hugendubel.de/de/ebook_epub/ragnar_martinson-man_vs_machine-39847752-produkt-details.html'
        },
        {
          title: 'PDF File',
          href: 'https://payhip.com/b/5kX7',
          tracking: 'ZM3O0BDE'
        }
      ]
    }
  },
  computed: {
    currentLanguage () {
      return this.$route.query && this.$route.query.lang === 'de' ? 'de' : 'en'
    }
  }
}
</script>

<style>

</style>
