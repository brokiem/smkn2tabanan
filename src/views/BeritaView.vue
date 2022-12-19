<template>
  <!-- Return 404 Not Found if article doesnt exists -->
  <main v-if="!isArticleExists">
    <NotFound/>
  </main>

  <!-- Display article contents if exists -->
  <main v-else>
    <Navbar/>

    <div class="mb-4 pt-16 pb-16 text-center text-gray-900 dark:text-white" style="background-color: #F8F9FC;">
      <!-- Article title -->
      <h2 class="mb-4 text-3xl px-4 md:px-16">
        {{ article.title }}
      </h2>

      <!-- Article date posted -->
      <svg class="w-5 h-5 inline top-[-2px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path d="M5.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H6a.75.75 0 01-.75-.75V12zM6 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H6zM7.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H8a.75.75 0 01-.75-.75V12zM8 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H8zM9.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V10zM10 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H10zM9.25 14a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V14zM12 9.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V10a.75.75 0 00-.75-.75H12zM11.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H12a.75.75 0 01-.75-.75V12zM12 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H12zM13.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H14a.75.75 0 01-.75-.75V10zM14 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H14z" />
        <path fill-rule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z" clip-rule="evenodd" />
      </svg>
      {{ new Date(article.created_at * 1000).toLocaleDateString("id-ID", {year: "numeric", month: "long", day: "numeric"}) }}
      &#8212;
      <svg class="w-5 h-5 inline top-[-2px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
      </svg>
      Berita
    </div>

    <div class="container mx-auto px-4 md:max-w-default pt-6">
      <div class="block w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <!-- Card contents -->
        <img class="rounded-t-md aspect-video w-full object-contain" style="background-color: #F8F9FC;" :src="article.image_header_url" alt="">
        <p class="p-5 mt-1 text-base font-normal text-gray-900 dark:text-gray-400 text-justify" v-html="article.contents"></p>
      </div>
    </div>

    <div class="pb-10"></div>

    <Footer></Footer>
  </main>
</template>

<script>
import Header from "@/components/Header.vue";
import NotFound from "@/components/NotFound.vue";
import {getNewsDetail} from "/public/assets/rest";

export default {
  name: "BeritaView",
  components: {
    NotFound,
    Header
  },
  data() {
    return {
      isLoading: true,
      isArticleExists: true,
      article: {image_header_url: null, title: null, contents: null, created_at: null}
    }
  },
  // before entering the page, fetch the article contents
  beforeRouteEnter(to, from, next) {
    const titleId = to.params.titleId;
    const id = titleId.split("-").pop();

    // Get article and check if it exists
    getNewsDetail(id, result => {
      if (result.success) {
        const article = result.message[0];
        // check if title match with article title from REST
        if (encodeURIComponent(`${article.title.replaceAll(/\s+/g, "-").toLowerCase()}-${id}`) === encodeURIComponent(titleId)) {
          // continue to next route if article exists
          next(vm => {
            // vm is the public component instance
            // set article data
            vm.article = article;
            vm.isArticleExists = true;
            vm.isLoading = false;
          });
          return;
        }
      }

      // return 404 Not Found if article doesnt exists by setting isArticleExists to false
      next(vm => {
        vm.isArticleExists = false;
        vm.isLoading = false;
      });
    })
  },
  created() {
    // listen when url change to update article contents
    this.$watch(() => this.$route.params, (toParams, previousParams) => {
      const titleId = toParams.titleId;
      this.loadArticle(titleId);
    })
  },
  methods: {
    loadArticle(titleId) {
      const id = titleId[titleId.length - 1];

      // Get the article and set to reference
      getNewsDetail(id, result => {
        if (result.success) {
          this.isLoading = false;
          const article = result.message[0];

          // check if title match with article title from REST
          if (encodeURIComponent(`${article.title.replaceAll(/\s+/g, "-").toLowerCase()}-${id}`) === encodeURIComponent(titleId)) {
            this.isArticleExists = true;
            this.article = article;
            return;
          }
        }

        // if not found, set isArticleExists to false
        this.isArticleExists = false;
        this.isLoading = false;
      })
    }
  }
}
</script>