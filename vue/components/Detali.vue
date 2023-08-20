<template>
  <section id="detali">
    <div class="container">
      <div class="title">
        <h2>Аппарат, продуманный до мелочей!</h2>
        <p class="subtitle">«Алхимик» в деталях</p>
      </div>

      <div class="detali-wrapper">
        <div class="detali-wrapper__slider-container">
          <div class="detali-wrapper__slider">
            <div class="swiper-wrapper">
              <div
                v-for="(detali, index) in detalies"
                :key="index"
                class="swiper-slide"
              >
                <h3>{{ index + 1 }}. {{ detali.title }}</h3>

                <div class="chars-box">
                  <p
                    class="char"
                    v-for="(char, i) in detali.chars"
                    :key="i"
                    v-html="char"
                  ></p>
                </div>

                <p class="decr" v-html="detali.decr"></p>
              </div>
            </div>

            <div class="detali-navigation">
              <div class="detali-button-prev">
                <slider-button :longarrow="true" />
              </div>

              <div class="detali-pagination"></div>

              <div class="detali-button-next">
                <slider-button :rotate="true" :longarrow="true" />
              </div>
            </div>
          </div>
        </div>
        <div class="detali-wrapper__img">
          <my-image
            :alt="'характеристики деталей аппарата алхимик'"
            :sorce="'build/images/detali/detali'"
            :media="993"
          />

          <template v-for="item in [1, 2, 3, 4]" :key="item">
            <transition name="fade">
              <div
                v-show="item == detaliesIndex"
                :class="['circle', 'circle-' + item]"
              >
                {{ item }}
              </div>
            </transition>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, Navigation, Pagination } from "swiper";
import MyImage from "../UI/MyImage.vue";
import SliderButton from "../UI/SliderButton.vue";

export default {
  components: { MyImage, SliderButton },
  data() {
    return {
      detaliesIndex: 1,
      detalies: [
        {
          title: "Дугообразная царга",
          decr: `Дугообразная форма обеспечивает <span>плавность передвижения паров</span> в царге. Это <span>увеличивает производительность
           аппарата</span> как минимум на&nbsp;<span>15%.</span>`,
          chars: [
            "<span>Диаметр</span> — 18&nbsp;мм",
            "<span>Толщина</span> — 1,5&nbsp;мм",
            "<span>Материал</span> — AISI&nbsp;304",
          ],
        },

        {
          title: "Спиралевидный холодильник",
          decr: `Непроточный холодильник в форме змеевика на <span>5 витков</span> обеспечивает достаточное для конденсации <span>охлаждение
          спиртовых паров</span>. По мере нагревания воды в ёмкости, жидкость сливают через специальный кран и&nbsp;обновляют.`,
          chars: [
            "<span>Диаметр трубок</span> — 8&nbsp;мм",
            "<span>Материал</span> — AISI&nbsp;304",
            "<span>Количество витков</span> — 5",
          ],
        },

        {
          title: "Стеклянная колба",
          decr: `Колба сделана из химико-лабораторного стекла по <span>ГОСТ 21400</span> и соответствует всем требованиями безопасности.
           Она предназначена специально <span>для перегонки</span> и <span>дистилляции</span>, поэтому <span>не&nbsp;прогорит</span> 
           и <span>не разобьётся</span> в процессе самогоноварения.`,
          chars: [
            "<span>Вместимость</span> — 2&nbsp;л",
            "<span>Диаметр горловины</span> — 50&nbsp;мм",
            "<span>Диаметр колбы</span> — 166&nbsp;мм",
            "<span>Высота</span> — 260&nbsp;мм",
          ],
        },

        {
          title: "Спиртовая горелка",
          decr: `<span>Лёгкая</span> и <span>прочная</span> горелка для нагревания браги входит в комплект <span>вместе
           с крышкой</span> — для быстрого тушения пламени (при необходимости). Она <span>компактна</span>, поэтому идеально вписывается 
           под стеклянную колбу, не занимая много места. Для оптимального горения (без копоти) 
           в качестве топлива подходит <span>этиловый спирт</span>.`,
          chars: [
            "<span>Габариты</span> — 71х43&nbsp;мм",
            "<span>Материал</span> — алюминиевый сплав",
            "<span>Вес</span> — 26&nbsp;г",
            "<span>Мощность</span> — 1&nbsp;кВт",
            "<span>Топливо</span> — этиловый спирт",
          ],
        },
      ],
    };
  },
  mounted() {
    // let dateArray = new Date().toLocaleString().split(",");
    // let date = dateArray[0].split(".").reverse().join("/");
    // let time = dateArray[1];
    // console.log(date + time);

    let context = this;
    let myDetaliSwiper;
    const detaliSwiper = () => {
      myDetaliSwiper = new Swiper(".detali-wrapper__slider", {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 20,
        grabCursor: true,
        // autoHeight: true,
        loop: true,
        navigation: {
          nextEl: ".detali-button-next",
          prevEl: ".detali-button-prev",
        },
        pagination: {
          el: ".detali-pagination",
          type: "bullets",
          clickable: true,
        },
        modules: [Navigation, Pagination],

        on: {
          slideChange: function () {
            context.detaliesIndex = this.realIndex + 1;
          },
          init: function () {
            context.detaliesIndex = this.realIndex + 1;
          },
        },
      });
    };

    addEventListener("resize", (event) => {
      myDetaliSwiper.destroy(true, true);
      detaliSwiper();
    });
    detaliSwiper();
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#detali {
  @extend %pbt-gray;

  .title {
    gap: 30px;

    @media (max-width: 1024px) {
      gap: 20px;
    }

    @media (max-width: 768px) {
      gap: 15px;
    }
  }

  .detali-wrapper {
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
      gap: 30px;
      flex-direction: column-reverse;
    }

    &__img {
      flex-shrink: 0;
      max-width: 45%;
      position: relative;

      @media (max-width: 992px) {
        height: 100%;
      }

      @include image-aspect {
        aspect-ratio: 541/637;
        @media (max-width: 992px) {
          aspect-ratio: 268/331;
          width: 100%;
        }
      }

      @media (max-width: 768px) {
        max-width: none;
        margin: 0 auto;
      }

      .circle {
        position: absolute;
        width: 44px;
        height: 44px;
        border-radius: 100%;
        background-color: #a8a8a8;
        color: #fff;
        text-align: center;
        font-size: 33px;
        font-family: "IBM Plex Sans";
        font-weight: 700;
        line-height: 40px;
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        justify-content: center;

        @media (max-width: 992px) {
          width: 16px;
          height: 16px;
          font-weight: 700;
          font-size: 14px;
          line-height: 16px;
        }

        &.circle-1 {
          top: -7px;
          left: 45%;
          @media (max-width: 992px) {
            top: -1px;
          }
        }
        &.circle-2 {
          top: 43%;
          left: 24%;
        }
        &.circle-3 {
          top: 58%;
          left: 70%;
        }
        &.circle-4 {
          top: 88%;
          left: 64%;
        }
      }
    }

    &__slider-container {
      overflow: hidden;
      max-width: 850px;
      width: 100%;
    }

    &__slider {
      h3 {
        font-family: "Raleway";
        font-style: normal;
        font-weight: 700;
        font-size: 28px;
        line-height: 118%;
        color: #323232;
        margin-bottom: 40px;
        padding-left: 10px;

        @include fluidFontSize(20, 28, 993, 1920);

        @media (max-width: 1180px) {
          margin-bottom: 25px;
        }
        @media (max-width: 768px) {
          font-size: 24px;
          font-weight: 700;
          line-height: 31px;
        }
      }

      .chars-box {
        margin-bottom: 40px;
        @media (max-width: 1180px) {
          margin-bottom: 20px;
        }
      }

      p.char {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 300;
        font-size: 26px;
        line-height: 125%;
        color: #323232;

        &:not(:last-child) {
          margin-bottom: 15px;
          @media (max-width: 768px) {
            margin-bottom: 10px;
          }
        }

        @include fluidFontSize(20, 26, 993, 1920);

        @media (max-width: 768px) {
          font-size: 18px;
          line-height: 25px;
        }

        span {
          font-family: "Raleway";
          font-weight: 600;
          font-size: 26px;
          line-height: 121%;
          color: rgba(50, 50, 50, 0.8);

          @include fluidFontSize(20, 26, 993, 1920);

          @media (max-width: 768px) {
            font-size: 18px;
            line-height: 25px;
          }
        }
      }

      p.decr {
        font-family: "Raleway";
        font-style: normal;
        font-weight: 300;
        font-size: 24px;
        line-height: 129%;
        color: #323232;

        @include fluidFontSize(18, 24, 993, 1920);

        span {
          color: rgba(50, 50, 50, 0.8);
          font-weight: 600;
        }

        @media (max-width: 768px) {
          font-size: 20px;
          line-height: 27px;
        }
      }
    }

    .detali-navigation {
      margin: 70px 0 10px;
      display: inline-flex;
      gap: 25px;
      align-items: center;
      @media (max-width: 1180px) {
        margin: 40px 0 10px;
      }

      @media (max-width: 768px) {
        margin: 30px auto 20px;
        display: flex;
        max-width: 220px;
      }

      .detali-pagination {
        display: flex;
        gap: 15px;
        align-items: center;
        .swiper-pagination-bullet {
          width: 16px;
          height: 16px;
          @media (max-width: 992px) {
            width: 14px;
            height: 14px;
          }
          background: #a8a8a8;
          border-radius: 100%;
          margin: 0;
          opacity: 1;

          &-active {
            background: #e2bc85;
          }
        }
      }
    }
  }
}
</style>
