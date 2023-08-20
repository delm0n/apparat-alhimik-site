<template>
  <section id="reasons">
    <div class="container">
      <div class="title">
        <h2>Ограниченная серия, не имеющая аналогов!</h2>
        <p class="subtitle">6 причин начать перегонку с «Алхимиком»</p>
      </div>

      <div class="reasons-wrapper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <reasons-item
              :stepnumber="1"
              :title="'Полная автономность'"
              :imgAlt="'автономность алхимика'"
              :imgSrc="'build/images/reasons/reasons-1'"
            >
              <ul class="first-ul">
                <li>Не требует электричества и водопровода</li>
                <li>Работает от обычной спиртовой горелки</li>
                <li>Собирается и разбирается за считанные минуты</li>
              </ul>
            </reasons-item>
          </div>
          <div class="swiper-slide">
            <reasons-item
              :stepnumber="2"
              :reverse="true"
              :title="'Стеклянные элементы'"
              :imgAlt="'стеклянные элементы алхимика'"
              :imgSrc="'build/images/reasons/reasons-2'"
            >
              <p class="normal-text fix-color fix-font">
                Колба и холодильник самогонного аппарата сделаны из
                <span> боросиликатного лабораторного стекла</span> повышенной
                прочности. Это значит, что вы сможете от и до
                <span>наблюдать</span> за процессом перегонки и
                <span>контролировать</span> каждый этап.
              </p>
            </reasons-item>
          </div>
          <div class="swiper-slide">
            <reasons-item
              :stepnumber="3"
              :title="'Коллекционная модель'"
              :imgAlt="'редкость алхимика'"
              :imgSrc="'build/images/reasons/reasons-3'"
            >
              <p class="normal-text fix-color fix-font">
                «Алхимик» сочетает в себе уникальный дизайн и практичность.
                <br />
                Добавьте в свою домашнюю коллекцию
                <span>компактный</span> самогонный аппарат с расширенным
                функционалом:
              </p>
              <ul class="first-ul mt-three">
                <li>2-я и 3-я перегонки;</li>
                <li>мацерация;</li>
                <li>классическая дистилляция.</li>
              </ul>
            </reasons-item>
          </div>
          <div class="swiper-slide">
            <reasons-item
              :stepnumber="4"
              :reverse="true"
              :title="' Эталон качества'"
              :imgAlt="'качество алхимика'"
              :imgSrc="'build/images/reasons/reasons-4'"
            >
              <p class="four-title">
                Медицинская нержавеющая сталь AISI 304 (основа): 
              </p>
              <ul class="four-ul">
                <li>Не вступает в химические реакции</li>
                <li>Лёгкая</li>
                <li>Прочная</li>
              </ul>

              <p class="four-title">
                Ударопрочное стекло (колба, холодильник): 
              </p>
              <ul class="four-ul">
                <li>Не вступает в химические реакции</li>
                <li>Крепкое</li>
                <li>Позволяет наблюдать за процессом</li>
              </ul>

              <p class="four-title">Пищевой силикон (прокладка)</p>
              <ul class="four-ul">
                <li>Не вступает в химические реакции</li>
                <li>Не меняет вкус и запах продукта</li>
                <li>Износоустойчив</li>
              </ul>
            </reasons-item>
          </div>
          <div class="swiper-slide">
            <reasons-item
              :stepnumber="5"
              :title="'Надёжные зажимы'"
              :imgAlt="'надёжность алхимика'"
              :imgSrc="'build/images/reasons/reasons-5'"
            >
              <p class="normal-text fix-color fix-font">
                4 механические «лапки» обхватывают колбу со всех сторон и
                <span> плотно фиксируют</span> её в исходном положении,
                <span>не давая выскользнуть</span> наружу.
              </p>
            </reasons-item>
          </div>
          <div class="swiper-slide">
            <reasons-item
              :reverse="true"
              :stepnumber="6"
              :lastitem="true"
              :title="'Сверхпрочное стекло'"
              :imgAlt="'прочность алхимика'"
              :imgSrc="'build/images/reasons/reasons-6'"
            >
              <p class="normal-text fix-color fix-font">
                Колба сделана из
                <span> закалённого боросиликатного стекла</span>, которое
                <span>соответствует DIN 12347, ISO 1773</span>. Оно
                <span>выдерживает удары</span> и <span>не трескается</span> при
                колебаниях температур.
              </p>
            </reasons-item>
          </div>
        </div>
        <div class="reasons-navigation">
          <div class="reasons-button-prev">
            <slider-button />
          </div>
          <div class="reasons-current">
            <div class="this">{{ currentSlide }} /</div>
            <div ref="all" class="all"></div>
          </div>
          <div class="reasons-button-next">
            <slider-button :rotate="true" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, Navigation } from "swiper";
import ReasonsItem from "./ReasonsItem.vue";

import SliderButton from "../UI/SliderButton.vue";

export default {
  data() {
    return {
      currentSlide: 1,
    };
  },
  components: { ReasonsItem, SliderButton },
  mounted() {
    this.$nextTick(function () {
      this.$refs.all.innerText = document.querySelectorAll(
        "#reasons .swiper-wrapper .swiper-slide"
      ).length;
    });

    let context = this;
    let myReasonsSwiper;
    const reasonsSwiper = () => {
      myReasonsSwiper = new Swiper(".reasons-wrapper", {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 20,
        autoHeight: true,
        grabCursor: true,
        loop: true,
        navigation: {
          nextEl: ".reasons-button-next",
          prevEl: ".reasons-button-prev",
        },
        modules: [Navigation],
        on: {
          slideChange: function () {
            context.currentSlide = this.realIndex + 1;
          },
          init: function () {
            context.currentSlide = this.realIndex + 1;
          },
        },
      });
    };

    const reasonsSwiperbreakpoint = window.matchMedia("(min-width: 993px)");
    const breakpointChecker = () => {
      if (!reasonsSwiperbreakpoint.matches) {
        return reasonsSwiper();
      } else {
        if (myReasonsSwiper) {
          return myReasonsSwiper.destroy(true, true);
        }
      }
    };

    reasonsSwiperbreakpoint.addListener(breakpointChecker);
    breakpointChecker();
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#reasons {
  .fix-color span {
    color: #323232cc !important;
  }

  .fix-font {
    font-weight: 300 !important;
  }

  .mt-three {
    margin-top: 30px;
    @media (max-width: 992px) {
      margin-top: 20px;
    }
  }

  .four-title {
    color: rgba(50, 50, 50, 0.8) !important;
    margin-bottom: 10px;
    font-size: 26px;
    font-weight: 600;
    line-height: 33px;

    &:not(:first-child) {
      margin-top: 15px;

      @media (max-width: 768px) {
        margin-top: 10px;
      }
    }

    @include fluidFontSize(20, 26, 993, 1920);

    @media (max-width: 768px) {
      font-size: 14px;
      line-height: 21px;
      font-weight: 400;
      color: #323232;
      margin-bottom: 5px;
    }
  }

  @extend %pbt;

  .title {
    gap: 10px;
  }

  .reasons-wrapper {
    overflow: hidden;

    p {
      font-family: "Raleway";
      font-style: normal;
      color: #323232;

      span {
        font-weight: 600;
      }

      &.list-title {
        font-weight: 400;
        font-size: 20px;
        line-height: 135%;
        margin-top: 15px;
        @include fluidFontSize(18, 24, 993, 1920);

        @media (max-width: 768px) {
          font-size: 14px;
          line-height: 21px;
          margin-top: 10px;
        }
      }

      &.little-text {
        font-weight: 400;
        font-size: 24px;
        line-height: 115%;
        @include fluidFontSize(18, 24, 993, 1920);
        padding-left: 10px;
        @media (max-width: 768px) {
          padding-left: 5px;
          font-size: 16px;
          line-height: 23px;
        }
      }

      &.normal-text {
        font-weight: 400;
        font-size: 26px;
        line-height: 125%;

        @include fluidFontSize(20, 26, 993, 1920);

        @media (max-width: 768px) {
          font-size: 16px;
          line-height: 23px;
        }
      }
    }

    ul.first-ul {
      li {
        color: #323232;
        font-family: "Raleway";
        font-size: 26px;
        font-style: normal;
        font-weight: 300;
        line-height: 135%;
        @include fluidFontSize(18, 26, 993, 1920);
        list-style: none;
        position: relative;
        padding-left: 35px;

        @media (max-width: 768px) {
          font-size: 16px;
          line-height: 23px;
          padding-left: 25px;
        }

        &:before {
          position: absolute;
          left: 18px;
          top: 0;
          content: "•";

          @media (max-width: 768px) {
            left: 8px;
          }
        }
      }
    }

    ul.four-ul {
      padding-left: 26px;

      li {
        font-family: "Raleway";
        font-style: normal;

        font-size: 24px;
        line-height: 135%;
        color: #323232;
        @include fluidFontSize(18, 24, 993, 1920);
        position: relative;
        font-weight: 300;

        &:not(:last-child) {
          margin-bottom: 5px;
        }

        &::before {
          content: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxOSAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggaWQ9Ikljb24iIGQ9Ik0xLjUgNy42MTExMUw2LjQyMzA4IDEyLjVMMTcuNSAxLjUiIHN0cm9rZT0iI0UyQkM4NSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==);
          position: absolute;
          left: -26px;
          top: 0;
        }

        @media (max-width: 768px) {
          font-size: 14px;
          line-height: 21px;
        }
      }
    }
  }

  .reasons-navigation {
    display: flex;
    gap: 20px;
    align-items: center;
    max-width: 160px;
    margin: 20px auto;

    .reasons-current {
      div {
        font-family: "Roboto";
        font-style: normal;
        color: #323232;

        &.all {
          font-weight: 400;
          font-size: 18px;
          line-height: 25px;
          color: #707070;
        }

        &.this {
          font-weight: 700;
          font-size: 20px;
          line-height: 27px;
          width: 23px;
          white-space: nowrap;
        }
      }

      display: flex;
      gap: 5px;
    }
  }

  @media (min-width: 993px) {
    .swiper-wrapper {
      flex-direction: column;
      gap: 70px;
    }

    .reasons-navigation {
      display: none;
    }
  }
}
</style>
