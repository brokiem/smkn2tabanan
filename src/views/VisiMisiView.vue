<template>
  <main>
    <!-- Navbar -->
    <Navbar/>

    <!-- Page title -->
    <Header title="Visi &amp; Misi"></Header>

    <div class="container mx-auto px-4 md:max-w-default pt-6">
      <div class="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <!-- Visi -->
        <h5 class="mb-2 text-2xl font-base tracking-tight text-black dark:text-white">
          Visi
        </h5>
        <!-- Visi contents -->
        <p class="mt-1 text-base font-normal text-gray-700 dark:text-gray-400">
          Terwujudnya Peserta Didik Yang Terdidik, Cerdas, Terampil, Mandiri dan Berdaya Saing Global
        </p>
      </div>

      <div class="mt-4 block w-full p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <!-- Misi -->
        <h5 class="mb-2 text-2xl font-base tracking-tight text-black dark:text-white">
          Misi
        </h5>
        <!-- Misi contents -->
        <div class="pl-5">
          <div class="mt-1 text-base font-normal text-gray-700 dark:text-gray-400">
            <ol class="list-disc list-outside text-justify hover:list-decimal">
              <li>Menanamkan keimanan dan ketakwaan melalui pengamalan ajaran agama</li>
              <li>Melaksanakan pendidikan melalui proses pembelajaran, pelatihan dan bimbingan yang maksimal</li>
              <li>Mengembangkan bidang ilmu pengetahuan, teknologi, keterampilan hidup berdasarkan minat, bakat dan potensi peserta didik</li>
              <li>Membina kemandirian peserta didik melalui kegiatan pembiasan, kewirausahaan dan pengembangan diri yang terencana serta berkesinambungan</li>
              <li>Menjalin kerjasama yang harmonis antar warga sekolah, lingkungan dan lembaga lain yang terkait, baik nasional maupun internasional</li>
            </ol>
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
  name: "VisiMisiView",
  components: {Header}
}
</script>