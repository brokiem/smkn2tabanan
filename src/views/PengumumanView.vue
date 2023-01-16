<template>
  <!-- Return 404 Not Found if article doesnt exists -->
  <main v-if="!isArticleExists && !isLoading">
    <NotFound/>
  </main>

  <!-- Display article contents if exists -->
  <main v-else>
    <Navbar/>

    <div class="mb-4 pt-16 pb-16 text-center text-gray-900 dark:text-white" style="background-color: #F8F9FC;">
      <!-- Article title -->
      <ArticleTitle :title="article.title"/>

      <!-- Article date posted -->
      <CalendarIcon/> {{ articleCreatedDate }} &#8212; <MegaphoneIcon/> Pengumuman
    </div>

    <div class="container mx-auto px-4 md:max-w-default pt-6">
      <div class="block w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <!-- Card contents -->
        <img class="rounded-t-md aspect-video w-full object-contain" style="background-color: #F8F9FC;" :src="article.image_header_url" alt="">
        <p class="ql-editor p-5 mt-4 text-base font-normal text-gray-900 dark:text-gray-400 text-justify" v-html="article.contents"></p>
      </div>
    </div>

    <div class="pb-10"></div>

    <Footer></Footer>
  </main>
</template>

<script>
import Header from "@/components/Header.vue";
import NotFound from "@/components/NotFound.vue";
import {getAnnouncementDetail} from "/src/assets/rest";
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import ArticleTitle from "@/components/ArticleTitle.vue";
import CalendarIcon from "@/components/icons/CalendarIcon.vue";
import MegaphoneIcon from "@/components/icons/MegaphoneIcon.vue";

export default {
  name: "PengumumanView",
  components: {
    MegaphoneIcon,
    CalendarIcon,
    ArticleTitle,
    NotFound,
    Header
  },
  data() {
    return {
      isLoading: true,
      isArticleExists: false,
      article: {image_header_url: null, title: null, contents: null, created_at: null},
      articleCreatedDate: null
    }
  },
  // before entering the page, fetch the article contents
  beforeRouteEnter(to, from, next) {
    const titleId = to.params.titleId;
    const id = titleId.split('-').pop();

    if (isNaN(parseInt(id))) {
      next(vm => {
        vm.isArticleExists = false;
        vm.isLoading = false;
      });
      return;
    }

    // Get article and check if it exists
    getAnnouncementDetail(id).then((result) => {
      if (result.success) {
        const article = result.message[0];
        // check if title match with article title from REST
        if (encodeURIComponent(`${article.title.replaceAll(/\s+/g, "-").toLowerCase()}-${id}`) === encodeURIComponent(titleId)) {
          // continue to next route if article exists
          next(vm => {
            // vm is the public component instance
            // set article data
            vm.article = article;
            vm.articleCreatedDate = new Date(article.created_at).toLocaleDateString("id-ID", {year: "numeric", month: "long", day: "numeric"});
            vm.isArticleExists = true;
            vm.isLoading = false;
          });
          return;
        }
      }

      // return 404 Not Found if article doesnt exists
      // by setting isArticleExists to false
      next(vm => {
        vm.isArticleExists = false;
        vm.isLoading = false;
      });
    })
  },
  created() {
    // listen when url change to update article contents
    this.$watch(() => this.$route.params, () => {
      location.reload();
    })
  },
  methods: {}
}
</script>

<style>
a {
  color: rgb(37 99 235);
  text-decoration: underline;
}
</style>
