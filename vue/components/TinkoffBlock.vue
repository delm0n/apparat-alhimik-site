<template>
  <section id="tinkoff">
    <div class="container">
      <div class="title">
        <h2>Не откладывайте покупку на завтра!</h2>
        <p class="subtitle">
          Рассрочка от банка Тинькофф на 4 месяца без процентов и переплат
        </p>
      </div>

      <div class="tinkoff-wrapper">
        <div class="tinkoff-wrapper__img">
          <my-image
            :alt="'Рассрочка на самогонный аппарат'"
            :sorce="'build/images/tinkoff/tinkoff'"
            :mobile="false"
          />
        </div>

        <div class="tinkoff-wrapper__content">
          <div class="features-box">
            <div
              v-for="(feature, i) in features"
              :key="i"
              class="features-box__item"
            >
              <p>
                {{ feature.title }}
              </p>
              <p>
                {{ feature.text }}
              </p>
            </div>
          </div>

          <div class="step-box">
            <div v-for="(step, i) in steps" :key="i" class="step-box__row">
              <p>Шаг {{ i + 1 }}</p>
              <p>{{ step }}</p>
            </div>
          </div>

          <div class="offer-box">
            <div class="new">
              от {{ Math.floor(getMainPrices[0] / 4) }} ₽ / мес.
            </div>
            <div class="old">{{ getMainPrices[1] }} ₽</div>
          </div>

          <button @click="orderModalOpen">Купить в рассрочку</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import MyImage from "../UI/MyImage.vue";

export default {
  methods: {
    ...mapMutations(["changeUserRassrochka"]),

    orderModalOpen() {
      this.changeUserRassrochka(true);
      Fancybox.show([
        {
          src: "#order-modal",
        },
      ]);
    },
  },
  computed: mapGetters(["getMainPrices"]),

  data() {
    return {
      steps: [
        "Нажмите кнопку «Купить в рассрочку»",
        "В появившемся окне выберите нужную комплектацию",
        "Нажмите кнопку «Заказать»",
      ],

      features: [
        {
          title: "Без",
          text: "первоначального взноса",
        },
        {
          title: "Без",
          text: "процентов",
        },
        {
          title: "Первый платеж",
          text: "через месяц",
        },
      ],
    };
  },
  components: { MyImage },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#tinkoff {
  @extend %pbt;

  .title {
    background: #ffd600;
    padding: 15px 5px;
    margin-bottom: 40px;
    border-radius: 30px;
    gap: 30px;
    @media (max-width: 992px) {
      gap: 20px;
    }
    @media (max-width: 768px) {
      background: none;
      gap: 15px;
      padding: 0;
    }
  }

  .tinkoff-wrapper {
    border-radius: 30px;
    display: flex;
    align-items: stretch;
    gap: 25px;
    @media (min-width: 1181px) {
      padding-right: 10px;
      background: #ffffff;
      box-shadow: 5px 5px 15px 0px rgba(157, 157, 157, 0.15);
    }
    &__img {
      margin-top: 10px;
      max-width: 43%;

      @media (max-width: 1180px) {
        display: none;
      }
    }

    &__content {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;

      @media (max-width: 1180px) {
        display: block;

        & > * {
          &:not(:last-child) {
            margin-bottom: 30px;
          }
        }
      }

      .step-box {
        display: flex;
        flex-direction: column;

        &__row {
          display: flex;
          gap: 14px;
          align-items: start;
          &:not(:last-child) {
            margin-bottom: 25px;

            @media (max-width: 768px) {
              margin-bottom: 15px;
            }
          }

          p {
            font-family: "Raleway";
            font-style: normal;
            color: #323232;

            &:first-child {
              font-weight: 600;
              font-size: 20px;
              line-height: 135%;
              white-space: nowrap;
              @include fluidFontSize(16, 20, 992, 1920);

              @media (max-width: 768px) {
                font-size: 18px;
                font-weight: 600;
                line-height: 25px;
              }
            }

            &:last-child {
              font-weight: 400;
              font-size: 20px;
              line-height: 135%;

              @include fluidFontSize(16, 20, 992, 1920);

              @media (max-width: 768px) {
                font-size: 16px;
                line-height: 23px;
              }
            }
          }
        }
      }

      .features-box {
        display: flex;
        gap: 20px;
        @media (max-width: 1366px) {
          gap: 12px;
        }

        @media (max-width: 768px) {
          flex-direction: column;
          align-items: center;
        }

        &__item {
          padding: 19px 0px;
          max-width: 235px;
          flex: 1 1 0;
          background: #ffffff;
          box-shadow: 5px 5px 15px 0px rgba(157, 157, 157, 0.15);

          border-radius: 20px;
          @media (max-width: 768px) {
            width: 100%;
            flex: none;
          }

          p {
            font-family: "Raleway";
            font-style: normal;
            text-align: center;
            color: #323232;

            &:first-child {
              font-weight: 700;
              font-size: 24px;
              line-height: 119%;
              white-space: nowrap;
              margin-bottom: 5px;

              @include fluidFontSize(20, 24, 992, 1920);

              @media (max-width: 768px) {
                font-size: 22px;
                font-weight: 700;
                line-height: 29px;
                margin-bottom: 0;
              }
            }

            &:last-child {
              font-weight: 400;
              font-size: 18px;
              line-height: 139%;

              @include fluidFontSize(16, 18, 992, 1920);

              @media (max-width: 768px) {
                font-size: 18px;
                line-height: 25px;
              }
            }
          }
        }
      }

      .offer-box {
        display: flex;
        gap: 22px;
        align-items: center;

        @media (max-width: 576px) {
          flex-direction: column;
          gap: 15px;
        }

        .new {
          font-family: "IBM Plex Sans";
          font-style: normal;
          font-weight: 700;
          font-size: 35px;
          line-height: 120%;
          color: #323232;
        }

        .old {
          font-family: "IBM Plex Sans";
          font-style: normal;
          font-weight: 500;
          text-decoration-line: line-through;
          color: #a8a8a8;
          font-size: 24px;
          line-height: 31px;
        }
      }

      button {
        @extend %button-yellow;
        @media (max-width: 768px) {
          margin: 0 auto;
        }
      }
    }
  }
}
</style>
