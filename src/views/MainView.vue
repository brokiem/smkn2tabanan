<template>
  <main>
    <!-- Navbar -->
    <Navbar/>
    <!-- Landing image + info card -->
    <BackgroundImage/>
    <!-- Kompetensi section-->
    <Kompetensi />
    <!-- Article section -->
    <Article/>
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