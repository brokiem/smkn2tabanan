<template>
  <main>
    <!-- Navbar -->
    <Navbar/>

    <!-- Page title -->
    <Header title="Tata Tertib"></Header>

    <div class="container mx-auto px-4 md:max-w-screen-lg pt-6">
      <div class="flex justify-center">
        <div class="block w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <img class="rounded-t-md h-[200px] md:h-[400px] w-full object-cover" src="/public/images/depan-smk.jpg" alt="Landing">

          <div class="p-6">
            <p class="text-base font-normal text-gray-700 dark:text-gray-400">
              Tata tertib sekolah adalah aturan-aturan yang harus atau wajib ditaati di sekolah agar proses kegiatan belajar mengajar dapat berlangsung dengan baik. Tata tertib bertujuan untuk membantu siswa siswi memperoleh prestasi belajar yang maksimal.
              <br><br>
              Dalam tata tertib ada hal-hal yang wajib dikerjakan dan dilarang dalam lingkungan sekolah. Setiap pelanggar akan dikenakan sanksi, entah itu berupa hukuman lisan ataupun lainnya. Bukan hanya untuk siswa, di lingkungan sekolah tata tertib berlaku juga untuk kepala sekolah, guru atau perangkat sekolah lainnya.
              <br><br>
              Tata Tertib siswa SMK Negeri 2 Tabanan dapat diunduh pada link berikut:
            </p>

            <div class="pt-3"></div>

            <a href="https://drive.google.com/file/d/1stDf4czNttoryUewpwreQOsUQ2Y1CbrL/view?usp=sharing">
              <button type="button" class="transition duration-200 shadow text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                Unduh Dokumen
              </button>
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
export default {
  name: "TataTertibView",
  components: {Header}
}
</script>