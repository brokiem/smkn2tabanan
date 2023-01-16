<template>
  <div class="flex flex-col mx-auto w-full md:max-w-3xl text-gray-900 bg-white rounded-md border border-gray-200 shadow transition duration-200">
    <!-- Card article image -->
    <div class="relative">
      <img class="rounded-t-md h-[189px] w-full object-cover" :src="headerImgUrl" alt="">
      <!-- Card article date -->
      <span class="absolute top-2 right-2 bg-blue-50 text-blue-900 text-sm font-medium px-1.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
        <CalendarIcon/> {{ articleDate }}
      </span>
      <!-- Card draft info -->
      <span v-if="isDraft" class="absolute top-2 left-2 bg-yellow-100 text-yellow-800 text-sm font-medium px-1.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
        <ArchiveIcon/> Draft
      </span>
    </div>
    <!-- Card contents -->
    <div class="px-4 pt-3 pb-2">
      <!-- Card article title -->
      <h3 class="mb-3 text-xl font-normal tracking-tight text-gray-800">
        {{title.length > maxTitleLength ? title.substring(0, maxTitleLength) + "..." : title}}
      </h3>
      <!-- Card article description with limit of 135 chars -->
      <p class="font-thin text-gray-500 text-md overflow-hidden">
        {{description.length > maxDescriptionLength ? description.replace(/<[^>]*>/g, '').substring(0, maxDescriptionLength) + "..." : description.replace(/<[^>]*>/g, '')}}
      </p>
    </div>

    <!-- Card article buttons -->
    <div class="px-4 pb-4 pt-0.5 mt-auto">
      <router-link v-if="!isDraft" :to="articleRoute">
        <BlueButton class="w-full" button-text="Baca Selengkapnya"/>
      </router-link>

      <router-link v-if="this.$cookies.get('ltoken') !== null" :to="editArticleRoute">
        <ColorlessButton class="w-full mt-2" button-text="Edit Artikel"/>
      </router-link>
    </div>
  </div>
</template>

<script>
import CalendarIcon from "@/components/icons/CalendarIcon.vue";
import BlueButton from "@/components/buttons/BlueButton.vue";
import ArchiveIcon from "@/components/icons/ArchiveIcon.vue";
import ColorlessButton from "@/components/buttons/ColorlessButton.vue";

export default {
  name: "ArticleCard",
  components: {ColorlessButton, ArchiveIcon, BlueButton, CalendarIcon},
  props: {
    id: Number,
    headerImgUrl: String,
    title: String,
    description: String,
    createdEpoch: Number,
    articleType: String,
    articleRoute: String,
    editArticleRoute: String,
    isDraft: Boolean
  },
  data() {
    return {
      maxTitleLength: 55,
      maxDescriptionLength: 135
    }
  },
  setup(props) {
    const date = new Date(props.createdEpoch);
    const articleDate = date.toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });

    return {
      articleDate
    }
  }
}
</script>

<style scoped>

</style>
