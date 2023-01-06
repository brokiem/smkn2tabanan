<template>
  <div class="space-y-3 lg:grid lg:grid-cols-3 sm:gap-4 lg:gap-3 lg:space-y-0">
    <CardSkeleton v-if="(isNews && isNewsLoading) || (isAnnouncements && isAnnouncementsLoading)"/>
    <CardSkeleton v-if="(isNews && isNewsLoading) || (isAnnouncements && isAnnouncementsLoading)"/>
    <CardSkeleton v-if="(isNews && isNewsLoading) || (isAnnouncements && isAnnouncementsLoading)"/>

    <!-- Iterate article card with loops (data from rest api) -->
    <ArticleCard
        v-if="isAnnouncements"

        v-for="{ id, image_header_url, title, contents, is_draft, created_at, articleType } in announcements.slice(this.announcementsOffset, this.announcementsTotal)"

        :id="id"
        :header-img-url="image_header_url"
        :title="title"
        :description="contents"
        :createdEpoch="created_at"
        :articleType="articleType"
        :is-draft="is_draft"
        :article-route="`/artikel/${articleType}/${encodeURIComponent(title.replaceAll(/\s+/g, '-').toLowerCase())}-${id}`"
        :edit-article-route="`/admin/artikel/${articleType}/edit/${encodeURIComponent(title.replaceAll(/\s+/g, '-').toLowerCase())}-${id}`"
    ></ArticleCard>
    <ArticleCard
        v-if="isNews"

        v-for="{ id, image_header_url, title, contents, is_draft, created_at, articleType } in news.slice(this.newsOffset, this.newsTotal)"

        :id="id"
        :header-img-url="image_header_url"
        :title="title"
        :description="contents"
        :createdEpoch="created_at"
        :articleType="articleType"
        :is-draft="is_draft"
        :article-route="`/artikel/${articleType}/${encodeURIComponent(title.replaceAll(/\s+/g, '-').toLowerCase())}-${id}`"
        :edit-article-route="`/admin/artikel/${articleType}/edit/${encodeURIComponent(title.replaceAll(/\s+/g, '-').toLowerCase())}-${id}`"
    ></ArticleCard>
  </div>

  <div class="pt-5"></div>
</template>

<script>
import ArticleCard from "@/components/ArticleCard.vue";
import CardSkeleton from "@/components/CardSkeleton.vue";
import {fetchAnnouncements, fetchDraftedAnnouncements, fetchDraftedNews, fetchNews} from "/src/assets/rest";

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
  setup() {
    const isLoggedIn = $cookies.get('ltoken') !== null

    return {isLoggedIn}
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
      fetchAnnouncements(result => {
        if (result.success) {
          this.isAnnouncementsLoading = false;
          this.announcements = result.message.map(v => ({...v, articleType: "pengumuman"})).reverse();
          this.announcementsBackup = this.announcements;

          if (this.isLoggedIn) {
            fetchDraftedAnnouncements(this.$cookies.get('ltoken'), result => {
              if (result.success) {
                this.announcements = result.message.map(v => ({...v, articleType: "pengumuman"})).reverse().concat(this.announcements);
                this.announcementsBackup = this.announcements;
              }
            })
          }
        }
      })
    }
    // Berita
    if (this.isNews) {
      fetchNews(result => {
        if (result.success) {
          this.isNewsLoading = false;
          this.news = result.message.map(v => ({...v, articleType: "berita"})).reverse();
          this.newsBackup = this.news;

          if (this.isLoggedIn) {
            fetchDraftedNews(this.$cookies.get('ltoken'), result => {
              if (result.success) {
                this.news = result.message.map(v => ({...v, articleType: "berita"})).reverse().concat(this.news);
                this.newsBackup = this.news;
              }
            })
          }
        }
      })
    }
  }
}
</script>