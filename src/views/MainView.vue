<template>
  <main>
    <!-- Navbar -->
    <Navbar/>

    <!-- Landing image + info card -->
    <BackgroundImage/>

    <!-- Kompetensi section-->
    <Kompetensi />

    <!-- Article section -->
    <section id="artikel" class="bg-white dark:bg-gray-900">
      <div class="container mx-auto">
        <div class="py-8 px-4 mx-auto md:max-w-screen-xl lg:py-16 lg:px-6">
          <!-- Section title -->
          <div class="max-w-screen-xl mb-8 lg:mb-10">
            <h2 class="mb-4 text-3xl tracking-tight font-medium text-gray-900 dark:text-white">
              Pengumuman & Berita
            </h2>
          </div>

          <!-- Article cards -->
          <Article :is-announcements="true" :is-news="true" />
          <!-- Button -->
          <router-link to="/artikel/pengumuman">
            <button type="button" class="transition duration-200 w-full md:w-auto shadow text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
              LIHAT PENGUMUMAN LAINNYA
            </button>
          </router-link>
          <router-link to="/artikel/berita">
            <button type="button" class="transition duration-200 w-full md:w-auto shadow text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
              LIHAT BERITA LAINNYA
            </button>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <Footer/>
  </main>
</template>

<script>
import BackgroundImage from "@/components/BackgroundImage.vue";
import Kompetensi from "@/components/Kompetensi.vue";
import Article from "@/components/Article.vue";

export default {
  name: "MainView",
  components: {
    BackgroundImage, Kompetensi, Article
  }
}
</script>