<template>
  <main>
    <!-- Navbar -->
    <Navbar/>

    <!-- Page title -->
    <Header title="Fasilitas Sekolah"></Header>

    <div class="container mx-auto px-4 md:max-w-default pt-6">
      <!-- Page card -->
      <CardWithLeftImage class="mb-4"
          title="Bengkel Komputer"
          description="SMKN 2 Tabanan  memiliki 3 bengkel komputer utama lengkap dengan LAN beserta jaringan internet.
          Ruangan sejuk dengan berpendingin AC untuk selalu menjaga suhu ruangan yang dilengkapi dengan
          LCD Proyektor sehingga pelaksanaan kegiatan pembelajaran berlangsung dengan nyaman."
          image-src="https://www.smkn2tabanan.sch.id/laravel-filemanager/photos/1/WhatsApp%20Image%202021-06-02%20at%2012.19.10%20PM.jpeg">
      </CardWithLeftImage>

      <CardWithLeftImage class="mb-4"
          title="Studio Broadcast"
          description="Jurusan Multimedia disediakan studio broadcast untuk melaksanakan siaran baik secara online maupun offline,
          dengan didukung peralatan yang profesional seperti tersedianya video mixer, audio mixer dan tata cahaya."
          image-src="https://smkn2tabanan.sch.id/laravel-filemanager/photos/1/ruangbroadcast.jpeg">
      </CardWithLeftImage>

      <CardWithLeftImage class="mb-4"
          title="Studio Foto"
          description="Untuk Kompetensi Keahlian Multimedia disediakan juga ruangan studio photo yang digunakan untuk praktek
          pengolahan gambar digital yang dilengkapi dengan camera DSLR beserta tata cahaya dengan background
          yang bisa diganti-ganti."
          image-src="https://www.smkn2tabanan.sch.id/laravel-filemanager/photos/1/WhatsApp%20Image%202021-06-02%20at%2012.19.10%20PM%20(1).jpeg">
      </CardWithLeftImage>

      <CardWithLeftImage
          title="Dapur dan Ruang Saji"
          description="Kompetensi Keahlian Tata Boga disediakan dapur yang dilengkapi dengan alat-alat sesuai standar
          sehingga dalam pengolahan makanan dan minuman dapat dilakukan dengan mudah. Selain itu pada
          kompetensi keahlian ini juga dilengkapi dengan ruangan saji yang digunakan sebagai wadah
          layaknya restoran di hotel berbintang."
          image-src="https://www.smkn2tabanan.sch.id/laravel-filemanager/photos/1/DSC_0112%20(1).jpg">
      </CardWithLeftImage>
    </div>

    <div class="pb-10"></div>

    <!-- Footer -->
    <Footer/>
  </main>
</template>

<script>
import Header from "@/components/Header.vue";
import CardWithLeftImage from "@/components/CardWithLeftImage.vue";
export default {
  name: "FasilitasSekolahView",
  components: {CardWithLeftImage, Header}
}
</script>