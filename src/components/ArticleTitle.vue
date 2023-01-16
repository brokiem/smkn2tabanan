<template>
  <h2 class="mb-4 text-3xl px-4 md:px-16">
    {{ title }}
  </h2>
</template>

<script>
export default {
  name: "ArticleTitle",
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>
