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

              <button v-if="$cookies.get('ltoken') !== null" @click="this.$router.push({name: 'buat-artikel'});" type="button" class="ml-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-2 py-2 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                <PlusIcon/>
              </button>
            </h2>
          </div>

          <!-- Article cards -->
          <Article :is-announcements="true" :is-news="true" />
          <!-- Button -->
          <router-link to="/artikel/pengumuman">
            <ColorlessButton class="font-medium shadow" button-text="LIHAT PENGUMUMAN LAINNYA" />
          </router-link>
          <router-link to="/artikel/berita">
            <ColorlessButton class="font-medium shadow" button-text="LIHAT BERITA LAINNYA" />
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
import ColorlessButton from "@/components/buttons/ColorlessButton.vue";
import PlusIcon from "@/components/icons/PlusIcon.vue";

export default {
  name: "MainView",
  components: {
    PlusIcon,
    ColorlessButton,
    BackgroundImage, Kompetensi, Article
  }
}
</script>
