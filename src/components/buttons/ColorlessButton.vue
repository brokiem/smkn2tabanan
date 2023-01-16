<template>
  <button type="button" class="transition duration-200 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 rounded-lg text-sm px-4 py-2 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
    <component v-if="buttonIconComponent !== null" :is="buttonIconComponent"/>
    {{ buttonText }}
  </button>
</template>

<script>
export default {
  name: "ColorlessButton",
  props: {
    buttonText: {
      type: String,
      required: true
    },
    buttonIconComponent: {
      type: String,
      required: false
    }
  }
}
</script>
