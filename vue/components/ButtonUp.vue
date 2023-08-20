<template>
  <button
    aria-label="Наверх"
    ref="up"
    type="button"
    class="button-up hide"
    v-on:click="srollToTop"
  ></button>
</template>  

<script>
export default {
  methods: {
    srollToTop() {
      this.gsap.to(window, {
        duration: 2,
        scrollTo: 0,
      });
    },
  },
  mounted() {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 1000) {
        this.$refs.up.classList.replace("hide", "show");
      } else {
        this.$refs.up.classList.replace("show", "hide");
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.button-up {
  z-index: 200;
  position: fixed;
  right: 40px;
  bottom: 40px;
  width: 66px;
  height: 66px;
  padding: 0;
  box-shadow: 0 0 10px rgb(0, 0, 0, 25%);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='20' viewBox='0 0 16 20' fill='none'%3E%3Cpath d='M7.1543 18.6377C7.1543 19.19 7.60201 19.6377 8.1543 19.6377C8.70658 19.6377 9.1543 19.19 9.1543 18.6377H7.1543ZM8.8614 0.607279C8.47088 0.216755 7.83771 0.216755 7.44719 0.607279L1.08323 6.97124C0.692705 7.36176 0.692705 7.99493 1.08323 8.38545C1.47375 8.77598 2.10692 8.77598 2.49744 8.38545L8.1543 2.7286L13.8112 8.38545C14.2017 8.77598 14.8348 8.77598 15.2254 8.38545C15.6159 7.99493 15.6159 7.36176 15.2254 6.97124L8.8614 0.607279ZM9.1543 18.6377L9.1543 1.31439H7.1543L7.1543 18.6377H9.1543Z' fill='white'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 27px;
  background-color: #979797;
  border-radius: 100%;
  cursor: pointer;
  outline: none;
  border: none;
  transition: opacity 200ms, transform 0.6s ease;
  box-shadow: 5px 5px 15px 0px rgba(157, 157, 157, 0.15);

  &:active {
    transform: translateY(3px);
  }

  &.show {
    opacity: 1;
  }

  &.hide {
    opacity: 0;
  }

  @media (max-width: 992px) {
    right: 15px;
    bottom: 25px;
    width: 45px;
    height: 45px;
    background-size: 19px;
  }
}
</style>
