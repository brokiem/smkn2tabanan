<template>
  <main>
    <Navbar/>

    <!-- Page title -->
    <Header title="Ekstrakulikuler"></Header>

    <div class="container mx-auto pt-6">
      <div class="px-4 mx-auto md:max-w-screen-xl lg:px-6">
        <div class="space-y-3 lg:grid lg:grid-cols-3 gap-4 lg:gap-5 lg:space-y-0">
          <EkstrakulikulerCard
              v-for="{ title, description, pembimbing } in ekstrakulikuler"

              :title="title"
              :description="description"
              :pembimbing="pembimbing"
          ></EkstrakulikulerCard>
        </div>
      </div>
    </div>

    <div class="pb-10"></div>

    <Footer/>
  </main>
</template>

<script>
import EkstrakulikulerCard from "@/components/EkstrakulikulerCard.vue";
import Header from "@/components/Header.vue";
import jsonObject from "/public/assets/ekstrakulikuler.json";

export default {
  name: "EkstrakulikulerView",
  components: {
    Header,
    EkstrakulikulerCard
  },
  setup() {
    const ekstrakulikuler = Object.entries(jsonObject).map(([key, value]) => {
      return {
        title: value.title,
        description: value.description,
        pembimbing: value.pembimbing
      }
    })

    return {ekstrakulikuler}
  }
}
</script>
