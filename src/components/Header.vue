<template>
  <h2 class="mb-4 text-3xl text-center text-gray-900 dark:text-white pt-16 pb-16" style="background-color: #F8F9FC;">
    {{title}}
  </h2>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>