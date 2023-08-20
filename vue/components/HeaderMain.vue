<template>
  <div class="header-main">
    <div class="container">
      <div class="header-main__wrapper">
        <div class="header-title">
          <h1>
            Самогонный аппарат <br />
            <span>«Алхимик»</span>
          </h1>
          <h2>Подарок, достойный внимания</h2>
        </div>

        <div class="header-img">
          <my-image
            :alt="'аппарат алхимик'"
            :sorce="'build/images/header/header-img'"
            :media="993"
            :lazyLoad="false"
          />
        </div>

        <div class="header-features">
          <div
            v-for="(item, index) in features"
            :key="index"
            class="header-features__item"
          >
            <h3 v-html="item.title"></h3>
            <p v-html="item.text"></p>
          </div>
        </div>

        <div class="header-offer">
          <div class="header-offer__prices">
            <div class="new">{{ getMainPrices[0] }} ₽</div>
            <div class="old-box">
              <div class="old">{{ getMainPrices[1] }} ₽</div>
              <div class="discount">-35%</div>
            </div>
          </div>

          <div class="header-offer__buttons">
            <button @click="orderModalOpen(false)" class="order">
              Заказать
            </button>
            <button @click="orderModalOpen(true)" class="rasr">
              Купить в рассрочку
            </button>
          </div>
        </div>

        <div class="header-video">
          <a data-fancybox href="https://youtu.be/2x_SVZqccJQ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="94"
              height="95"
              viewBox="0 0 94 95"
              fill="none"
            >
              <g id="Group 5142">
                <ellipse
                  id="Ellipse 209"
                  cx="47"
                  cy="47.5"
                  rx="47"
                  ry="47.5"
                  fill="#F3EAD9"
                  fill-opacity="0.6"
                />
                <circle
                  id="Ellipse 205"
                  cx="47.5473"
                  cy="46.977"
                  r="35.9165"
                  fill="#E2BC85"
                />
                <path
                  id="Polygon 3"
                  d="M58.0195 46.3256C59.3529 47.0954 59.3529 49.0199 58.0195 49.7897L44.4287 57.6363C43.0954 58.4061 41.4287 57.4439 41.4287 55.9043L41.4287 40.211C41.4287 38.6714 43.0954 37.7091 44.4287 38.4789L58.0195 46.3256Z"
                  fill="#A26442"
                />
              </g>
            </svg>
            <p>
              Видео о <br />
              нашем аппарате
            </p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyImage from "../UI/MyImage.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  components: { MyImage },
  computed: mapGetters(["getMainPrices"]),
  data() {
    return {
      features: [
        {
          title: "Переносная автономная конструкция",
          text: "Перегонка без электричества",
        },

        {
          title: "Приятный сюрприз",
          text: "Любому самогонщику или человеку, <br> у которого всё есть",
        },

        {
          title: "Лёгкость использования",
          text: "Справится даже новичок!",
        },

        {
          title: "Платите как удобно",
          text: "Оплачивайте сразу или берите в рассрочку",
        },
      ],
    };
  },
  methods: {
    ...mapMutations(["changeUserRassrochka"]),

    orderModalOpen(bool) {
      this.changeUserRassrochka(bool);
      Fancybox.show([
        {
          src: "#order-modal",
        },
      ]);
    },
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

.header-main {
  margin-top: 130px;
  padding-bottom: 60px;

  @media (max-width: 1130px) {
    margin-top: 150px;
    // padding-bottom: 60px;
  }

  @media (max-width: 992px) {
    margin-top: 100px;
    padding-bottom: 50px;
  }

  .header-main__wrapper {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 40px;
    position: relative;

    @media (max-width: 992px) {
      grid-template-columns: 1fr;
      gap: 30px;
    }

    @media (max-width: 768px) {
      max-width: 425px;
      margin: 0 auto;
    }
  }

  .header-title {
    grid-column: 1/2;
    grid-row: 1/2;

    @media (max-width: 992px) {
      text-align: center;
    }

    h1 {
      color: #323232;
      font-family: "Raleway";
      font-weight: 500;
      margin-bottom: 20px;
      font-size: 38px;
      line-height: 45px;

      // @media (max-width: 1130px) {
      //   line-height: 130%;
      //   font-size: 40px;
      // }

      @media (max-width: 992px) {
        font-size: 28px;
        margin-bottom: 10px;
      }

      @media (max-width: 768px) {
        font-size: 18px;
        line-height: 25px;
      }

      span {
        font-size: 70px;
        font-weight: 700;
        line-height: 77px;

        // @media (max-width: 1130px) {
        //   line-height: 120%;
        //   font-size: 80px;
        // }

        @media (max-width: 992px) {
          font-size: 56px;
          line-height: 110%;
        }

        @media (max-width: 768px) {
          font-size: 32px;
          line-height: 39px;
        }
      }
    }

    h2 {
      color: #323232;
      font-family: "IBM Plex Sans";
      font-weight: 500;
      white-space: nowrap;

      font-size: 28px;
      line-height: 35px;

      // @media (max-width: 1130px) {
      //   font-size: 28px;
      //   line-height: 115%;
      // }

      @media (max-width: 992px) {
        font-size: 22px;
      }

      @media (max-width: 768px) {
        font-size: 16px;
        line-height: 23px;
      }
    }
  }

  .header-img {
    grid-column: 2/3;
    grid-row: 1/5;
    align-self: center;

    @media (max-width: 992px) {
      grid-column: 1/2;
      grid-row: 2/3;

      picture {
        justify-content: center;
      }
    }

    img {
      @media (min-width: 993px) {
        margin-left: auto;
        @media (max-width: 1130px) {
          max-width: 470px;
          width: 100%;
        }
      }

      // @media (max-width: 992px) {
      //   margin: 0 auto;
      //   @media (min-width: 769px) {
      //     transform: translateX(-30%);
      //   }
      // }
    }
  }

  .header-features {
    grid-column: 1/2;
    grid-row: 2/3;
    margin-top: 30px;

    @media (max-width: 992px) {
      grid-column: 1/2;
      grid-row: 4/5;
      margin-top: 0;
      text-align: center;
    }

    &__item {
      &:not(:last-child) {
        margin-bottom: 20px;
        @media (max-width: 768px) {
          margin-bottom: 15px;
        }
      }
      margin-bottom: 20px;
      @media (max-width: 768px) {
        margin-bottom: 15px;
      }
      h3 {
        color: #323232;
        font-size: 20px;
        font-family: "Raleway";
        font-weight: 600;
        line-height: 27px;
        margin-bottom: 5px;

        @media (max-width: 768px) {
          font-size: 18px;
          line-height: 25px;
        }
      }

      p {
        color: #323232;
        font-size: 18px;
        font-family: "Raleway";
        line-height: 25px;

        br {
          @media (min-width: 993px) {
            display: none;
          }
        }

        @media (max-width: 768px) {
          font-size: 16px;
          line-height: 23px;
        }
      }
    }
  }

  .header-offer {
    grid-column: 1/3;
    grid-row: 4/5;

    @media (max-width: 992px) {
      grid-column: 1/2;
      grid-row: 5/6;
    }

    &__prices {
      display: flex;
      align-items: center;
      margin-bottom: 30px;

      @media (max-width: 992px) {
        justify-content: center;
      }

      @media (max-width: 576px) {
        flex-direction: column;
        gap: 10px;
      }

      .new {
        color: #323232;
        font-family: "IBM Plex Sans";
        font-weight: 700;
        margin-right: 20px;
        font-size: 35px;
        line-height: 42px;

        @media (max-width: 768px) {
          font-size: 35px;
          line-height: 42px;
        }
      }

      .old-box {
        display: flex;
        align-items: center;
      }

      .old {
        color: #a8a8a8;
        font-family: "IBM Plex Sans";
        font-weight: 500;
        text-decoration: line-through;
        font-size: 24px;
        line-height: 31px;

        @media (max-width: 768px) {
          font-size: 25px;
          line-height: 32px;
        }
      }

      .discount {
        color: #fff;
        text-align: center;
        font-family: "IBM Plex Sans";
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 23px;
        border-radius: 5px;
        background: #f66;
        margin-left: 10px;
        padding: 2px 4px 3px;
      }
    }

    &__buttons {
      display: flex;
      align-items: center;

      @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
      }

      .order {
        margin-right: 40px;
        @extend %button-green;

        @media (max-width: 768px) {
          margin: 0 0 15px 0;
        }
      }

      .rasr {
        @extend %button-yellow;
      }
    }
  }

  .header-video {
    grid-column: 1/2;
    grid-row: 3/4;
    z-index: 5;

    @media (max-width: 768px) {
      grid-row: 3/4;
    }

    a {
      display: block;
      position: relative;
      width: 100%;
      max-width: max-content;
      display: flex;
      align-items: center;
      @media (min-width: 769px) {
        gap: 20px;
      }
      margin-bottom: -10px;

      @media (max-width: 992px) {
        margin: 0 auto -10px;
      }

      svg {
        margin: 0 auto 15px;
        transform: translateX(-5px);
        display: block;

        @media (max-width: 768px) {
          margin: 0 10px 0 0px;
        }

        ellipse,
        circle,
        path {
          transition: all 0.4s;
        }
      }

      p {
        color: #323232;
        font-size: 16px;
        font-family: "Raleway";
        font-weight: 500;
        line-height: 20px;
        @media (min-width: 769px) {
          text-decoration-line: underline;
        }
      }

      &:hover {
        svg {
          ellipse {
            fill: #dfd4be;
          }

          circle {
            fill: #c3a476;
          }

          path {
            fill: #673f28;
          }
        }
      }
    }
  }
}
</style>