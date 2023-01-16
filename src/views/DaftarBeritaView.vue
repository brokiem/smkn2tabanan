<template>
  <Navbar/>

  <div class="container mx-auto">
    <div class="py-8 px-4 mx-auto md:max-w-[1250px] lg:py-16 lg:px-6">
      <!-- Section title -->
      <div class="max-w-screen-xl mb-8 lg:mb-10">
        <h2 class="mb-4 text-3xl tracking-tight font-medium text-gray-900 dark:text-white">
          Berita

          <button v-if="$cookies.get('ltoken') !== null" @click="this.$router.push({name: 'buat-artikel'});" type="button" class="ml-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-2 py-2 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            <PlusIcon/>
          </button>
        </h2>
      </div>

      <!-- Search input -->
      <form @submit.prevent class="flex items-center mb-4">
        <label for="searchInput" class="sr-only">Cari</label>
        <div class="relative w-full">
          <input v-model="searchValue" type="text" id="searchInput" class="transition duration-200 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-4 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required>
        </div>
        <button type="submit" class="transition duration-200 p-2 px-5 text-sm font-medium text-white bg-blue-700 rounded-r-md border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <SearchIcon/>
          <span class="sr-only">Search</span>
        </button>
      </form>

      <!-- Berita cards -->
      <Article :is-news="true" :news-total="newsTotal" :search-query="searchValue"/>

      <!-- Load more button -->
      <ColorlessButton @click="loadMore" id="loadMoreBtn" button-text="MUAT LEBIH BANYAK" class="shadow font-medium w-full"/>
    </div>
  </div>

  <Footer/>
</template>

<script>
import Article from "@/components/Article.vue";
import ColorlessButton from "@/components/buttons/ColorlessButton.vue";
import PlusIcon from "@/components/icons/PlusIcon.vue";
import SearchIcon from "@/components/icons/SearchIcon.vue";

export default {
  name: "DaftarBeritaView",
  components: {SearchIcon, PlusIcon, ColorlessButton, Article},
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
