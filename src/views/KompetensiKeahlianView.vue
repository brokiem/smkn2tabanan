<template>
  <main>
    <!-- Navbar -->
    <Navbar/>

    <!-- Page title -->
    <Header title="Kompetensi Keahlian"></Header>

    <div class="container mx-auto px-4 md:max-w-screen-lg pt-6">
      <!-- RPL -->
      <CardWithLeftImage class="mb-4"
          title="Rekayasa Perangkat Lunak"
          description="Biasa disebut RPL, sebuah jurusan yang mempelajari dan mendalami pengembangan perangkat lunak mulai dari pembuatan website, aplikasi, game dan semua yang berkaitan dengan pemrograman. Intinya RPL tidak akan jauh-jauh dari Coding, Desain dan Algoritma.
          <br><br>
          Beberapa peluang kerja setelah lulus dari SMK jurusan RPL antara lain: Developer IT, Programmer, System Analyst, Web Engineer ataupun Game Developer"
          :image-src="RPLImage">
      </CardWithLeftImage>

      <!-- MM -->
      <CardWithLeftImage class="mb-4"
          title="Multimedia"
          description="Jurusan Multimedia atau sering juga disebut MM merupakan suatu jurusan yang mempelajari tentang penggunaan komputer guna untuk menyajikan data teks, suara, gambar, animasi, serta video yang dibuat semenarik mungkin dengan tools-tools yang sudah tersedia.
          <br><br>
          Berikut adalah beberapa peluang kerja untuk lulusan dari jurusan Multimedia: Web Designer, Graphic Designer, Animator/ Illustrator, Interactive Media Designer ataupun Game Designer"
          :image-src="MMImage">
      </CardWithLeftImage>

      <!-- TB -->
      <CardWithLeftImage class="mb-4"
          title="Tata Boga"
          description="Tata Boga adalah Kompetensi Keahlian yang berada di bawah Program Keahlian Kuliner. Kompetensi Keahlian Tata Boga memberikan pengetahuan dan keterampilan kepada peserta didik di bidang pengolahan, penyajian dan pelayanan makanan dan minuman.
          <br><br>
          Lulusannya dapat berkarir sebagai koki atau chef, baker, barista, atau bartender di berbagai hotel, restoran, dan kafe. Selain itu, lulusan Tata Boga juga memiliki kesempatan untuk mengembangkan usaha kuliner sendiri."
          :image-src="TBImage">
      </CardWithLeftImage>

      <!-- AKL -->
      <CardWithLeftImage
          title="Akuntansi dan Keuangan Lembaga"
          description="Kompetensi Keahlian ini secara umum memberikan keterampilan untuk mengelola dan melakukan pencatatan keuangan secara manual maupun komputerisasi, dan membekali peserta dengan keterampilan akuntansi, mengelola transaksi keuangan dan pajak.
          <br><br>
          Berikut ini adalah beberapa peluang kerja bagi lulusan SMK Jurusan Akuntansi dan Keuangan Lembaga: Staff Akuntan, Internal Auditor, Perencanaan Keuangan, Kasir, Teller Bank ataupun Budgeting Staff"
          :image-src="AKLImage">
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
  name: "KompetensiKeahlianView",
  components: {CardWithLeftImage, Header},
  setup() {
    const RPLImage = new URL('@images/coding-rpl.jpg', import.meta.url).href;
    const MMImage = new URL('@images/camera-mm.jpg', import.meta.url).href;
    const TBImage = new URL('@images/food-boga.jpg', import.meta.url).href;
    const AKLImage = new URL('@images/calc-akl.jpg', import.meta.url).href;

    return {RPLImage, MMImage, TBImage, AKLImage};
  }
}
</script>