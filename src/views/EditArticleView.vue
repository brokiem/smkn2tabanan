<template>
  <Navbar/>

  <Header class="pt-10 pb-10" title="Edit Artikel"></Header>

  <div class="mt-12 mb-12 container mx-auto max-w-screen-lg px-8 lg:px-0">
    <!-- Article image header input -->
    <label class="block mb-2 text-sm text-gray-900 dark:text-white" for="file_input">
      Gambar header artikel <span class="text-red-600">*</span>
    </label>
    <input @change="updatePreview" class="mb-2 block w-full text-sm text-gray-900 border border-gray-300 rounded-sm cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" accept="image/*">

    <!-- Preview uploaded image -->
    <img v-if="articleHeaderImg !== ''" id="preview-img" :src="article.image_header_url" class="mb-4 rounded-sm aspect-video w-full object-contain" style="background-color: #d0d1d3;" alt="Article header image">

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
    <select v-model="articleType" id="article-type" class="transition duration-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" disabled>
      <option selected disabled>Pilih tipe artikel</option>
      <option value="announcements" disabled>Pengumuman</option>
      <option value="news" disabled>Berita</option>
    </select>

    <!-- Delete article button -->
    <button @click="deleteArticle" type="button" class="transition duration-150 mt-3 shadow-sm text-white bg-red-600 hover:bg-red-800 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-sm text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
      Hapus Artikel
    </button>
    <!-- Draft article button -->
    <button @click="draftArticle" type="button" class="transition duration-150 mt-3 shadow-sm text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-sm text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
      Draf Artikel Yang di Edit
    </button>
    <!-- Publish article button -->
    <button @click="publishArticle" type="button" class="transition duration-150 mt-3 text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
      Publikasikan Artikel Yang di Edit
    </button>

    <br>

    <!-- Article contents live preview -->
<!--    <div class="ql-editor">-->
<!--      <div v-html="editorValue"></div>-->
<!--    </div>-->
  </div>

  <!--  Loading modal when uploading article -->
  <div v-if="showLoadingModal" id="loading-modal" class="fade-in fixed top-0 left-0 z-50 w-screen h-screen flex items-center justify-center" style="background: rgba(0, 0, 0, 0.5);">
    <div class="bg-white border py-14 px-20 rounded-lg flex items-center flex-col">
      <div class="loader-dots block relative w-20 h-5 mt-2">
        <div class="absolute top-0 mt-1 w-3 h-3 rounded-full bg-green-500"></div>
        <div class="absolute top-0 mt-1 w-3 h-3 rounded-full bg-green-500"></div>
        <div class="absolute top-0 mt-1 w-3 h-3 rounded-full bg-green-500"></div>
        <div class="absolute top-0 mt-1 w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <div class="text-gray-500 text-base font-medium mt-5 text-center">
        {{articleStatus}} Article...
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
import {
  editAnnouncement,
  fetchKey,
  getNewsDetail,
  getAnnouncementDetail,
  editNews,
  deleteNews,
  deleteAnnouncement,
  getDraftedNewsDetail,
  getDraftedAnnouncementDetail
} from "@/assets/rest";

export default {
  name: "CreateArticleView",
  beforeRouteEnter(to, from, next) {
    const titleId = to.params.articleId;
    const articleType = to.params.articleType;
    const id = titleId.split("-").pop();

    if (articleType === "berita") {
      // Get article and check if it exists
      Promise.all([getNewsDetail(id), getDraftedNewsDetail(id, $cookies.get("ltoken"))])
          .then((response) => {
            const result = response.filter(res => res.success === true);

            if (result.length >= 1) {
              const article = result[0].message[0];
              // check if title match with article title from REST
              if (encodeURIComponent(`${article.title.replaceAll(/\s+/g, "-").toLowerCase()}-${id}`) === encodeURIComponent(titleId)) {
                // continue to next route if article exists
                next(vm => {
                  // vm is the public component instance
                  // set article data
                  vm.article = article;
                  vm.articleType = "news";
                  vm.isArticleExists = true;
                  vm.isLoading = false;
                });
              }
            } else {
              next({name: "not-found"});
            }
          })
          .catch(() => {
            next({name: "not-found"});
          });
    } else if (articleType === "pengumuman") {
      // Get article and check if it exists
      Promise.all([getAnnouncementDetail(id), getDraftedAnnouncementDetail(id, $cookies.get("ltoken"))])
          .then((response) => {
            const result = response.filter(res => res.success === true);

            if (result.length >= 1) {
              const article = result[0].message[0];
              // check if title match with article title from REST
              if (encodeURIComponent(`${article.title.replaceAll(/\s+/g, "-").toLowerCase()}-${id}`) === encodeURIComponent(titleId)) {
                // continue to next route if article exists
                next(vm => {
                  // vm is the public component instance
                  // set article data
                  vm.article = article;
                  vm.articleType = "announcements";
                  vm.isArticleExists = true;
                  vm.isLoading = false;
                });
              }
            } else {
              next({name: "not-found"});
            }
          })
          .catch(() => {
            next({name: "not-found"});
          });
    }
  },
  components: {
    Header,
    QuillEditor,
  },
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

              // get upload key
              fetchKey(token, "imagekit-private").then((result) => {
                if (result.success) {
                  const apikey = result.message;

                  // upload image to imagekit
                  upload(file, apikey).then((res) => {
                    resolve(res.url);
                  })
                }
              })
            })
          }
        }
      }];
    // Quill.js Toolbar
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
      article: "",
      isArticleExists: false,
      isLoading: true,
      articleTitle: "",
      articleHeaderImg: "",
      editorValue: "",
      articleType: "Pilih tipe artikel",
      articleStatus: "Drafting",
      showLoadingModal: false
    }
  },
  mounted() {
    this.articleTitle = this.article.title;
    this.articleHeaderImg = "not null";
    this.editorValue = this.article.contents;
  },
  methods: {
    deleteArticle() {
      Swal.fire({
        title: 'Apakah Anda yakin?',
        text: "Anda tidak akan dapat mengembalikan artikel ini!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        cancelButtonText: 'Batal',
        confirmButtonText: 'Ya, hapus artikel!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.showLoadingModal = true;
          this.articleStatus = "Deleting";

          const token = this.$cookies.get('ltoken');

          if (token === null) {
            this.showLoadingModal = false;
            alert("Kamu perlu login untuk melakukan aksi ini");
            return;
          }

          if (this.articleType === "announcements") {
            deleteAnnouncement(this.article.id, token).then((res) => {
              this.showLoadingModal = false;

              if (res.success) {
                Swal.fire('Success!', 'Artikel berhasil dihapus!', 'success').then(() => {
                  this.$router.push({name: 'main'});
                })
              } else {
                Swal.fire({icon: 'error', title: 'Failed!', text: 'Gagal menghapus artikel'})
              }
            }).catch((err) => {
              this.showLoadingModal = false;
              Swal.fire({icon: 'error', title: 'Failed!', text: 'Gagal menghapus artikel'})
            })
          } else if (this.articleType === "news") {
            deleteNews(this.article.id, token).then((res) => {
              this.showLoadingModal = false;

              if (res.success) {
                Swal.fire('Success!', 'Artikel berhasil dihapus!', 'success').then(() => {
                  this.$router.push({name: 'main'});
                })
              } else {
                Swal.fire({icon: 'error', title: 'Failed!', text: 'Gagal menghapus artikel'})
              }
            }).catch((err) => {
              this.showLoadingModal = false;
              Swal.fire({icon: 'error', title: 'Failed!', text: 'Gagal menghapus artikel'})
            })
          }
        }
      })
    },
    draftArticle() {
      this.showLoadingModal = true;
      this.articleStatus = "Drafting";

      const token = this.$cookies.get('ltoken');

      if (token === null) {
        alert("Kamu perlu login untuk melakukan aksi ini");
        return;
      }

      fetchKey(token, "imagekit-private").then((result) => {
        if (result.success) {
          const apikey = result.message;

          const draft = (imageHeaderUrl) => {
            const editedArticle = {is_draft: true};

            // Hanya kirim artikel value yang diedit untuk efisiensi
            if (this.articleTitle !== this.article.title) editedArticle.title = this.articleTitle;
            if (imageHeaderUrl !== this.article.image_header_url) editedArticle.image_header_url = imageHeaderUrl;
            if (this.editorValue !== this.article.contents) editedArticle.contents = this.editorValue;

            if (this.articleType === "announcements") {
              editAnnouncement(this.article.id, editedArticle, token).then((res) => {
                this.showLoadingModal = false;
                if (res.success) {
                  Swal.fire('Success!', 'Artikel berhasil diedit dan didraft!', 'success')
                } else {
                  Swal.fire({icon: 'error', title: 'Failed!', text: 'Artikel gagal didraft!'})
                }
              }).catch(() => {
                this.showLoadingModal = false;
                Swal.fire({icon: 'error', title: 'Failed!', text: 'Artikel gagal didraft!'})
              });
            } else if (this.articleType === "news") {
              editNews(this.article.id, editedArticle, token).then((res) => {
                this.showLoadingModal = false;
                if (res.success) {
                  Swal.fire('Success!', 'Artikel berhasil diedit dan didraft!', 'success')
                } else {
                  Swal.fire({icon: 'error', title: 'Failed!', text: 'Artikel gagal didraft!'})
                }
              }).catch(() => {
                this.showLoadingModal = false;
                Swal.fire({icon: 'error', title: 'Failed!', text: 'Artikel gagal didraft!'})
              });
            }
          }

          const file = document.getElementById("file_input").files[0];
          if (file !== undefined) {
            upload(file, apikey).then((res) => {
              const imageHeaderUrl = res.url;
              draft(imageHeaderUrl)
            });
          } else {
            draft(this.article.image_header_url);
          }
        }
      }).catch(() => {
        this.showLoadingModal = false;
        Swal.fire({icon: 'error', title: 'Failed!', text: 'Artikel gagal didraft!'})
      })
    },
    publishArticle() {
      this.showLoadingModal = true;
      this.articleStatus = "Publishing";

      const token = this.$cookies.get('ltoken');

      if (token === null) {
        alert("Kamu perlu login untuk melakukan aksi ini");
        return;
      }

      fetchKey(token, "imagekit-private").then((result) => {
        if (result.success) {
          const apikey = result.message;

          const publish = (imageHeaderUrl) => {
            const editedArticle = {is_draft: false};

            // Hanya kirim artikel value yang diedit untuk efisiensi
            if (this.articleTitle !== this.article.title) editedArticle.title = this.articleTitle;
            if (imageHeaderUrl !== this.article.image_header_url) editedArticle.image_header_url = imageHeaderUrl;
            if (this.editorValue !== this.article.contents) editedArticle.contents = this.editorValue;

            if (this.articleType === "announcements") {
              editAnnouncement(this.article.id, editedArticle, token).then((res) => {
                this.showLoadingModal = false;
                if (res.success) {
                  Swal.fire('Success!', 'Artikel berhasil diedit dan dipublikasikan!', 'success')
                } else {
                  Swal.fire({icon: 'error', title: 'Failed!', text: 'Artikel gagal dipublikasikan!'})
                }
              }).catch(() => {
                this.showLoadingModal = false;
                Swal.fire({icon: 'error', title: 'Failed!', text: 'Artikel gagal dipublikasikan!'})
              });
            } else if (this.articleType === "news") {
              editNews(this.article.id, editedArticle, token).then((res) => {
                this.showLoadingModal = false;
                if (res.success) {
                  Swal.fire('Success!', 'Artikel berhasil diedit dan dipublikasikan!', 'success')
                } else {
                  Swal.fire({icon: 'error', title: 'Failed!', text: 'Artikel gagal dipublikasikan!'})
                }
              }).catch(() => {
                this.showLoadingModal = false;
                Swal.fire({icon: 'error', title: 'Failed!', text: 'Artikel gagal dipublikasikan!'})
              });
            }
          }

          const file = document.getElementById("file_input").files[0];
          if (file !== undefined) {
            upload(file, apikey).then((res) => {
              const imageHeaderUrl = res.url;
              publish(imageHeaderUrl)
            });
          } else {
            publish(this.article.image_header_url);
          }
        }
      }).catch(() => {
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
