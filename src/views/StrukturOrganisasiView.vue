<template>
  <main>
    <!-- Navbar -->
    <Navbar/>

    <!-- Page title -->
    <Header title="Struktur Organisasi"></Header>

    <div class="container mx-auto px-4 md:max-w-default">
      <div class="flex justify-center">
        <img src="https://cdn-smkn2tabanan.netlify.app/images/struktur-organisasi.png" width="862" height="644" alt="Struktur organisasi">
      </div>
    </div>

    <div class="pb-10"></div>

    <!-- Footer -->
    <Footer/>
  </main>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  name: "StrukturOrganisasiView",
  components: {Header}
}
</script>