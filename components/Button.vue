<template>
  <a :href="href" target="_blank" rel="noopener noreferrer" class="bg-white border border-red-700 hover:bg-red-700 font-bold hover:text-white text-black flex justify-center items-center w-48 py-3 mb-4">
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
    }
  }
}
</script>
