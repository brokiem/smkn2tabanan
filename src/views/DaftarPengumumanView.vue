<template>
  <Navbar/>

  <div class="container mx-auto">
    <div class="py-8 px-4 mx-auto md:max-w-[1250px] lg:py-16 lg:px-6">
      <!-- Section title -->
      <div class="max-w-screen-xl mb-8 lg:mb-10">
        <h2 class="mb-4 text-3xl tracking-tight font-medium text-gray-900 dark:text-white">
          Pengumuman
        </h2>
      </div>

      <!-- Search input -->
      <form @submit.prevent class="flex items-center mb-4">
        <label for="searchInput" class="sr-only">Cari</label>
        <div class="relative w-full">
          <input v-model="searchValue" type="text" id="searchInput" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-4 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required>
        </div>
        <button type="submit" class="p-2 px-5 text-sm font-medium text-white bg-blue-700 rounded-r-md border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          <span class="sr-only">Search</span>
        </button>
      </form>

      <!-- Pengumuman cards -->
      <Article :is-announcements="true" :news-total="newsTotal" :search-query="searchValue"/>

      <!-- Load more button -->
      <button @click="loadMore" id="loadMoreBtn" type="button" class="transition duration-200 shadow text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 font-medium rounded-lg text-sm w-full px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
        MUAT LEBIH BANYAK
      </button>
    </div>
  </div>

  <Footer/>
</template>

<script>
import Article from "@/components/Article.vue";

export default {
  name: "DaftarPengumumanView",
  components: {Article},
  data() {
    return {
      newsTotal: 6,
      searchValue: null
    }
  },
  methods: {
    loadMore() {
      document.getElementById("loadMoreBtn").setAttribute("disabled", "true");

      setTimeout(() => {
        document.getElementById("loadMoreBtn").removeAttribute("disabled");
        this.newsTotal += 3;
      }, 100);
    }
  }
}
</script>