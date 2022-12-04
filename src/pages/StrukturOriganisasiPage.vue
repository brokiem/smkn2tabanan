<template>
  <!-- Navbar -->
  <Navbar/>

  <!-- Page title -->
  <Header title="Struktur Organisasi"></Header>

  <div class="container mx-auto px-4 md:max-w-screen-lg">
    <div class="flex justify-center">
      <img src="/public/images/struktur-organisasi.png" width="862" height="644" alt="Struktur organisasi">
    </div>
  </div>

  <div class="pb-10"></div>

  <!-- Footer -->
  <Footer/>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  name: "StrukturOrganisasiPage",
  components: {Header}
}
</script>

<style scoped>

</style>