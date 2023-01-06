<template>
  <nav class="px-2 sm:px-4 pb-2.5 pt-3 gradient-navbar">
    <div class="container flex flex-wrap items-center justify-center mx-auto">
      <img src="https://cdn-smkn2tabanan.netlify.app/images/logo-smk2.png" width="50" height="50" alt="Logo SMK"/>
    </div>
    <div class="container flex flex-wrap items-center justify-center mx-auto">
      <h6 class="text-xl font-bold text-white">SMK NEGERI 2 TABANAN</h6>
    </div>
  </nav>

  <nav id="navbar" class="px-4 sm:px-4 dark:bg-gray-900 fixed w-full z-20 sticky top-0 left-0 bg-white shadow-md transition duration-150">
    <div class="container-lg flex flex-wrap items-center justify-between mx-auto">
      <div class="flex items-center"></div>

      <!-- Navbar button for small screen devices -->
      <div class="flex md:order-2">
        <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 md:hover:text-blue-700 dark:text-gray-400 dark:hover:bg-gray-700" aria-controls="navbar-cta" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
      </div>

      <!-- Navbar items -->
      <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
        <!-- Item list -->
        <ul class="flex flex-col pb-4 md:p-4 mt-3 rounded-md md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <router-link to="/" class="no-underline select-none block py-2 pl-3 pr-4 bg-gray-100 rounded md:bg-transparent md:hover:text-blue-700 text-gray-700 md:p-0 dark:text-white" aria-current="page">
              Beranda
            </router-link>
          </li>
          <li>
            <div data-dropdown-toggle="profile-dropdown" class="cursor-pointer select-none block py-2 pl-3 pr-4 bg-gray-100 md:bg-transparent text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
              Profil
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 inline"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" /></svg>

              <!-- Profile dropdown -->
              <div id="profile-dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow border dark:bg-gray-700">
                <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                  <li>
                    <router-link to="/profil/sejarah" class="no-underline text-gray-700 block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sejarah Sekolah</router-link>
                  </li>
                  <li>
                    <router-link to="/profil/visi-misi" class="no-underline text-gray-700 block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Visi &amp; Misi</router-link>
                  </li>
                  <li>
                    <router-link to="/profil/fasilitas" class="no-underline text-gray-700 block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Fasilitas Sekolah</router-link>
                  </li>
                  <li>
                    <router-link to="/profil/logo" class="no-underline text-gray-700 block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logo Sekolah</router-link>
                  </li>
                  <li>
                    <router-link to="/profil/struktur-organisasi" class="no-underline text-gray-700 block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Struktur Organisasi</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <div data-dropdown-toggle="artikel-dropdown" class="cursor-pointer select-none block py-2 pl-3 pr-4 bg-gray-100 md:bg-transparent text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
              Artikel
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 inline"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" /></svg>

              <!-- Article dropdown -->
              <div id="artikel-dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow border dark:bg-gray-700">
                <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                  <li>
                    <router-link to="/artikel/pengumuman" class="no-underline text-gray-700 block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Pengumuman</router-link>
                  </li>
                  <li>
                    <router-link to="/artikel/berita" class="no-underline text-gray-700 block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Berita</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <router-link to="/kompetensi-keahlian" class="no-underline select-none block py-2 pl-3 pr-4 text-gray-700 bg-gray-100 md:bg-transparent rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
              Kompetensi Keahlian
            </router-link>
          </li>
          <li>
            <div data-dropdown-toggle="kesiswaan-dropdown" class="cursor-pointer select-none block py-2 pl-3 pr-4 bg-gray-100 md:bg-transparent text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
              Kesiswaan
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 inline"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" /></svg>

              <!-- Kesiswaan dropdown -->
              <div id="kesiswaan-dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow border dark:bg-gray-700">
                <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                  <li>
                    <a href="#" class="no-underline text-gray-700 block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Osis</a>
                  </li>
                  <li>
                    <router-link to="/kesiswaan/tatatertib" class="no-underline text-gray-700 block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Tata Tertib</router-link>
                  </li>
                  <li>
                    <router-link to="/kesiswaan/ekstrakulikuler" class="no-underline text-gray-700 block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Ekstrakulikuler</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import Dropdown from "flowbite/src/components/dropdown";
import Collapse from "flowbite/src/components/collapse";

export default {
  name: "Navbar",
  mounted() {
    // init flowbite js listener
    // dropdown
    document.querySelectorAll('[data-dropdown-toggle]').forEach(triggerEl => {
      const targetEl = document.getElementById(triggerEl.getAttribute('data-dropdown-toggle'))
      const placement = triggerEl.getAttribute('data-dropdown-placement')

      new Dropdown(targetEl, triggerEl, {
        placement: placement ? placement : 'bottom'
      })
    })
    // collapse
    document.querySelectorAll('[data-collapse-toggle]').forEach(triggerEl => {
      const targetEl = document.getElementById(triggerEl.getAttribute('data-collapse-toggle'))
      triggerEl.setAttribute('aria-expanded', 'false')

      new Collapse(targetEl, {
        triggerEl: triggerEl
      })
    })
  }
}
</script>

<style scoped>
.gradient-navbar {
  background: rgb(29, 78, 216);
  background: -moz-linear-gradient(166deg, rgba(29, 78, 216, 1) 27%, rgb(69, 197, 252) 100%);
  background: -webkit-linear-gradient(166deg, rgba(29, 78, 216, 1) 27%, rgb(69, 182, 252) 100%);
  background: linear-gradient(166deg, rgba(29, 78, 216, 1) 27%, rgb(69, 182, 252) 100%);
  background-size: 180% 180%;
  animation: gradient 5s ease infinite;
}
</style>