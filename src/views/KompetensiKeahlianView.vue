<template>
  <main>
    <!-- Navbar -->
    <Navbar/>

    <!-- Page title -->
    <Header title="Kompetensi Keahlian"></Header>

    <div class="container mx-auto px-4 md:max-w-screen-lg pt-6">
      <!-- RPL -->
      <KompetensiKeahlianCard
          title="Rekayasa Perangkat Lunak"
          description="Biasa disebut RPL, sebuah jurusan yang mempelajari dan mendalami pengembangan perangkat lunak mulai dari pembuatan website, aplikasi, game dan semua yang berkaitan dengan pemrograman. Intinya RPL tidak akan jauh-jauh dari Coding, Desain dan Algoritma.
          <br><br>
          Beberapa peluang kerja setelah lulus dari SMK jurusan RPL antara lain: Developer IT, Programmer, System Analyst, Web Engineer ataupun Game Developer"
          image-src="/smkn2tabanan/images/coding-rpl.jpg">
      </KompetensiKeahlianCard>

      <div class="pb-4"></div>

      <!-- MM -->
      <KompetensiKeahlianCard
          title="Multimedia"
          description="Jurusan Multimedia atau sering juga disebut MM merupakan suatu jurusan yang mempelajari tentang penggunaan komputer guna untuk menyajikan data teks, suara, gambar, animasi, serta video yang dibuat semenarik mungkin dengan tools-tools yang sudah tersedia.
          <br><br>
          Berikut adalah beberapa peluang kerja untuk lulusan dari jurusan Multimedia: Web Designer, Graphic Designer, Animator/ Illustrator, Interactive Media Designer ataupun Game Designer"
          image-src="/smkn2tabanan/images/camera-mm.jpg">
      </KompetensiKeahlianCard>

      <div class="pb-4"></div>

      <!-- TB -->
      <KompetensiKeahlianCard
          title="Tata Boga"
          description="Tata Boga adalah Kompetensi Keahlian yang berada di bawah Program Keahlian Kuliner. Kompetensi Keahlian Tata Boga memberikan pengetahuan dan keterampilan kepada peserta didik di bidang pengolahan, penyajian dan pelayanan makanan dan minuman.
          <br><br>
          Lulusannya dapat berkarir sebagai koki atau chef, baker, barista, atau bartender di berbagai hotel, restoran, dan kafe. Selain itu, lulusan Tata Boga juga memiliki kesempatan untuk mengembangkan usaha kuliner sendiri."
          image-src="/smkn2tabanan/images/food-boga.jpg">
      </KompetensiKeahlianCard>

      <div class="pb-4"></div>

      <!-- AKL -->
      <KompetensiKeahlianCard
          title="Akuntansi dan Keuangan Lembaga"
          description="Kompetensi Keahlian ini secara umum memberikan keterampilan untuk mengelola dan melakukan pencatatan keuangan secara manual maupun komputerisasi, dan membekali peserta dengan keterampilan akuntansi, mengelola transaksi keuangan dan pajak.
          <br><br>
          Berikut ini adalah beberapa peluang kerja bagi lulusan SMK Jurusan Akuntansi dan Keuangan Lembaga: Staff Akuntan, Internal Auditor, Perencanaan Keuangan, Kasir, Teller Bank ataupun Budgeting Staff"
          image-src="/smkn2tabanan/images/calc-akl.jpg">
      </KompetensiKeahlianCard>
    </div>

    <div class="pb-10"></div>

    <!-- Footer -->
    <Footer/>
  </main>
</template>

<script>
import Header from "@/components/Header.vue";
import KompetensiKeahlianCard from "@/components/KompetensiKeahlianCard.vue";
export default {
  name: "KompetensiKeahlianView",
  components: {KompetensiKeahlianCard, Header}
}
</script>