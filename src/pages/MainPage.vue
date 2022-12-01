<template>
  <!-- Navbar -->
  <Navbar/>
  <!-- Landing image + info card -->
  <BackgroundImage/>
  <InfoCard />
  <!-- Kompetensi section-->
  <Kompetensi />
  <!-- Article section -->
  <Article/>
  <!-- Footer -->
  <Footer/>
</template>

<script>
import BackgroundImage from "@/components/BackgroundImage.vue";
import InfoCard from "@/components/InfoCard.vue";
import Kompetensi from "@/components/Kompetensi.vue";
import Article from "@/components/Article.vue";

export default {
  components: {
    BackgroundImage, InfoCard, Kompetensi, Article
  }
}
</script>