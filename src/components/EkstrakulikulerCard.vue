<template>
  <!-- Card contents -->
  <div class="flex flex-col mx-auto md:max-w-3xl text-gray-900 bg-white rounded-md border-2 border-gray-100 shadow transition duration-200 p-5">
    <!-- Card ekstra title -->
    <h3 class="mb-4 text-xl font-normal tracking-tight">{{title}}</h3>

    <!-- Card ekstra description -->
    <p class="font-light text-gray-500 text-md text-">{{description}}</p>

    <!-- Card ekstra button -->
    <div class="flex flex-wrap mt-auto">
      <button v-bind:data-modal-toggle="title.replaceAll(' ', '-').toLowerCase()" type="button" class="mt-4 w-full transition duration-200 shadow-sm text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 font-medium rounded-md text-sm py-1.5 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
        GURU PEMBIMBING
      </button>
    </div>
  </div>

  <!-- Guru pembimbing modal -->
  <div v-bind:id="title.replaceAll(' ', '-').toLowerCase()" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
    <div class="relative w-full h-full max-w-2xl h-auto">
      <!-- Modal content -->
      <div class="relative bg-white rounded-md shadow dark:bg-gray-700">
        <!-- Modal header -->
        <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
          <h3 class="text-xl font-medium text-gray-900 dark:text-white">
            Guru Pembimbing {{title}}
          </h3>
          <button v-bind:data-modal-toggle="title.replaceAll(' ', '-').toLowerCase()" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal body -->
        <div class="p-6 space-y-6">
          <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400 text-center" v-html="pembimbing"></p>
        </div>
        <!-- Modal footer -->
        <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
          <button v-bind:data-modal-toggle="title.replaceAll(' ', '-').toLowerCase()" type="button" class="w-full transition duration-200 shadow-sm text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 font-medium rounded-md text-sm py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
            Tutup
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "flowbite/src/components/modal";

export default {
  name: "EkstrakulikulerCard",
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    pembimbing: {
      type: String,
      required: true
    }
  },
  mounted() {
    // init flowbite js listener
    // modal
    this.initModal()
  },
  methods: {
    initModal: function () {
      const selectors = {
        main: 'data-modal-toggle',
        placement: 'data-modal-placement',
        show: 'data-modal-show',
        backdrop: 'data-modal-backdrop'
      }
      const Default = {
        placement: 'center',
        backdrop: 'dynamic'
      }

      const getModalInstance = (id, instances) => {
        if (instances.some(modalInstance => modalInstance.id === id)) {
          return instances.find(modalInstance => modalInstance.id === id)
        }
        return false
      }

      let modalInstances = []
      document.querySelectorAll(`[${selectors.main}]`).forEach(el => {
        const modalId = el.getAttribute(selectors.main);
        const modalEl = document.getElementById(modalId);
        const placement = modalEl.getAttribute(selectors.placement)
        const backdrop = modalEl.getAttribute(selectors.backdrop)

        if (modalEl) {
          if (!modalEl.hasAttribute('aria-hidden') && !modalEl.hasAttribute('aria-modal')) {
            modalEl.setAttribute('aria-hidden', 'true');
          }
        }

        let modal = null
        if (getModalInstance(modalId, modalInstances)) {
          modal = getModalInstance(modalId, modalInstances)
          modal = modal.object
        } else {
          modal = new Modal(modalEl, {
            placement: placement ? placement : Default.placement,
            backdrop: backdrop ? backdrop : Default.backdrop
          })

          modalInstances.push({
            id: modalId,
            object: modal
          })
        }

        el.onclick = () => {
          modal.toggle()
        }
      })
    }
  }
}
</script>