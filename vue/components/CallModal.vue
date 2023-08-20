<template>
  <div id="call-modal">
    <form
      action=""
      v-on:submit.prevent
      method="post"
      class="spnForm order-form"
    >
      <h3>Заказать обратный звонок</h3>

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

      <div class="decr">
        <p>Мы свяжемся с вами в течение 10 минут</p>
      </div>

      <form-helicon />
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import FormHelicon from "./FormHelicon.vue";

export default {
  components: { FormHelicon },
  computed: mapGetters(["getMainPrices"]),
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#call-modal {
  @extend %modal;
  max-width: 480px;
  padding: 20px 30px;
  width: 100%;

  @media (max-width: 768px) {
    max-width: 390px;
  }
  @media (max-width: 375px) {
    padding: 20px 10px;
  }

  .order-form > *:not(:last-child) {
    margin-bottom: 30px;
  }

  h3 {
    color: #323232;
    text-align: center;
    font-size: 28px;
    font-family: "Raleway";
    font-weight: 700;
    line-height: 37px;
    padding-top: 30px;

    @media (max-width: 768px) {
      font-size: 26px;
      font-weight: 700;
      line-height: 33px;
    }
  }

  .user-info {
    @media (max-width: 576px) {
      max-width: 360px;
      margin: 0 auto;
    }
  }

  .button {
    @extend %button-green;
    margin-left: auto;
    margin-right: auto;
  }

  .decr p {
    color: #707070;
    text-align: center;
    font-size: 18px;
    font-family: "Raleway";
    line-height: 25px;
    width: calc(100% + 20px);
    transform: translateX(-10px);

    @media (max-width: 768px) {
      font-size: 14px;
      line-height: 21px;
    }
  }
}
</style>