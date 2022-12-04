<template>
  <section id="artikel" class="bg-white dark:bg-gray-900">
    <div class="container mx-auto">
      <div class="py-8 px-4 mx-auto md:max-w-screen-xl lg:py-16 lg:px-6">
        <!-- Section title -->
        <div class="max-w-screen-xl mb-8 lg:mb-12">
          <h2 class="mb-4 text-3xl tracking-tight font-medium text-gray-900 dark:text-white">Berita & Pengumuman</h2>
        </div>

        <div class="space-y-3 lg:grid lg:grid-cols-3 sm:gap-4 lg:gap-3 lg:space-y-0">
          <ArticleCard title="SEKILAS UJIAN AKHIR SEMESTER 2022" description="SMK NEGERI 2 TABANAN melaksanakan ujian semester pada akhir semester setelah menyelesaikan..."></ArticleCard>
          <ArticleCard title="SEKILAS UJIAN AKHIR SEMESTER 2022" description="SMK NEGERI 2 TABANAN melaksanakan ujian semester pada akhir semester setelah menyelesaikan..."></ArticleCard>
          <ArticleCard title="SEKILAS UJIAN AKHIR SEMESTER 2022" description="SMK NEGERI 2 TABANAN melaksanakan ujian semester pada akhir semester setelah menyelesaikan..."></ArticleCard>
          <ArticleCard title="SEKILAS UJIAN AKHIR SEMESTER 2022" description="SMK NEGERI 2 TABANAN melaksanakan ujian semester pada akhir semester setelah menyelesaikan..."></ArticleCard>
          <ArticleCard title="SEKILAS UJIAN AKHIR SEMESTER 2022" description="SMK NEGERI 2 TABANAN melaksanakan ujian semester pada akhir semester setelah menyelesaikan..."></ArticleCard>
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

export default {
  name: "News",
  components: {
    ArticleCard
  }
}
</script>

<style scoped>

</style>