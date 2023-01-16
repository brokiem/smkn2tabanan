<template>
  <main>
    <!-- Navbar -->
    <Navbar/>

    <!-- Page title -->
    <Header title="Tata Tertib"></Header>

    <div class="container mx-auto px-4 md:max-w-default pt-6">
      <div class="flex justify-center">
        <div class="block w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
<!--          <img class="rounded-t-md h-[200px] md:h-[400px] w-full object-cover" src="https://cdn-smkn2tabanan.netlify.app/images/depan-smk.jpg" alt="Landing">-->

          <div class="p-6">
            <p class="text-base font-normal text-gray-700 dark:text-gray-400">
              Tata tertib sekolah adalah aturan-aturan yang harus atau wajib ditaati di sekolah agar proses kegiatan belajar mengajar dapat berlangsung dengan baik. Tata tertib bertujuan untuk membantu siswa siswi memperoleh prestasi belajar yang maksimal.
              <br><br>
              Dalam tata tertib ada hal-hal yang wajib dikerjakan dan dilarang dalam lingkungan sekolah. Setiap pelanggar akan dikenakan sanksi, entah itu berupa hukuman lisan ataupun lainnya. Bukan hanya untuk siswa, di lingkungan sekolah tata tertib berlaku juga untuk kepala sekolah, guru atau perangkat sekolah lainnya.
              <br><br>
              Tata Tertib siswa SMK Negeri 2 Tabanan dapat diunduh pada link atau tombol berikut:
            </p>

            <div class="pt-3"></div>

            <a href="https://drive.google.com/file/d/1stDf4czNttoryUewpwreQOsUQ2Y1CbrL/view?usp=sharing">
              <ColorlessButton class="shadow font-base" :button-icon-component="ArrowDownTrayIcon()" button-text="Unduh Dokumen"/>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="pb-10"></div>

    <!-- Footer -->
    <Footer/>
  </main>
</template>

<script>
import Header from "@/components/Header.vue";
import ArrowDownTrayIcon from "@/components/icons/ArrowDownTrayIcon.vue";
import ColorlessButton from "@/components/buttons/ColorlessButton.vue";
export default {
  name: "TataTertibView",
  methods: {
    ArrowDownTrayIcon() {
      return ArrowDownTrayIcon
    }
  },
  components: {ColorlessButton, ArrowDownTrayIcon, Header}
}
</script>
