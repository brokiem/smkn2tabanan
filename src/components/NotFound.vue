<template>
  <main>
    <div class="flex justify-center items-center h-screen">
      <div class="text-center">
        <span class="text-3xl animate-ping text-gray-900">[404]</span>
        <h2 class="text-2xl font-bold">Halaman tidak ditemukan</h2>
        <p class="text-xl mb-5">Halaman yang Anda cari tidak ada.</p>

        <router-link to="/" class="text-blue-500 hover:text-blue-700 hover:underline">
          Kembali ke beranda
        </router-link>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "NotFound"
}
</script>