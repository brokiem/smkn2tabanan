<template>
  <div class="flex flex-col mx-auto w-full md:max-w-3xl text-gray-900 bg-white rounded-md border-2 border-gray-100 shadow hover:shadow-lg transition duration-200">
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
    </div>
    <!-- Card contents -->
    <div class="p-5">
      <!-- Card article title -->
      <h3 class="mb-4 text-xl font-normal tracking-tight">{{title.length > maxTitleLength ? title.substring(0, maxTitleLength) + "..." : title}}</h3>
      <!-- Card article description with limit of 135 chars -->
      <p class="font-light text-gray-500 text-md text-">{{description.length > maxDescriptionLength ? description.substring(0, maxDescriptionLength) + " [...]" : description}}</p>

      <!-- Card article button -->
      <router-link :to="articleRoute">
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 font-normal hover:underline rounded-md text-sm px-4 py-1.5 text-center mt-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:ring-blue-800 transition duration-200">
          BACA SELENGKAPNYA
          <svg class="w-5 h-5 inline top-[-1px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" stroke-width="1.5" stroke="currentColor">
            <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
          </svg>
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
    articleType: String
  },
  data() {
    return {
      maxTitleLength: 55,
      maxDescriptionLength: 135
    }
  },
  setup(props) {
    const date = new Date(props.createdEpoch * 1000);
    const articleDate = date.toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
    const articleRoute = `${props.articleType}/${props.title.replace(/\s+/g, "-").toLowerCase()}-${props.id}`;

    return {
      articleRoute,
      articleDate
    }
  }
}
</script>

<style scoped>

</style>