<template>
  <button type="button" class="text-white bg-blue-600 hover:bg-blue-800 font-normal rounded-md text-normal px-4 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:ring-blue-800 transition duration-200">
    <component v-if="buttonIconComponent !== null" :is="buttonIconComponent"/>
    {{ buttonText }}
  </button>
</template>

<script>
export default {
  name: "BlueButton",
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
