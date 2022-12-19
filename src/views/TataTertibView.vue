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
              <button type="button" class="transition duration-200 shadow text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1 top-[-1px] inline w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
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