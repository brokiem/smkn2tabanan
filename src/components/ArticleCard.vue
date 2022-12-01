<template>
  <div class="flex flex-col mx-auto md:max-w-3xl text-gray-900 bg-white rounded-md border-2 border-gray-100 shadow hover:shadow-lg transition duration-200">
    <!-- Card image -->
    <a href="#">
      <img class="rounded-t-md h-[189px] w-full object-cover " src="http://www.smkn2tabanan.sch.id/images/uas1.jpeg" alt="" />
    </a>
    <!-- Card contents -->
    <div class="p-5">
      <h3 class="mb-4 text-2xl font-normal tracking-tight">{{title}}</h3>
      <p class="font-light text-gray-500 sm:text-lg text-justify">{{description}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleCard",
  props: {
    title: String,
    description: String,
    date: Number
  }
}
</script>

<style scoped>

</style>