<template>
  <section id="idea">
    <div class="container">
      <div class="title">
        <h2>Узнайте, что можно приготовить с «Алхимиком»</h2>
        <p class="subtitle">Лучшие идеи для вашей первой перегонки</p>
      </div>

      <div class="idea-content">
        <div class="idea-pagination idea-tabs"></div>
        <div class="swiper-wrapper">
          <div v-for="(tab, index) in tabs" :key="index" class="swiper-slide">
            <div class="idea-slide-wrapper">
              <div class="idea-slide-wrapper__text">
                <p class="idea-content__title">Вам потребуется:</p>
                <div class="composition-list">
                  <p
                    v-for="(comp, i) in tab.composition"
                    :key="i"
                    v-html="comp"
                  ></p>
                </div>

                <p class="idea-content__title">Этапы приготовления:</p>
                <div class="step-list">
                  <p v-for="(step, i) in tab.steps" :key="i">
                    Шаг {{ i + 1 }}. <span v-html="step"></span>
                  </p>
                </div>

                <div v-if="tab.stepsHidden" class="hidden-container">
                  <transition
                    name="collapse"
                    v-on:before-enter="beforeEnter"
                    v-on:enter="enter"
                    v-on:before-leave="beforeLeave"
                    v-on:leave="leave"
                  >
                    <div
                      v-show="tab.stepsHidden.show"
                      class="step-list"
                      style="transition: all 0.6s"
                    >
                      <p v-for="(step, i) in tab.stepsHidden.list" :key="i">
                        Шаг {{ tab.steps.length + i + 1 }}.
                        <span v-html="step"></span>
                      </p>
                    </div>
                  </transition>

                  <div
                    class="show-more"
                    v-if="!tab.stepsHidden.show"
                    @click="tab.stepsHidden.show = !tab.stepsHidden.show"
                  >
                    Подробнее
                  </div>
                </div>
              </div>

              <div class="idea-slide-wrapper__img">
                <my-image
                  :alt="tab.type"
                  :sorce="'build/images/idea/' + tab.src"
                  :media="993"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, Pagination, EffectFade } from "swiper";
import MyImage from "../UI/MyImage.vue";
import transitionHeight from "../mixins/transitionHeight";

export default {
  mixins: [transitionHeight],
  components: { MyImage },
  data() {
    return {
      tabs: [
        {
          type: "Самогон",
          steps: [
            "Осветлённую сахарную брагу (2л) залейте в&nbsp;куб",
            "Выполните перегонку на медленном&nbsp;огне",
            "Выполните очистку любым удобным&nbsp;способом",
            "Разбавьте спирт-сырец до 15–20&nbsp;градусов",
            "Выполните вторую перегонку с отделением «голов» в размере 5% от общего&nbsp;объёма",
          ],
          composition: ["Сахарная брага — 2&nbsp;л"],
          src: "idea-1",
        },

        {
          type: "Ароматный мацерат",
          steps: [
            "Готовую выдержанную настойку (2л) залейте в&nbsp;куб",
            " Выполните перегонку на быстром огне с отделением «голов» в размере 5% от общего&nbsp;объёма",
            " Дайте напитку настояться в течение 7&nbsp;дней",
          ],
          composition: ["Готовая настойка (по вкусу) — 2&nbsp;л"],
          src: "idea-2",
        },

        {
          type: "Виски",
          steps: [
            "Настаивайте самогон на солоде в течение 14 дней в тёмном&nbsp;помещении",
            "Получившуюся настойку (2 л) залейте в&nbsp;куб",
            " Выполните перегонку на быстром огне с отделением «голов» в размере 5% от общего&nbsp;объёма",
          ],
          stepsHidden: {
            list: [
              "Добавьте декстрозу",
              "Перелейте напиток в ёмкость с добавлением щепы американского белого дуба сильной обжарки и настаивайте виски ещё 6-12 месяцев",
            ],
            show: false,
          },
          composition: [
            "Готовый самогон — 2&nbsp; л",
            "Солод — ⅔ стакана",
            "Декстроза — ½&nbsp;чайной ложки",
            "Щепа из американского белого дуба — 1&nbsp;пакетик",
          ],
          src: "idea-3",
        },

        {
          type: "Бренди",
          steps: [
            "Осветлённую виноградную брагу (2л) залейте в&nbsp;куб",
            "Выполните перегонку на медленном&nbsp;огне",
            "Выполните очистку любым удобным&nbsp;способом",
            "Разбавьте спирт-сырец до 15-20&nbsp;градусов",
            " Выполните вторую перегонку с отделением «голов» в размере 5% от общего&nbsp;объёма",
          ],
          stepsHidden: {
            list: [
              "Разбавьте самогон до крепости 50 градусов",
              "Ошпарьте щепу кипятком и слейте воду",
              "Выложите щепу в ёмкость так, чтобы она занимала ⅓ всего пространства",
              "Залейте в ту же ёмкость самогон",
              "Настаивайте бренди ещё 6-12 месяцев",
            ],
            show: false,
          },
          composition: [
            "Виноградная брага — 2&nbsp;л",
            "Дубовая щепа — 1&nbsp;пакетик",
          ],
          src: "idea-4",
        },
      ],
    };
  },

  mounted() {
    let myIdeaSwiper;
    const ideaSwiper = () => {
      let context = this;
      myIdeaSwiper = new Swiper(".idea-content", {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0,
        grabCursor: false,
        loop: false,
        effect: "fade",
        fadeEffect: {
          crossFade: true,
        },
        allowTouchMove: false,
        speed: 500,
        pagination: {
          el: ".idea-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return (
              '<span class="' +
              className +
              '">' +
              context.tabs[index].type +
              "</span>"
            );
          },
        },
        modules: [Pagination, EffectFade],
        on: {
          slideChange: function () {
            context.tabs.forEach((element) => {
              element.stepsHidden ? (element.stepsHidden.show = false) : "";
            });
          },
        },
      });
    };

    addEventListener("resize", (event) => {
      myIdeaSwiper.destroy(true, true);
      ideaSwiper();
    });
    ideaSwiper();
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";
#idea {
  .title {
    gap: 30px;
    @media (max-width: 1024px) {
      gap: 20px;
    }
    @media (max-width: 768px) {
      gap: 15px;
    }
  }
  @extend %pbt-gray;
  overflow: hidden;
  .idea-pagination {
    @media (max-width: 992px) {
      display: flex;
      flex-wrap: wrap;
      row-gap: 7px;
    }

    @media (max-width: 576px) {
      padding: 5px 10px 0;
    }

    @media (max-width: 375px) {
      padding: 0;
    }

    .swiper-pagination-bullet {
      color: #323232;
      text-align: center;
      font-size: 24px;
      font-family: "Raleway";
      line-height: 125%;
      text-align: center;
      transition: padding 0.4s;
      white-space: nowrap;
      position: relative;
      margin: 0;
      opacity: 1;
      width: auto;
      background: none;
      height: auto;
      border-radius: 0;
      @include fluidFontSize(20, 24, 993, 1920);

      @media (max-width: 768px) {
        font-size: 18px;
        line-height: 25px;
      }

      &:not(:last-child) {
        // margin-right: 30px;

        @media (max-width: 768px) {
          margin-right: 20px;
        }

        @media (max-width: 576px) {
          margin-right: 15px;
        }

        @media (max-width: 375px) {
          margin-right: 7px;
        }
      }

      &:before {
        background: #e2bc85;
        bottom: 7px;
        content: "";
        height: 2px;
        left: 50%;
        position: absolute;
        transform: translate(-50%);
        transition: width 0.3s ease;
        width: 0;

        @media (max-width: 768px) {
          bottom: 0;
        }
      }

      &:first-child {
        border-radius: 20px 0px 0px 0px;
      }

      &:last-child {
        border-radius: 0px 20px 0px 0px;
      }

      @media (min-width: 769px) {
        padding: 3px 15px 7px;
        background: rgba(216, 216, 216, 0.4);
      }

      &-active {
        font-weight: 600;
        background: #fff;
        color: #323232cc;
        z-index: 10;
        &:before {
          width: calc(100% - 30px);

          @media (max-width: 768px) {
            width: 100%;
          }
        }
      }
    }
  }

  .swiper-slide {
    height: auto;

    @media (min-width: 769px) {
      background: #fff;
      box-shadow: 5px 5px 15px 0px rgba(157, 157, 157, 0.15);
      border-radius: 0px 30px 30px 30px;
      padding: 30px;
    }
  }

  .idea-slide-wrapper {
    display: flex;
    justify-content: space-between;
    // margin-top: 40px;
    gap: 50px;

    @media (max-width: 768px) {
      margin-top: 25px;
    }

    @media (max-width: 1024px) {
      gap: 25px;
    }

    @media (max-width: 992px) {
      flex-direction: column-reverse;

      picture {
        justify-content: center;
      }
    }
  }

  .idea-content {
    max-width: 1440px;
    margin: 0 auto;

    @media (max-width: 768px) {
      padding: 5px;
      border-radius: 20px;
      overflow: hidden;
      background: #fff;
      box-shadow: 5px 5px 15px 0px rgba(157, 157, 157, 0.15);
    }

    &__title {
      color: #323232;
      font-size: 26px;
      font-family: "Raleway";
      font-weight: 600;
      line-height: 115%;
      margin-bottom: 15px;

      @media (max-width: 1366px) {
        margin-bottom: 10px;
      }

      @include fluidFontSize(20, 26, 993, 1920);

      @media (max-width: 768px) {
        font-size: 18px;
        line-height: 25px;
      }

      &:not(:first-child) {
        margin-top: 30px;

        @media (max-width: 768px) {
          margin: 20px 0;
        }
      }

      @media (max-width: 768px) {
        font-size: 18px;
        line-height: 25px;
        margin-bottom: 5px;
      }
    }

    .step-list {
      p {
        max-width: 540px;
        width: 100%;
        color: #323232;
        font-size: 22px;
        font-family: "IBM Plex Sans";
        font-weight: 500;
        line-height: 115%;
        margin-bottom: 15px;

        @include fluidFontSize(18, 22, 993, 1920);

        @media (max-width: 1366px) {
          margin-bottom: 10px;
        }

        @media (max-width: 768px) {
          font-size: 16px;
          line-height: 23px;
        }

        span {
          font-size: 20px;
          font-family: "Raleway";
          line-height: 115%;

          @include fluidFontSize(16, 20, 993, 1920);

          @media (max-width: 768px) {
            line-height: 21px;
            font-size: 14px;
          }
        }
      }
    }

    .composition-list p {
      color: #323232;
      font-size: 20px;
      font-family: "Raleway";
      font-weight: 500;
      line-height: 115%;
      margin-bottom: 5px;

      @include fluidFontSize(18, 20, 993, 1920);

      @media (max-width: 768px) {
        font-size: 16px;
        line-height: 23px;
      }
    }

    .show-more {
      color: #323232;
      font-size: 24px;
      font-family: "Raleway";
      font-weight: 600;
      line-height: 31px;
      position: relative;
      display: inline-block;
      cursor: pointer;

      @media (max-width: 768px) {
        font-size: 16px;
        font-family: "IBM Plex Sans";
        font-weight: 500;
        line-height: 23px;
        margin-bottom: 15px;
      }

      &:before {
        background: #e2bc85;
        bottom: 0px;
        content: "";
        height: 2px;
        left: 50%;
        position: absolute;
        transform: translate(-50%);
        transition: width 0.3s ease;
        width: 100%;
      }
    }
  }
}
</style>