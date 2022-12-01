<script>
export default {
  name: "InfoCard",
  mounted() {
    const ping = localStorage.getItem("ping");
    if (ping) {
      document.getElementById("ping-bulet").remove();
      document.getElementById("ping-ping").remove();
    }
  },
  methods: {
    removePing: function () {
      localStorage.setItem("ping", "true");
      document.getElementById("ping-bulet").remove();
      document.getElementById("ping-ping").remove();
    }
  }
}
</script>

<template>
  <div class="p-6 pt-10 pb-10 w-[95%] md:max-w-lg min-h-[250px] md:min-h-[230px] mx-auto bg-white rounded-md shadow-sm flex items-center space-x-4 absolute right-2 md:right-[8rem] top-[18rem] md:top-[23rem]">
    <div>
      <h2 class="text-3xl font-normal text-black pb-5">SMK Negeri 2 Tabanan</h2>
      <p class="text-slate-500">Terwujudnya Peserta Didik Yang Terdidik, Cerdas, Terampil, Mandiri dan Berdaya Saing Global</p>

      <div class="my-6"></div>

      <a href="#">
        <button @click="removePing" type="button" class="transition duration-200 text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 font-normal rounded-md text-sm px-4 py-2 mr-4 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          INFO PPDB
          <span id="ping-bulet" class="absolute inline-flex h-3 w-3 inset-y-[-4px] inset-x-24 rounded-full bg-sky-400"></span>
          <span id="ping-ping" class="animate-ping absolute inline-flex h-3 w-3 inset-y-[-4px] inset-x-24 rounded-full bg-sky-400"></span>
        </button>
      </a>
    </div>
  </div>
</template>