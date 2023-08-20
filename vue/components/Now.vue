<template>
  <section id="now">
    <div class="container">
      <div class="title">
        <h2>Закажите «Алхимик» прямо сейчас</h2>
        <p class="subtitle">Количество ограничено!</p>
      </div>

      <div class="now-wrapper">
        <div class="now-wrapper__img">
          <my-image
            :alt="'Заказать алхимик'"
            :sorce="'build/images/now/now'"
            :media="993"
          />
        </div>
        <div class="now-wrapper__form">
          <form
            action=""
            method="post"
            v-on:submit.prevent
            class="spnForm now-form"
          >
            <h3>Оформление заказа</h3>

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

              <promocode :fashion="'alhimik-input'" :sum="6001" />
            </div>

            <div class="prices">
              <div class="new">от {{ getMainPrices[0] }} ₽</div>
              <div class="old">{{ getMainPrices[1] }} ₽</div>
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
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import FormHelicon from "./FormHelicon.vue";
import RassrochkaCheckbox from "../UI/RassrochkaCheckbox.vue";
import MyImage from "../UI/MyImage.vue";
import Promocode from "../UI/Promocode.vue";

export default {
  components: { MyImage, RassrochkaCheckbox, FormHelicon, Promocode },
  computed: mapGetters(["getMainPrices"]),
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#now {
  @extend %pbt;

  .title {
    gap: 30px;

    @media (max-width: 1024px) {
      gap: 20px;
    }

    @media (max-width: 768px) {
      gap: 15px;
    }
  }

  .now-wrapper {
    max-width: 1320px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    gap: 60px;
    align-items: center;

    @media (max-width: 992px) {
      flex-direction: column;
      gap: 30px;
    }

    &__img {
      flex-shrink: 1;

      @include image-aspect {
        aspect-ratio: 619/880;
        @media (max-width: 992px) {
          aspect-ratio: 310/441;
          max-width: 310px;
        }

        @media (max-width: 425px) {
          max-width: 210px;
        }
      }

      @media (max-width: 425px) {
        max-width: 210px;
      }
    }

    &__form {
      flex-grow: 1;
      border-radius: 40px;
      padding: 30px 30px 40px;
      background: #fff;
      box-shadow: 5px 5px 15px 0px rgba(157, 157, 157, 0.15);

      @media (max-width: 768px) {
        border-radius: 20px;
      }

      @media (max-width: 425px) {
        padding: 15px 10px;
      }
    }
  }

  .now-form {
    display: flex;
    flex-direction: column;

    @media (min-width: 577px) {
      min-width: 435px;
    }

    & > *:not(:last-child) {
      margin-bottom: 40px;

      @media (max-width: 992px) {
        margin-bottom: 25px;
      }
    }

    .form-check {
      margin: 0 auto;
    }

    .user-info {
      max-width: 410px;
      width: 100%;
      margin: 0 auto 20px;

      @media (max-width: 768px) {
        margin-bottom: 0;
      }
    }

    h3 {
      color: #323232;
      text-align: center;

      font-family: "Raleway";

      font-size: 26px;
      font-weight: 600;
      line-height: 33px;

      @media (max-width: 992px) {
        font-size: 20px;
      }

      @media (max-width: 576px) {
        font-size: 18px;
        font-weight: 600;
        line-height: 25px;
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
        font-family: "IBM Plex Sans";
        font-weight: 700;
        font-size: 35px;
        line-height: 42px;

        @media (max-width: 768px) {
          font-size: 28px;
          font-weight: 700;
          line-height: 35px;
        }
      }

      .old {
        color: #a8a8a8;
        font-family: "IBM Plex Sans";
        font-weight: 500;
        text-decoration: line-through;
        font-size: 24px;
        line-height: 31px;

        @media (max-width: 768px) {
          font-size: 20px;
          font-weight: 500;
          line-height: 27px;
        }
      }
    }

    .decr {
      margin-bottom: 50px;

      @media (max-width: 992px) {
        margin-bottom: 20px;
      }
      p {
        color: #707070;
        text-align: center;
        font-size: 18px;
        font-family: "Raleway";
        line-height: 25px;

        @media (max-width: 768px) {
          font-size: 14px;
          line-height: 21px;
        }
      }
    }

    .button {
      margin: 0 auto 50px;

      @media (max-width: 992px) {
        margin-bottom: 25px;
      }
      @extend %button-green;
    }
  }
}
</style>