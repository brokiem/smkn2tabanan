<template>
  <!-- Navbar -->
  <Navbar/>

  <!-- Page title -->
  <h2 class="mb-4 text-3xl text-center text-gray-900 dark:text-white pt-16 pb-16" style="background-color: #F8F9FC;">
    Fasilitas Sekolah
  </h2>

  <div class="container mx-auto px-4 md:max-w-screen-lg pt-6">
    <!-- Page card title -->
    <div class="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <!-- Bengkel Komputer -->
      <h5 class="mb-2 text-2xl font-base tracking-tight text-gray-700 dark:text-white">
        Bengkel Komputer
      </h5>
      <!-- Description -->
      <p class="mt-1 text-base font-normal text-gray-700 dark:text-gray-400">
        SMKN 2 Tabanan  memiliki 3 bengkel komputer utama lengkap dengan LAN beserta jaringan internet.
        Ruangan sejuk dengan berpendingin AC untuk selalu menjaga suhu ruangan yang dilengkapi dengan
        LCD Proyektor sehingga pelaksanaan kegiatan pembelajaran berlangsung dengan nyaman.
      </p>

      <!-- Studio Broadcast -->
      <h5 class="mb-2 mt-6 text-2xl font-base tracking-tight text-gray-700 dark:text-white">
        Studio Broadcast
      </h5>
      <!-- Description -->
      <p class="mt-1 text-base font-base text-gray-700 dark:text-gray-400">
        Jurusan Multimedia disediakan studio broadcast untuk melaksanakan siaran baik secara online maupun offline,
        dengan didukung peralatan yang profesional seperti tersedianya video mixer, audio mixer dan tata cahaya.
      </p>

      <!-- Studio Photo -->
      <h5 class="mb-2 mt-6 text-2xl font-base tracking-tight text-gray-700 dark:text-white">
        Studio Photo
      </h5>
      <!-- Description -->
      <p class="mt-2 text-base font-normal text-gray-700 dark:text-gray-400">
        Untuk Kompetensi Keahlian Multimedia disediakan juga ruangan studio photo yang digunakan untuk praktek
        pengolahan gambar digital yang dilengkapi dengan camera DSLR beserta tata cahaya dengan background
        yang bisa diganti-ganti.
      </p>

      <!-- Dapur dan Ruang Saji -->
      <h5 class="mb-2 mt-6 text-2xl font-base tracking-tight text-gray-700 dark:text-white">
        Dapur dan Ruang Saji
      </h5>
      <!-- Description -->
      <p class="mt-2 text-base font-normal text-gray-700 dark:text-gray-400">
        Kompetensi Keahlian Tata Boga disediakan dapur yang dilengkapi dengan alat-alat sesuai standar
        sehingga dalam pengolahan makanan dan minuman dapat dilakukan dengan mudah. Selain itu pada
        kompetensi keahlian ini juga dilengkapi dengan ruangan saji yang digunakan sebagai wadah
        layaknya restoran di hotel berbintang.
      </p>
    </div>
  </div>

  <div class="pb-10"></div>

  <!-- Footer -->
  <Footer/>
</template>

<script>
export default {
  name: "FasilitasSekolahPage"
}
</script>

<style scoped>

</style>