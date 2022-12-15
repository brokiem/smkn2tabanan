<template>
  <div class="space-y-3 lg:grid lg:grid-cols-3 sm:gap-4 lg:gap-3 lg:space-y-0">
    <CardSkeleton v-if="(isNews && isNewsLoading) || (isAnnouncements && isAnnouncementsLoading)"/>
    <CardSkeleton v-if="(isNews && isNewsLoading) || (isAnnouncements && isAnnouncementsLoading)"/>
    <CardSkeleton v-if="(isNews && isNewsLoading) || (isAnnouncements && isAnnouncementsLoading)"/>

    <!-- Iterate article card with loops (data from rest api) -->
    <ArticleCard
        v-if="isAnnouncements"

        v-for="{ id, image_header_url, title, contents, created_at, articleType } in announcements.slice(this.announcementsOffset, this.announcementsTotal)"

        :id="id"
        :header-img-url="image_header_url"
        :title="title"
        :description="contents"
        :createdEpoch="created_at"
        :articleType="articleType"
        :article-route="`/artikel/${articleType}/${encodeURIComponent(title.replaceAll(/\s+/g, '-').toLowerCase())}-${id}`"
    ></ArticleCard>
    <ArticleCard
        v-if="isNews"

        v-for="{ id, image_header_url, title, contents, created_at, articleType } in news.slice(this.newsOffset, this.newsTotal)"

        :id="id"
        :header-img-url="image_header_url"
        :title="title"
        :description="contents"
        :createdEpoch="created_at"
        :articleType="articleType"
        :article-route="`/artikel/${articleType}/${encodeURIComponent(title.replaceAll(/\s+/g, '-').toLowerCase())}-${id}`"
    ></ArticleCard>
  </div>

  <div class="pt-5"></div>
</template>

<script>
import ArticleCard from "@/components/ArticleCard.vue";
import CardSkeleton from "@/components/CardSkeleton.vue";

export default {
  name: "News",
  components: {
    ArticleCard,
    CardSkeleton
  },
  props: {
    isNews: {
      type: Boolean,
      default: false
    },
    newsOffset: {
      type: Number,
      default: 0
    },
    newsTotal: {
      type: Number,
      default: 3
    },
    isAnnouncements: {
      type: Boolean,
      default: false
    },
    announcementsOffset: {
      type: Number,
      default: 0
    },
    announcementsTotal: {
      type: Number,
      default: 3
    },
    searchQuery: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      news: [],
      announcements: [],
      isNewsLoading: true,
      isAnnouncementsLoading: true,
      isLoading: true,
      newsBackup: [],
      announcementsBackup: []
    }
  },
  methods: {
    fetchArticle(url, resultCallback) {
      fetch(url, {method: 'GET', redirect: 'follow'})
          .then(response => response.json())
          .then(resultCallback)
          .catch(error => console.log('error', error));
    }
  },
  watch: {
    searchQuery: function (newQuery, oldQuery) {
      if (newQuery !== oldQuery) {
        this.news = this.newsBackup;
        this.announcements = this.announcementsBackup;

        if (this.isAnnouncements) {
          this.announcements = this.announcements.filter(article => article.title.toLowerCase().includes(this.searchQuery.toLowerCase()) || article.contents.toLowerCase().includes(this.searchQuery.toLowerCase()));
        }

        if (this.isNews) {
          this.news = this.news.filter(article => article.title.toLowerCase().includes(this.searchQuery.toLowerCase()) || article.contents.toLowerCase().includes(this.searchQuery.toLowerCase()));
        }
      }
    }
  },
  created() {
    // Pengumuman
    if (this.isAnnouncements) {
      this.fetchArticle("https://exuberant-toga-wasp.cyclic.app/v1/pengumuman/all", result => {
        if (result.success) {
          this.isAnnouncementsLoading = false;
          this.announcements = result.message.map(v => ({...v, articleType: "pengumuman"}));
          this.announcementsBackup = this.announcements;
        }
      })
    }
    // Berita
    if (this.isNews) {
      this.fetchArticle("https://exuberant-toga-wasp.cyclic.app/v1/berita/all", result => {
        if (result.success) {
          this.isNewsLoading = false;
          this.news = result.message.map(v => ({...v, articleType: "berita"}));
          this.newsBackup = this.news;
        }
      })
    }
  }
}
</script>