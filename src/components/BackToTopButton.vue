<template>
  <button @click="scrollToTop" id="top-button" class="fade-in fixed z-50 hidden p-3 bg-gray-100 hover:bg-gray-200 border-2 border-light-blue/50 rounded-md shadow-md transition duration-100 bottom-[30px] right-[30px]">
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
    </svg>
  </button>
</template>

<script>
export default {
  name: "BackToTopButton",
  mounted() {
    const backToTopButtonEl = document.getElementById('top-button')

    window.addEventListener('scroll', () => {
      this.checkButton(backToTopButtonEl)
    })
  },
  methods: {
    checkButton: function (buttonEl) {
      const isOnTop = document.body.scrollTop + document.documentElement.scrollTop <= 200;
      if (isOnTop) {
        buttonEl.classList.add("hidden");
      } else {
        buttonEl.classList.remove("hidden");
      }
    },
    scrollToTop: function () {
      window.scrollTo({top: 0, behavior: 'smooth'});
    }
  }
}
</script>