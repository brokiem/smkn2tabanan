<script>
import BlueButton from "@/components/buttons/BlueButton.vue";

export default {
  name: "InfoCard",
  components: {BlueButton},
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
  <div class="p-6 pt-10 pb-10 w-[95%] md:max-w-lg min-h-[250px] md:min-h-[230px] mx-auto bg-white rounded-md shadow-sm flex items-center space-x-4 absolute right-2 md:right-[8rem] top-[8rem] md:top-[12rem]">
    <div>
      <h2 class="text-3xl font-normal text-black pb-5">SMK Negeri 2 Tabanan</h2>
      <p class="text-slate-500">Terwujudnya Peserta Didik Yang Terdidik, Cerdas, Terampil, Mandiri dan Berdaya Saing Global</p>

      <div class="my-6"></div>

      <a href="https://www.smkn2tabanan.sch.id/ppdb">
        <BlueButton button-text="INFO PPDB" />
        <span id="ping-bulet" class="absolute inline-flex h-3 w-3 inset-y-[-12px] inset-x-[6.3rem] rounded-full bg-sky-400"></span>
        <span id="ping-ping" class="animate-ping absolute inline-flex h-3 w-3 inset-y-[-12px] inset-x-[6.3rem] rounded-full bg-sky-400"></span>
      </a>
    </div>
  </div>
</template>
