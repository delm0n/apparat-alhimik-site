<template>
  <div id="order-modal">
    <form
      action=""
      v-on:submit.prevent
      method="post"
      class="spnForm order-form"
    >
      <h3>Заказать самогонный аппарат «Алхимик»</h3>

      <div class="prices">
        <div class="new">от {{ getMainPrices[0] }} ₽</div>
        <div class="old">{{ getMainPrices[1] }} ₽</div>
      </div>

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

      <button type="submit" class="button">Заказать</button>

      <div class="decr">
        <p>
          Менеджеры свяжутся с вами в ближайшее время, <br />
          для уточнения деталей заказа
        </p>
      </div>

      <rassrochka-checkbox class="form-check" />

      <form-helicon :rassr="true" :main="true" />
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import FormHelicon from "./FormHelicon.vue";
import RassrochkaCheckbox from "../UI/RassrochkaCheckbox.vue";

export default {
  components: { RassrochkaCheckbox, FormHelicon },
  computed: mapGetters(["getMainPrices"]),
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#order-modal {
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

  .prices {
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 992px) {
      margin: 5px auto 30px;
    }

    .new {
      margin-right: 20px;
      color: #323232;
      font-size: 35px;
      font-family: "IBM Plex Sans";
      font-weight: 700;
      line-height: 47px;

      @media (max-width: 768px) {
        font-size: 28px;
        font-weight: 700;
        line-height: 35px;
      }
    }

    .old {
      color: #a8a8a8;
      font-size: 24px;
      font-family: "IBM Plex Sans";
      font-weight: 500;
      line-height: 37px;
      text-decoration: line-through;

      @media (max-width: 768px) {
        font-size: 20px;
        font-weight: 500;
        line-height: 27px;
      }
    }
  }

  .user-info {
    @media (max-width: 576px) {
      max-width: 360px;
      margin: 0 auto;
    }
  }

  .form-check {
    margin: 0 auto;
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