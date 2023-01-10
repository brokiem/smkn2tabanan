<template>
  <footer>
    <!-- Mega Footer -->
    <div class="bg-white py-7 px-4" style="background-color: #f5f5f5;">
      <div class="container mx-auto sm:px-4">
        <div class="md:flex md:flex-wrap md:justify-between">
          <div>
            <!-- Title -->
            <div class="relative text-gray-800 text-xl px-4 mt-4">Informasi Kontak</div>
            <!-- Contents -->
            <!-- Address -->
            <div class="flex flex-wrap">
              <!-- Map icon -->
              <div class="text-gray-700 ml-4 mt-4 md:mt-9">
                <svg class="w-5 h-5 inline top-[-2px] mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clip-rule="evenodd" />
                </svg>
                Jalan Wisnu-Belayu, Marga, Tabanan - Bali (82181)
              </div>
            </div>
            <!-- Telephone number -->
            <div class="flex flex-wrap">
              <!-- Telephone icon -->
              <div class="text-gray-700 ml-4 mt-2">
                <svg class="w-5 h-5 inline top-[-2px] mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clip-rule="evenodd" />
                </svg>
                0361-8945356
              </div>
            </div>
            <!-- Email -->
            <div class="flex flex-wrap">
              <!-- Email icon -->
              <a href="mailto:smkn2tabanan@ymail.com" class="text-gray-700 ml-4 mt-2">
                <svg class="w-5 h-5 inline top-[-2px] mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                  <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                </svg>
                smkn2tabanan@ymail.com
              </a>
            </div>
          </div>
          <!-- Google Maps iframe -->
          <div class="pl-4 mt-9 md:mt-4">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.859999046224!2d115.16562741433472!3d-8.512971288557424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23b6a8b9b5e83%3A0x26d48e4fa61a6bd!2sSMK%20Negeri%202%20Tabanan!5e0!3m2!1sid!2sid!4v1622018812277!5m2!1sid!2sid"
                title="Google Maps"
                width="100%"
                height="185"
                style="border:1px;"
                allowfullscreen=""
                loading="lazy">
            </iframe>
          </div>
        </div>
      </div>
    </div>
    <!-- Devider -->
    <hr class="border-gray-200 sm:mx-auto dark:border-gray-700"/>
    <!-- Small Footer -->
    <div class="p-4 bg-white sm:p-6 dark:bg-gray-900 bottom-0 w-full" style="background-color: #f5f5f5;">
      <div class="container mx-auto">
        <div class="sm:flex items-center sm:justify-between px-10 mx-auto md:max-w-screen-xl">
          <span class="text-sm text-gray-500 sm:text-center flex justify-center dark:text-gray-400">
            © {{new Date().getFullYear()}} - TIK SMK DUTA | All Rights Reserved.
          </span>

          <div class="flex mt-4 space-x-6 justify-center sm:mt-0">
            <a href="https://www.facebook.com/DutaSMK/" class="text-gray-500 hover:text-gray-900 dark:hover:text-white transition duration-200">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
              <span class="sr-only">Facebook page</span>
            </a>
            <a href="https://www.instagram.com/osisdutasmk/" class="text-gray-500 hover:text-gray-900 dark:hover:text-white transition duration-200">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" /></svg>
              <span class="sr-only">Instagram page</span>
            </a>
            <a href="https://www.youtube.com/channel/UCFGz3a0jUv7PxB1vHJ-Hkbg?sub_confirmation=1" class="text-gray-500 hover:text-gray-900 dark:hover:text-white transition duration-200">
              <svg class="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
              <span class="sr-only">YouTube page</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>