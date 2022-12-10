<template>
  <div class="relative">
    <img class="w-full h-[105vh] object-cover" src="https://cdn-smkn2tabanan.netlify.app/images/atas-blur-min.webp" alt="Atas SMK DUTA">
    <InfoCard class="absolute"/>
  </div>
</template>

<script>
import InfoCard from "@/components/InfoCard.vue";

export default {
  name: "LandingImage",
  components: {
    InfoCard
  }
}
</script>

<style scoped>

</style>