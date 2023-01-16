<template>
  <button @click="scrollToTop" id="top-button" class="fade-in fixed z-20 hidden p-2 bg-gray-100 hover:bg-gray-200 border-2 border-light-blue/50 rounded-md shadow-md transition duration-100 bottom-[30px] right-[30px]">
    <ArrowUpIcon/>
  </button>
</template>

<script>
import ArrowUpIcon from "@/components/icons/ArrowUpIcon.vue";

export default {
  name: "BackToTopButton",
  components: {ArrowUpIcon},
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
        if (!buttonEl.classList.contains('hidden')) {
          buttonEl.classList.add('hidden')
        }
      } else {
        if (buttonEl.classList.contains('hidden')) {
          buttonEl.classList.remove('hidden')
        }
      }
    },
    scrollToTop: function () {
      window.scrollTo({top: 0, behavior: 'smooth'});
    }
  }
}
</script>
