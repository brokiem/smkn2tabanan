<template>
  <Navbar/>

  <!-- Page title -->
  <Header title="Ekstrakulikuler"></Header>

  <div class="container mx-auto pt-6">
    <div class="px-4 mx-auto md:max-w-screen-xl lg:px-6">
      <div class="space-y-3 lg:grid lg:grid-cols-3 gap-4 lg:gap-5 lg:space-y-0">
        <EkstrakulikulerCard title="Pramuka" description="Pramuka merupakan wadah proses pendidikan non formal dalam pembentukan karakter. Pramuka adalah kegiatan ekstrakulikuler wajib di sekolah." pembimbing="Putu Agung Mahardika, S.T., M.Pd.<br>I Nyoman Sudarna, S.Ag.<br>Dewa Gede Pajar Sena Putra<br>Made Ida Mas Ary Anggraeni<br>Ni Made Dewi Ermawati, S.Pd<br>Ni Wayan Winiantari, S.Pd.B."></EkstrakulikulerCard>
        <EkstrakulikulerCard title="PKS" description="Tugas PKS adalah mengatur lalu lintas silingkungan sekolah dan lingkungan sekitar sekolah, terutama pada saat menyebrangkan siswa-siswi yang akan menuju kesekolah" pembimbing="Ni Made Puspaningsih, S.Kom"></EkstrakulikulerCard>
        <EkstrakulikulerCard title="Sepak Bola / Futsal" description="Kegiatan Ekstrakurikuler untuk membantu pengembangan potensi, bakat, dan minat peserta didik dalam bidang Sepak Bola" pembimbing="I Made Wetera, S.Pd"></EkstrakulikulerCard>
        <EkstrakulikulerCard title="Tari" description="Kegiatan Ekstrakulikuler untuk memperdalam pengetahuan dan mangasah skill peserta didik tentang tari tradisional." pembimbing="Gusti Agung Ayu Eka Ratih, S.E"></EkstrakulikulerCard>
        <EkstrakulikulerCard title="Pencat Silat" description="Wadah bagi peserta didik yang ingin mengenal dan yang telah memiliki kemampuan dalam beladiri pencak silat. Sehingga mereka bisa mengembangkan kemampuan diri mereka melalui beladiri pencak silat." pembimbing="I Made Dwi Agung Sastrawan"></EkstrakulikulerCard>
        <EkstrakulikulerCard title="Voly" description="Kegiatan Ekstrakulikuler untuk mendorong prestasi non akademik, pertumbuhan fisik dan perkembangan psikis, meningkatkan kemampuan dan keterampilan dalam bermain bola voli." pembimbing="I Kade Made Wetra"></EkstrakulikulerCard>
        <EkstrakulikulerCard title="Catur" description="EkstraKulikuler untuk mengenal dan mengasah kemampuan peserta didik dalam bermain Catur. Serta untuk melatih cara berfikir peserta didik dalam membuat strategi permainan." pembimbing="A. A. Sagung Bintang Sri Utami D., S.E."></EkstrakulikulerCard>
        <EkstrakulikulerCard title="Tata Rias" description="Kegiatan kesiswaan dalam mengembangkan keterampilan peserta didik dalam bidang Tata Rias." pembimbing="Dra. Ni Nyoman Ayu Wahyuning Apriani, M.Pd.<br>Ida Ayu Ngurah Asokayaning"></EkstrakulikulerCard>
        <EkstrakulikulerCard title="PMR" description="Ekstrakurikuler yang bergerak dibidang kepalangmerahan. Memberi pertolongan pertama merupakan tugas utama anggota PMR kepada teman atau siswa di sekolah yang sakit atau mengalami kecelakaan ringan" pembimbing="Dra. Ni Nyoman Puspawati"></EkstrakulikulerCard>
        <EkstrakulikulerCard title="Yoga Asana" description="Merupakan jenis olahraga yang bertujuan untuk meningkatkan kesehatan dan kesejahteraan tubuh, dengan melibatkan aktivitas fisik, latihan pernapasan, teknik relaksasi, dan latihan meditasi." pembimbing="I Nyoman Lenderi, S.Ag."></EkstrakulikulerCard>
        <EkstrakulikulerCard title="Dharma Gita" description="Ekstrakuliler untuk menambah pengetahuan tentang nyanyian Dharma Gita dan mengasah kemampuan menyanyikan tembang - tembang keagamaan Hindu, terutama dalam pelaksanaan Yadnya" pembimbing="I Nyoman Sudarna, S.Ag."></EkstrakulikulerCard>
        <EkstrakulikulerCard title="Vocal Group / Musik" description="Kegiatan Ekstrakulikuler dalam mengasah kemampuan peserta didik tentang seni musik, selain Alat Musik, juga melatih vokal bagi peserta didik yang masuk dalam bidang bernyanyi." pembimbing="A.A. Sagung Bintang Sri Utami D., S.E."></EkstrakulikulerCard>
        <EkstrakulikulerCard title="Bulu Tangkis" description="Kegiatan Ekstrakurikuler untuk membantu pengembangan potensi, bakat, dan minat peserta didik dalam bidang Bulu Tangkis" pembimbing="Dewa Nyoman Suparta, S.Pd"></EkstrakulikulerCard>
        <EkstrakulikulerCard title="Fruit Carving" description="Fruit Carving merupakan seni mengukir buah atau sebuah kegiatan memahat dan mengukir buah menggunakan alat sederhana seperti cutter, pisau, dan tusuk gigi menjadi maha karya yang menakjubkan." pembimbing="Ketut Wirasatya, S.Pd."></EkstrakulikulerCard>
        <EkstrakulikulerCard title="Basket" description="Kegiatan Ekstrakurikuler untuk membantu pengembangan potensi, bakat, dan minat peserta didik dalam bidang Basket" pembimbing="I Dewa Putu Wirajaya, S.Fil.H."></EkstrakulikulerCard>
        <EkstrakulikulerCard title="Siklus Akuntansi" description="Mangasah kemampuan setiap tindakan akuntansi yang mengidentifikasi, analisis, dan mencatat transaksi keuangan menggunakan proses yang berulang." pembimbing="Desak Gede Yuly Sariantini, S.E."></EkstrakulikulerCard>
        <EkstrakulikulerCard title="KSPAN" description="Program kegiatan dalam memberikan informasi kepada siswa terkait informasi mengenai kesehatan reproduksi (Kespro), alat reproduksi laki-laki dan perempuan, narkoba, infeksi menular seksual (IMS), HIV dan AIDS." pembimbing="Ni Putu Kembar Murniati, S.Pd., M.Pd."></EkstrakulikulerCard>
        <EkstrakulikulerCard title="Cinematography" description="Belajar cara memposisikan kamera, atur angle, dan ciptakan tangkapan gambar yang mengesankan. Tak sampai disitu, extra cinematography akan memfokuskan siswa untuk bisa menyampaikan pesan yang dalam melalui visualisasi gambar." pembimbing="Ni Putu Eny Purwita Dewi, S.Kom"></EkstrakulikulerCard>
        <EkstrakulikulerCard title="Praktek Upakara Agama (Mejejahit)" description="Ekstrakulikuler yang mengajarkan proses pembuatan dan mengasah kemampuan dalam membuat Upakara kepada peserta didik." pembimbing="Ni Nyoman Sutarihanti, S.Fil.H."></EkstrakulikulerCard>
        <EkstrakulikulerCard title="Komputer Akuntansi (MYOB)" description="Belajar mengenai program aplikasi yang digunakan untuk mengolah transaksi akuntansi dan menghasilkan laporan keuangan." pembimbing="Gusti Agung Ayu Eka Ratih, S.E."></EkstrakulikulerCard>
        <EkstrakulikulerCard title="Jurnalistik" description="Selidiki fenomena, kasus, dan wawancarai orang disekitar untuk dapat menyampaikan berita yang akurat, presisi, dan aktual." pembimbing="I Made Darma Sentana Putra, S.Pd."></EkstrakulikulerCard>
        <EkstrakulikulerCard title="UKS" description="Program UKS mencakup kegiatan aktivitas fisik, sarapan dengan menu sehat, menerapkan Cuci Tangan Pakai Sabun, buku raport kesehatanku untuk gerakan literasi di lingkungan sekolah" pembimbing="Dra. Ni Nyoman Puspawati"></EkstrakulikulerCard>
        <EkstrakulikulerCard title="Club English" description="Kegiatan Ekstrakurikuler yang berfokus untuk mengasah kemampuan berbicara murid dalam berbahasa inggris. Bagus untuk diplomasi dengan pihak asing dengan cangkupan kerja yang menjadi jauh lebih luas" pembimbing="Ni Putu Nanik Puspita Rini, S.S., M.Pd."></EkstrakulikulerCard>
        <EkstrakulikulerCard title="Club Matematika" description="Memiliki ketertarikan lebih dalam hal hitung menghitung? Ini adalah extra yang tepat untuk mempelajari matematika ke titik yang jauh lebih dalam lagi." pembimbing="Ni Wayan Widani, S.Pd."></EkstrakulikulerCard>
      </div>
    </div>
  </div>

  <div class="pb-10"></div>

  <Footer/>
</template>

<script>
import EkstrakulikulerCard from "@/components/EkstrakulikulerCard.vue";
import Header from "@/components/Header.vue";

export default {
  name: "EkstrakulikulerPage",
  components: {
    Header,
    EkstrakulikulerCard
  }
}
</script>

<style scoped>

</style>