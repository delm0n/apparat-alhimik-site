<template>
  <form
    action=""
    v-on:submit.prevent
    method="post"
    class="spnForm questions-form"
  >
    <div class="user-info">
      <input
        class="alhimik-input"
        aria-label="Ваше имя"
        type="text"
        name="name"
        autocomplete="off"
        placeholder="Ваше имя"
        required
      />
      <input
        class="alhimik-input"
        aria-label="Ваш номер телефона"
        type="tel"
        name="phone"
        autocomplete="off"
        placeholder="Ваш номер телефона"
        required
      />
    </div>

    <button type="submit" class="button">Заказать звонок</button>

    <p class="decr-bottom">
      Менеджеры свяжутся с вами в ближайшее время, <br />
      для уточнения деталей заказа
    </p>

    <form-helicon />
  </form>
</template>

<style lang="scss">
@import "../../scss/_global.scss";
.questions-form {
  max-width: 410px;
  width: 100%;

  @media (max-width: 768px) {
    margin: 0 auto;
    max-width: 425px;
  }

  @media (max-width: 576px) {
    max-width: 360px;
  }

  .button {
    @extend %button-green;
    margin: 40px 0;

    @media (max-width: 768px) {
      margin: 20px auto;
    }
  }

  .decr-bottom {
    color: #707070;

    font-family: "Raleway";

    @media (max-width: 768px) {
      font-size: 14px;
      line-height: 21px;
      text-align: center;
    }

    @media (min-width: 426px) {
      width: calc(100% + 26px);
      transform: translateX(-13px);
    }
  }
}
</style>

<script>
import FormHelicon from "./FormHelicon.vue";

export default {
  components: {
    FormHelicon,
  },
};
</script>