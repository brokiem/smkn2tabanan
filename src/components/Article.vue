<template>
  <section id="artikel" class="bg-white dark:bg-gray-900">
    <div class="container mx-auto">
      <div class="py-8 px-4 mx-auto md:max-w-screen-xl lg:py-16 lg:px-6">
        <!-- Section title -->
        <div class="max-w-screen-xl mb-8 lg:mb-12">
          <h2 class="mb-4 text-3xl tracking-tight font-medium text-gray-900 dark:text-white">Berita & Pengumuman</h2>
        </div>

        <div class="space-y-3 lg:grid lg:grid-cols-3 sm:gap-4 lg:gap-3 lg:space-y-0">
          <CardSkeleton v-if="isLoading"/>
          <CardSkeleton v-if="isLoading"/>
          <CardSkeleton v-if="isLoading"/>

          <!-- Iterate article card with loops (data from rest api) -->
          <ArticleCard
              v-for="{ image_header_url, title, contents, posted_by, created_at, updated_at } in articles"

              :header-img-url="image_header_url"
              :title="title"
              :description="contents">
          </ArticleCard>
        </div>

        <div class="pt-5"></div>
        <a href="#">
          <button type="button" class="transition duration-200 shadow text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
            LIHAT SELENGKAPNYA
          </button>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import ArticleCard from "@/components/ArticleCard.vue";
import {ref} from "vue";
import CardSkeleton from "@/components/CardSkeleton.vue";

export default {
  name: "News",
  components: {
    CardSkeleton,
    ArticleCard
  },
  setup() {
    // Articles reference
    let articles = ref([]);
    let isLoading = ref(true);

    // Get all articles and set to reference
    fetch("http://localhost:3000/v1/berita/all", {method: 'GET', redirect: 'follow'})
        .then(response => response.json())
        .then(result => {
          if (result.success) {
            isLoading.value = false;
            articles.value = result.message;
          }
        })
        .catch(error => console.log('error', error));

    return {articles, isLoading};
  }
}
</script>

<style scoped>

</style>