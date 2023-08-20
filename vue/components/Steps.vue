<template>
  <section id="steps">
    <div class="container">
      <div class="title">
        <h2>Принцип работы «Алхимика»</h2>
        <p class="subtitle">Простота и понятность использования</p>
      </div>

      <div class="steps-wrapper">
        <div class="swiper-wrapper">
          <div v-for="(step, index) in steps" :key="index" class="swiper-slide">
            <steps-item :step="step" />
          </div>
        </div>
        <div class="steps-navigation">
          <div class="steps-button-prev">
            <slider-button />
          </div>
          <div class="steps-current">
            <div class="this">{{ stepsIndex }} /</div>
            <div ref="all" class="all">{{ steps.length }}</div>
          </div>
          <div class="steps-button-next">
            <slider-button :rotate="true" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, Navigation } from "swiper";
import StepsItem from "./StepsItem.vue";
import SliderButton from "../UI/SliderButton.vue";

export default {
  data() {
    return {
      steps: [
        {
          img: {
            alt: "шаг 1",
            src: "build/images/steps/step-1",
          },
          text: "<span>1.</span> Отсоедините колбу от царги",
        },

        {
          img: {
            alt: "шаг 2",
            src: "build/images/steps/step-2",
          },
          text: "<span>2.</span> Прочно закрепите колбу зажимами и залейте внутрь брагу. Установите царгу обратно",
        },

        {
          img: {
            alt: "шаг 3",
            src: "build/images/steps/step-3",
          },
          text: "<span>3.</span> Поставьте горелку в специально отведённое для этого место и подожгите её",
        },

        {
          img: {
            alt: "шаг 4",
            src: "build/images/steps/step-4",
          },
          text: "<span>4.</span> Наблюдайте за процессом перегонки",
        },

        {
          img: {
            alt: "шаг 5",
            src: "build/images/steps/step-5",
          },
          text: "<span>5.</span> Капли готового дистиллята выйдут через трубку в заранее приготовленную посуду",
        },

        {
          img: {
            alt: "шаг 6",
            src: "build/images/steps/step-6",
          },
          text: "<span>6.</span> Наслаждайтесь напитком!",
        },
      ],
      stepsIndex: 1,
    };
  },
  components: { StepsItem, SliderButton },
  mounted() {
    let context = this;
    let myStepsSwiper;
    const stepsSwiper = () => {
      myStepsSwiper = new Swiper(".steps-wrapper", {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 20,
        autoHeight: true,
        grabCursor: true,
        loop: true,
        navigation: {
          nextEl: ".steps-button-next",
          prevEl: ".steps-button-prev",
        },
        modules: [Navigation],
        on: {
          slideChange: function () {
            context.stepsIndex = this.realIndex + 1;
          },
          init: function () {
            context.stepsIndex = this.realIndex + 1;
          },
        },
      });
    };

    const stepsSwiperbreakpoint = window.matchMedia("(min-width: 993px)");
    const breakpointChecker = () => {
      if (!stepsSwiperbreakpoint.matches) {
        return stepsSwiper();
      } else {
        if (myStepsSwiper) {
          return myStepsSwiper.destroy(true, true);
        }
      }
    };

    stepsSwiperbreakpoint.addListener(breakpointChecker);
    breakpointChecker();
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#steps {
  @extend %pbt;

  .title {
    gap: 25px;

    @media (max-width: 1024px) {
      gap: 20px;
    }

    @media (max-width: 768px) {
      gap: 10px;
    }
  }

  .steps-wrapper {
    overflow: hidden;

    @media (max-width: 992px) {
      width: 100%;
      max-width: 520px;
      margin: 0 auto;
    }

    @media (max-width: 768px) {
      max-width: 370px;
    }
  }

  .steps-navigation {
    display: flex;
    gap: 20px;
    align-items: center;
    max-width: 160px;
    margin: 20px auto;

    .steps-current {
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
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 35px;

      @media (max-width: 1366px) {
        gap: 25px;
      }

      @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
        max-width: 920px;
        margin: 0 auto;
      }
    }

    .steps-navigation {
      display: none;
    }
  }
}
</style>
