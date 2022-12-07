<template>
  <div class="flex flex-col md:flex-row items-center block w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <!-- Card image -->
    <img class="object-cover w-full rounded-t-lg h-72 md:w-[300px] md:rounded-none md:rounded-l-lg" :src="imageSrc" alt="">
    <div class="flex flex-col justify-between leading-normal p-6">
      <!-- Title RPL -->
      <h5 class="mb-2 text-2xl font-medium text-gray-700 dark:text-white">
        {{title}}
      </h5>
      <!-- Description -->
      <p class="mt-1 text-base font-normal text-gray-700 dark:text-gray-400" v-html="description"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardWithLeftImage",
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    imageSrc: {
      type: String,
      required: true
    }
  }
}
</script>