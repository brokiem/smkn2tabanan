<template>
  <div class="flex flex-col mx-auto w-full md:max-w-3xl text-gray-900 bg-white rounded-md border border-gray-200 shadow transition duration-200">
    <!-- Card article image -->
    <div class="relative">
      <img class="rounded-t-md h-[189px] w-full object-cover" :src="headerImgUrl" alt="">
      <!-- Card article date -->
      <span class="absolute top-2 right-2 bg-blue-50 text-blue-900 text-sm font-medium px-1.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
        <svg class="w-5 h-5 inline top-[-2px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path d="M5.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H6a.75.75 0 01-.75-.75V12zM6 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H6zM7.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H8a.75.75 0 01-.75-.75V12zM8 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H8zM9.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V10zM10 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H10zM9.25 14a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V14zM12 9.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V10a.75.75 0 00-.75-.75H12zM11.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H12a.75.75 0 01-.75-.75V12zM12 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H12zM13.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H14a.75.75 0 01-.75-.75V10zM14 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H14z" />
          <path fill-rule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z" clip-rule="evenodd" />
        </svg>
        {{ articleDate }}
      </span>
      <!-- Card draft info -->
      <span v-if="isDraft" class="absolute top-2 left-2 bg-yellow-100 text-yellow-800 text-sm font-medium px-1.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
        <svg class="w-5 h-5 inline top-[-1px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path d="M2 3a1 1 0 00-1 1v1a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1H2z" />
          <path fill-rule="evenodd" d="M2 7.5h16l-.811 7.71a2 2 0 01-1.99 1.79H4.802a2 2 0 01-1.99-1.79L2 7.5zM7 11a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z" clip-rule="evenodd" />
        </svg>
        Draft
      </span>
    </div>
    <!-- Card contents -->
    <div class="px-4 pt-3 pb-2">
      <!-- Card article title -->
      <h3 class="mb-3 text-xl font-normal tracking-tight text-gray-800">
        {{title.length > maxTitleLength ? title.substring(0, maxTitleLength) + "..." : title}}
      </h3>
      <!-- Card article description with limit of 135 chars -->
      <p class="font-thin text-gray-500 text-md overflow-hidden">
        {{description.length > maxDescriptionLength ? description.replace(/<[^>]*>/g, '').substring(0, maxDescriptionLength) + "..." : description.replace(/<[^>]*>/g, '')}}
      </p>
    </div>

    <!-- Card article buttons -->
    <div class="px-4 pb-4 pt-0.5 mt-auto">
      <router-link v-if="!isDraft" :to="articleRoute">
        <button type="button" class="text-white bg-blue-600 hover:bg-blue-800 font-normal rounded-md text-normal w-full px-4 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:ring-blue-800 transition duration-200">
          Baca Selengkapnya
        </button>
      </router-link>

      <router-link v-if="this.$cookies.get('ltoken') !== null" :to="editArticleRoute">
        <button type="button" class="text-gray-900 bg-gray-200 hover:bg-gray-300 font-normal rounded-md text-normal w-full px-4 py-1.5 text-center mt-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:ring-blue-800 transition duration-200">
          Edit Artikel
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleCard",
  props: {
    id: Number,
    headerImgUrl: String,
    title: String,
    description: String,
    createdEpoch: Number,
    articleType: String,
    articleRoute: String,
    editArticleRoute: String,
    isDraft: Boolean
  },
  data() {
    return {
      maxTitleLength: 55,
      maxDescriptionLength: 135
    }
  },
  setup(props) {
    const date = new Date(props.createdEpoch);
    const articleDate = date.toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });

    return {
      articleDate
    }
  }
}
</script>

<style scoped>

</style>