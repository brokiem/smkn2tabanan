<template>
  <section id="kompetensi-keahlian" class="bg-white dark:bg-gray-900" style="background-color: #F8F9FC;">
    <div class="container mx-auto">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <!-- Section title -->
        <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 class="mb-4 text-3xl tracking-tight font-medium text-gray-900 dark:text-white">Kompetensi <span class="text-3xl tracking-tight font-medium gradient-text">Keahlian</span></h2>
          <p class="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">SMKN 2 Tabanan memiliki 4 Kompetensi Keahlian yang tersedia, antara lain</p>
        </div>

        <!-- Kompetensi grid -->
        <div class="space-y-3 lg:grid lg:grid-cols-4 sm:gap-4 lg:gap-3 lg:space-y-0">
          <!-- RPL -->
          <div class="flex flex-col p-4 mx-auto md:max-w-3xl text-center text-gray-900 bg-white rounded-md border-2 border-gray-100 shadow md:pt-8 hover:shadow-md transition duration-200">
            <h3 class="mb-4 text-2xl font-normal tracking-tight">Rekayasa Perangkat Lunak</h3>
            <p class="font-light text-gray-500 sm:text-lg text-justify">Biasa disebut RPL, sebuah jurusan yang mempelajari dan mendalami pengembangn perangkat lunak mulai dari pembuatan website, aplikasi, game dan semua yang berkaitan dengan pemrograman. Intinya RPL tidak akan jauh-jauh dari Coding, Desain dan Algoritma.</p>
          </div>
          <!-- MM -->
          <div class="flex flex-col p-4 mx-auto md:max-w-3xl text-center text-gray-900 bg-white rounded-md border-2 border-gray-100 shadow md:pt-8 hover:shadow-md transition duration-200">
            <h3 class="mb-4 text-2xl font-normal tracking-tight">Multimedia</h3>
            <p class="font-light text-gray-500 sm:text-lg text-justify">Jurusan Multimedia atau sering juga disebut MM merupakan suatu jurusan yang mempelajari tentang penggunaan komputer guna untuk menyajikan data teks, suara, gambar, animasi, serta video yang dibuat semenarik mungkin dengan tools-tools yang sudah tersedia.</p>
          </div>
          <!-- TB -->
          <div class="flex flex-col p-4 mx-auto md:max-w-3xl text-center text-gray-900 bg-white rounded-md border-2 border-gray-100 shadow md:pt-8 hover:shadow-md transition duration-200">
            <h3 class="mb-4 text-2xl font-normal tracking-tight">Tata Boga</h3>
            <p class="font-light text-gray-500 sm:text-lg text-justify">Tata Boga adalah Kompetensi Keahlian yang berada di bawah Program Keahlian Kuliner. Kompetensi Keahlian Tata Boga memberikan pengetahuan dan keterampilan kepada peserta didik di bidang pengolahan, penyajian dan pelayanan makanan dan minuman.</p>
          </div>
          <!-- AKL -->
          <div class="flex flex-col p-4 mx-auto md:max-w-3xl text-center text-gray-900 bg-white rounded-md border-2 border-gray-100 shadow md:pt-8 hover:shadow-md transition duration-200">
            <h3 class="mb-4 text-2xl font-normal tracking-tight">Akuntansi dan Keuangan Lembaga</h3>
            <p class="font-light text-gray-500 sm:text-lg text-justify">Kompetensi Keahlian ini secara umum memberikan keterampilan untuk mengelola dan melakukan pencatatan keuangan secara manual maupun komputerisasi, dan membekali peserta dengan keterampilan akuntansi, mengelola transaksi keuangan dan pajak.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Competency"
}
</script>

<style scoped>
.gradient-text {
  background: #4776E6;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #8E54E9, #4776E6);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #8E54E9, #4776E6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient 1s ease infinite;
}

</style>