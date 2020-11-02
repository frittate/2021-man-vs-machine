<template>
  <a :href="href" target="_blank" rel="noopener noreferrer" class="bg-red-700 border border-red-700 hover:bg-white font-bold hover:text-black text-white transition-colors duration-300 flex justify-center items-center w-48 py-3 mb-4" @click="trackFathom">
    {{ title }}
  </a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    tracking: {
      type: String,
      default: null
    }
  },
  methods: {
    trackFathom () {
      if (!this.tracking) {
        return
      }
      // eslint-disable-next-line no-undef
      window.fathom.trackGoal(this.tracking, 0)
    }
  }
}
</script>
