<template>
  <section id="made">
    <div class="container">
      <div class="made-wrapper">
        <div class="made-title">
          <h2>Вы заказываете самогонный аппарат напрямую с завода!</h2>
          <p>Для вас это означает:</p>
        </div>

        <div class="made-content">
          <ul>
            <li v-for="(li, index) in list" :key="index" v-html="li"></li>
          </ul>
        </div>
        <div class="made-swiper-container">
          <div class="made-items">
            <div class="swiper-wrapper">
              <div
                v-for="(item, index) in slides"
                :key="index"
                class="swiper-slide"
              >
                <picture>
                  <source
                    :srcset="'build/images/made/' + item + '@05x' + '.webp'"
                    media="(max-width:992px)"
                    type="image/webp"
                  />

                  <source
                    :srcset="'build/images/made/' + item + '@05x' + '.png'"
                    media="(max-width:992px)"
                    type="image/webp"
                  />

                  <source
                    :srcset="'build/images/made/' + item + '.webp'"
                    type="image/webp"
                  />

                  <img
                    :src="'build/images/made/' + item + '.png'"
                    :alt="''"
                    loading="lazy"
                  />
                </picture>
                <div class="swiper-lazy-preloader"></div>
              </div>
            </div>
          </div>
          <div class="made-navigation">
            <div class="made-button-prev">
              <slider-button :longarrow="longarrowMade" />
            </div>
            <div class="made-button-next">
              <slider-button :longarrow="longarrowMade" :rotate="true" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, Navigation } from "swiper";
import SliderButton from "../UI/SliderButton.vue";

export default {
  components: { SliderButton },
  data() {
    return {
      longarrowMade: window.innerWidth > 768,
      slides: ["made-1", "made-2", "made-3", "made-4"],
      list: [
        "Без посредников и наценок",
        "Самогонные аппараты всегда в наличии,  отправка <br> будет&nbsp;незамедлительно",
        "Вся продукция проходит трёхэтапный контроль качества&nbsp;—&nbsp;брак&nbsp;исключён",
        `Мы работаем в соответствии с российским законодательством, все наши гарантии 
           зафиксированны&nbsp;в&nbsp;<a style='color: #323232; text-decoration: underline;' download  href="uploadupdate/oferta-rus.pdf">договоре</a>`,
      ],
    };
  },
  mounted() {
    const madeSwiper = new Swiper(".made-items", {
      centeredSlides: true,
      slidesPerView: "auto",
      slidesPerGroup: 1,
      spaceBetween: 20,
      lazy: true,
      loop: true,
      navigation: {
        nextEl: ".made-button-next",
        prevEl: ".made-button-prev",
      },
      modules: [Navigation],
    });
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#made {
  overflow: hidden;
  @extend %pbt;

  .made-wrapper {
    display: grid;
    grid-template-columns: 51% 1fr;
    column-gap: 16px;

    @media (max-width: 992px) {
      grid-template-columns: 1fr;
    }
  }

  .made-title {
    grid-column: 1/2;
    grid-row: 1/2;
    z-index: 4;

    @media (max-width: 992px) {
      text-align: center;
    }

    h2 {
      font-size: 55px;
      font-family: "Raleway";
      font-weight: 700;
      line-height: 125%;
      color: #323232;
      margin-bottom: 25px;

      @include fluidFontSize(38, 55, 992, 1920);

      @media (max-width: 1280px) {
        margin-bottom: 10px;
      }

      @media (min-width: 993px) {
        width: calc(100% + 47px);
      }

      @media (max-width: 768px) {
        font-size: 26px;
        line-height: 33px;
      }
    }

    p {
      font-size: 34px;
      font-family: "Raleway";
      font-weight: 500;
      line-height: 120%;
      color: #323232;
      margin-bottom: 40px;

      @include fluidFontSize(28, 34, 992, 1920);

      @media (max-width: 1280px) {
        margin-bottom: 25px;
      }

      @media (max-width: 768px) {
        font-size: 22px;
        line-height: 29px;
      }
    }
  }

  .made-content {
    grid-row: 2/3;
    grid-column: 1/2;

    @media (max-width: 992px) {
      grid-row: 3/4;
      grid-column: 1/2;
    }

    ul {
      li {
        font-size: 28px;
        font-family: "Raleway";
        line-height: 135%;
        color: #323232;
        padding-left: 30px;
        position: relative;

        @include fluidFontSize(20, 28, 992, 1920);

        @media (max-width: 768px) {
          font-size: 16px;
          line-height: 23px;
        }

        &:before {
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-100%);
          width: 16px;
          height: 11px;
          content: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxOSAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggaWQ9Ikljb24iIGQ9Ik0xLjUgNy42MTExMUw2LjQyMzA4IDEyLjVMMTcuNSAxLjUiIHN0cm9rZT0iIzMyMzIzMiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==);
        }

        &:first-child {
          &:before {
            top: 0;
            transform: translateY(0%);
          }
        }

        &:not(:last-child) {
          margin-bottom: 25px;
          @media (max-width: 1280px) {
            margin-bottom: 15px;
          }
        }
      }
    }
  }

  .made-items {
    max-width: 608px;
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
    align-self: center;

    picture {
      justify-content: center;
      img {
        width: 90%;

        @media (max-width: 992px) {
          width: auto;
          max-width: 100%;
          aspect-ratio: 206/189;
        }
      }
    }

    .swiper-slide {
      border-radius: 40px;
    }
  }

  .made-swiper-container {
    grid-column: 2/3;
    grid-row: 1/3;
    align-self: center;
    position: relative;

    @media (max-width: 992px) {
      grid-column: 1/2;
      grid-row: 2/3;
      max-width: 520px;
      margin: 10px auto 25px;
    }

    .made-navigation {
      @media (min-width: 769px) {
        .made-button-prev,
        .made-button-next {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 5;
        }

        .made-button-prev {
          left: 10px;
        }

        .made-button-next {
          right: 10px;
        }
      }

      @media (max-width: 768px) {
        display: flex;
        gap: 25px;
        justify-content: center;
        margin: 20px 0 0;
      }
    }
    .swiper-slide {
      height: auto;

      .swiper-lazy-preloader {
        border-color: #468217;
        border-top-color: transparent;
        animation: rotated 1s ease 2;

        @keyframes rotated {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      }
    }
  }
}
</style>
