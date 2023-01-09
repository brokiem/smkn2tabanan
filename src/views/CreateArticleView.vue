<template>
  <Navbar/>

  <Header class="pt-10 pb-10" title="Buat Artikel"></Header>

  <div class="mt-12 mb-12 container mx-auto max-w-screen-lg px-8 lg:px-0">
    <!-- Article image header input -->
    <label class="block mb-2 text-sm text-gray-900 dark:text-white" for="file_input">
      Gambar header artikel <span class="text-red-600">*</span>
    </label>
    <input @change="updatePreview" class="mb-2 block w-full text-sm text-gray-900 border border-gray-300 rounded-sm cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" accept="image/*">

    <!-- Uploaded image preview -->
    <img v-if="articleHeaderImg !== ''" id="preview-img" src="" class="mb-4 rounded-sm aspect-video w-full object-contain" style="background-color: #d0d1d3;">

    <!-- Article title input -->
    <label for="article-title" class="mb-2 text-sm text-gray-900">
      Judul artikel <span class="text-red-600">*</span>
    </label>
    <input v-model="articleTitle" type="text" id="article-title" class="transition duration-50 block w-full p-2.5 mb-4 text-sm text-gray-900 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Judul artikel" required>

    <!-- Article contents input -->
    <label class="mb-2 text-sm text-gray-900">
      Isi artikel <span class="text-red-600">*</span>
    </label>
    <QuillEditor :modules="modules" theme="snow" :toolbar="toolbar" v-model:content="editorValue" content-type="html"/>

    <!-- Article type select input -->
    <label for="article-type" class="block mt-4 mb-1 text-sm text-gray-900 dark:text-white">
      Tipe Artikel <span class="text-red-600">*</span>
    </label>
    <select v-model="articleType" id="article-type" class="transition duration-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
      <option selected disabled>Pilih tipe artikel</option>
      <option value="announcements">Pengumuman</option>
      <option value="news">Berita</option>
    </select>
    <!-- Draft article button -->
    <button @click="draftArticle" type="button" class="transition duration-150 mt-3 shadow-sm text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-sm text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
      Draf Artikel
    </button>
    <!-- Publish article button -->
    <button @click="publishArticle" type="button" class="transition duration-150 mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
      Publikasikan Artikel
    </button>

    <br>

    <!-- Article contents live preview -->
<!--    <div class="ql-editor">-->
<!--      <div v-html="editorValue"></div>-->
<!--    </div>-->
  </div>

  <!-- Loading modal when submitting article -->
  <div v-if="showLoadingModal" id="loading-modal" class="fade-in fixed top-0 left-0 z-50 w-screen h-screen flex items-center justify-center" style="background: rgba(0, 0, 0, 0.5);">
    <div class="bg-white border py-14 px-20 rounded-lg flex items-center flex-col">
      <div class="loader-dots block relative w-20 h-5 mt-2">
        <div class="absolute top-0 mt-1 w-3 h-3 rounded-full bg-green-500"></div>
        <div class="absolute top-0 mt-1 w-3 h-3 rounded-full bg-green-500"></div>
        <div class="absolute top-0 mt-1 w-3 h-3 rounded-full bg-green-500"></div>
        <div class="absolute top-0 mt-1 w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <div class="text-gray-500 text-base font-medium mt-5 text-center">
        {{articleStatus === "Draft" ? "Drafting" : "Publishing"}} Article...
      </div>
    </div>
  </div>

  <Footer/>
</template>

<script>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import ImageUploader from "quill-image-uploader";
import Header from "@/components/Header.vue";
import {upload} from "@/assets/imagekit";
import Swal from 'sweetalert2';
import {draftAnnouncement, draftNews, publishAnnouncement, publishNews, fetchKey} from "@/assets/rest";

export default {
  name: "CreateArticleView",
  setup() {
    // Quill.js modules
    const modules = [
        {
          name: 'imageUploader',
          module: ImageUploader,
          options: {
            upload: file => {
              return new Promise((resolve, reject) => {
                const token = $cookies.get('ltoken');

                if (token === null) {
                  reject("Kamu perlu login untuk melakukan aksi ini");
                }

                fetchKey(token, "imagekit-private").then((result) => {
                  if (result.success) {
                    const apikey = result.message;

                    upload(file, apikey).then((res) => {
                      resolve(res.url);
                    })
                  }
                })
              })
            }
          }
        }
    ];
    // Quill.js toolbar
    const toolbar = [
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'align': [] }],
        [{ 'color': [] }, { 'background': [] }],
        ['link', 'image', 'video'],
        ['clean']
    ];
    return { modules, toolbar }
  },
  created() {
    if (this.$cookies.get('ltoken') === null) {
      this.$router.push({name: 'login'});
    }
  },
  data() {
    return {
      articleTitle: "",
      articleHeaderImg: "",
      editorValue: "",
      articleType: "Pilih tipe artikel",
      articleStatus: "Draf",
      showLoadingModal: false
    }
  },
  components: {
    Header,
    QuillEditor,
  },
  methods: {
    draftArticle() {
      this.showLoadingModal = true;
      this.articleStatus = "Draft";

      const token = this.$cookies.get('ltoken');

      if (token === null) {
        alert("Kamu perlu login untuk melakukan aksi ini");
        return;
      }

      // get imagekit private key to upload the image
      fetchKey(token, "imagekit-private").then((result) => {
        if (result.success) {
          const apikey = result.message;
          const file = document.getElementById("file_input").files[0];

          // upload the image in the file_input element
          upload(file, apikey).then((res) => {
            console.log(res)
            const imageHeaderUrl = res.url;

            if (this.articleType === "announcements") {
              // draft announcement if the article type is announcement
              draftAnnouncement({title: this.articleTitle, image_header_url: imageHeaderUrl, contents: this.editorValue}, token)
                  .then((res) => {
                    this.showLoadingModal = false;
                    // if the draft announcement is successful, show the success alert
                    if (res.success) {
                      Swal.fire('Success!', 'Artikel berhasil didraft!', 'success').then(() => {
                        this.$router.push({name: 'main'});
                      })
                    } else {
                      // if the draft announcement is failed, show the error alert
                      Swal.fire({icon: 'error', title: 'Failed!', text: 'Artikel gagal didraft!'})
                    }
                  }).catch((err) => {
                    // if the draft announcement is failed, show the error alert
                    this.showLoadingModal = false;
                    Swal.fire({icon: 'error', title: 'Failed!', text: 'Artikel gagal didraft!'})
                  });
            } else if (this.articleType === "news") {
              // draft news if the article type is news
              draftNews({title: this.articleTitle, image_header_url: imageHeaderUrl, contents: this.editorValue}, token)
                  .then((res) => {
                    this.showLoadingModal = false;
                    // if the draft news is successful, show the success alert
                    if (res.success) {
                      Swal.fire('Success!', 'Artikel berhasil didraft!', 'success').then(() => {
                        this.$router.push({name: 'main'});
                      })
                    } else {
                      // if the draft news is failed, show the error alert
                      Swal.fire({icon: 'error', title: 'Failed!', text: 'Artikel gagal didraft!'})
                    }
                  }).catch((err) => {
                    // if the draft news is failed, show the error alert
                    this.showLoadingModal = false;
                    Swal.fire({icon: 'error', title: 'Failed!', text: 'Artikel gagal didraft!'})
                  });
            }
          });
        }
      }).catch((err) => {
        // if the fetch key is failed, show the error alert
        this.showLoadingModal = false;
        Swal.fire({
          icon: 'error',
          title: 'Failed!',
          text: 'Artikel gagal didraft!'
        })
      })
    },
    publishArticle() {
      this.showLoadingModal = true;
      this.articleStatus = "Publish";

      const token = this.$cookies.get('ltoken');

      if (token === null) {
        alert("Kamu perlu login untuk melakukan aksi ini");
        return;
      }

      // get imagekit private key to upload the image
      fetchKey(token, "imagekit-private").then((result) => {
        if (result.success) {
          const apikey = result.message;
          const file = document.getElementById("file_input").files[0];

          // upload the image in the file_input element
          upload(file, apikey).then((res) => {
            const imageHeaderUrl = res.url;

            if (this.articleType === "announcements") {
              publishAnnouncement({title: this.articleTitle, image_header_url: imageHeaderUrl, contents: this.editorValue}, token)
                  .then((res) => {
                    this.showLoadingModal = false;
                    if (res.success) {
                      Swal.fire('Success!', 'Artikel berhasil dipublikasikan!', 'success').then(() => {
                        this.$router.push({name: 'main'});
                      })
                    } else {
                      Swal.fire({icon: 'error', title: 'Failed!', text: 'Artikel gagal dipublikasikan!'})
                    }
                  }).catch((err) => {
                    this.showLoadingModal = false;
                    Swal.fire({icon: 'error', title: 'Failed!', text: 'Artikel gagal dipublikasikan!'})
                  });
            } else if (this.articleType === "news") {
              publishNews({title: this.articleTitle, image_header_url: imageHeaderUrl, contents: this.editorValue}, token)
                  .then((res) => {
                    this.showLoadingModal = false;
                    if (res.success) {
                      Swal.fire('Success!', 'Artikel berhasil dipublikasikan!', 'success')
                    } else {
                      Swal.fire({icon: 'error', title: 'Failed!', text: 'Artikel gagal dipublikasikan!'})
                    }
                  }).catch((err) => {
                    this.showLoadingModal = false;
                    Swal.fire({icon: 'error', title: 'Failed!', text: 'Artikel gagal dipublikasikan!'})
                  });
            }
          });
        }
      }).catch((err) => {
        this.showLoadingModal = false;
        Swal.fire({icon: 'error', title: 'Failed!', text: 'Artikel gagal dipublikasikan!'})
      })
    },
    getHeaderImg(callback) {
      // get file in the file_input element and get the image base64 data
      const file = document.getElementById("file_input").files[0];
      const reader = new FileReader();

      reader.onloadend = function () {
        callback(reader.result);
      }

      reader.readAsDataURL(file);
    },
    updatePreview() {
      this.getHeaderImg((headerImg) => {
        this.articleHeaderImg = headerImg;
        setTimeout(() => {
          // update the preview
          document.getElementById("preview-img").src = headerImg;
        }, 100);
      })
    }
  }
}
</script>

<style scoped>
.loader-dots div {
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.loader-dots div:nth-child(1) {
  left: 8px;
  animation: loader-dots1 0.6s infinite;
}
.loader-dots div:nth-child(2) {
  left: 8px;
  animation: loader-dots2 0.6s infinite;
}
.loader-dots div:nth-child(3) {
  left: 32px;
  animation: loader-dots2 0.6s infinite;
}
.loader-dots div:nth-child(4) {
  left: 56px;
  animation: loader-dots3 0.6s infinite;
}
@keyframes loader-dots1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes loader-dots3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes loader-dots2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}
</style>