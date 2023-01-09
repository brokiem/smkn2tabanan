<template>
  <Navbar/>

  <div class="mx-auto">
    <section class="bg-[url('/public/assets/depan-smk-opt.jpg')]" style="box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.4);">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              {{ isLoggedIn ? "Anda sudah masuk" : "Masuk" }}
            </h1>
            <div v-if="isLoggedIn" class="space-y-4 md:space-y-6">
              <button @click="logout" class="transition duration-150 w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Keluar</button>
            </div>
            <div v-if="!isLoggedIn" class="space-y-4 md:space-y-6">
              <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                <input type="email" name="email" id="email" placeholder="Masukkan email" class="transition duration-150 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
              </div>
              <div>
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Kata Sandi</label>
                <input type="password" name="password" id="password" placeholder="Masukkan kata sandi" class="transition duration-150 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
              </div>
              <button @click="submit" class="transition duration-150 w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Masuk</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <Footer/>
</template>

<script>
import Article from "@/components/Article.vue";
import {login} from "/src/assets/rest"
import Swal from "sweetalert2";

export default {
  name: "DaftarBeritaView",
  components: {Article},
  created() {
    if (this.$cookies.get('ltoken') !== null) {
      this.isLoggedIn = true;
    }
  },
  data() {
    return {
      isLoggedIn: false,
    }
  },
  methods: {
    logout: function () {
      this.$cookies.remove('ltoken', {path: '/smkn2tabanan'});
      location.reload();
    },
    submit: function () {
      const data = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
      }

      const _this = this;
      login(data).then(function (res) {
        if (res.success) {
          _this.$cookies.set('ltoken', res.message.token, '24h');
          document.getElementById("email").value = "";
          document.getElementById("password").value = "";

          Swal.fire('Success!', 'Login sukses!', 'success').then(() => {
            location.reload();
          });
        } else {
          Swal.fire({icon: 'error', title: 'Failed!', text: 'Gagal masuk. Email atau password salah!'})
        }
      })
    }
  }
}
</script>