<template>
  <!-- Card contents -->
  <div class="flex flex-col mx-auto md:max-w-3xl text-gray-900 bg-white rounded-md border border-gray-300 shadow transition duration-200 p-5">
    <!-- Card ekstra title -->
    <h3 class="mb-4 text-xl font-normal tracking-tight">{{title}}</h3>

    <!-- Card ekstra description -->
    <p class="text-base font-normal text-gray-500 text-md text-">{{description}}</p>

    <!-- Card ekstra button -->
    <div class="flex flex-wrap mt-auto">
      <button @click="showModal" type="button" class="mt-3 w-full transition duration-200 shadow-sm text-gray-900 bg-white hover:bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 rounded-md py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
        Guru Pembimbing
      </button>
    </div>
  </div>

  <!-- Guru pembimbing modal -->
  <div v-if="isModalShown" class="fixed z-50 w-full p-4 overflow-x-hidden overflow-y-auto inset-0 h-full h-screen flex items-center justify-center" style="background: rgba(0, 0, 0, 0.5);">
    <div class="relative w-full h-full max-w-2xl h-auto">
      <!-- Modal content -->
      <div class="relative bg-white rounded-md shadow dark:bg-gray-700">
        <!-- Modal header -->
        <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
          <h3 class="text-xl font-medium text-gray-900 dark:text-white">
            Guru Pembimbing - {{title}}
          </h3>
          <button @click="hideModal" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal body -->
        <div class="p-6 space-y-6">
          <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400 text-center" v-html="pembimbing"></p>
        </div>
        <!-- Modal footer -->
        <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
          <button @click="hideModal" type="button" class="w-full transition duration-200 shadow-sm text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 font-medium rounded-md text-sm py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
            Tutup
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EkstrakulikulerCard",
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    pembimbing: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isModalShown: false
    };
  },
  methods: {
    showModal() {
      this.isModalShown = true;
    },
    hideModal() {
      this.isModalShown = false;
    }
  }
}
</script>