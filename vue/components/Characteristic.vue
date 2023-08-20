<template>
  <section id="characteristic">
    <div class="container">
      <div class="title">
        <h2>Компактный дистиллятор</h2>
        <p class="subtitle">Узнайте, что делает «Алхимик» особенным</p>
      </div>

      <div class="characteristic-wrapper">
        <div class="characteristic-wrapper__img">
          <my-image
            :alt="'характеристики алхимика'"
            :sorce="'build/images/characteristic/characteristic'"
            :media="769"
          />
        </div>
        <div class="characteristic-wrapper__col col1">
          <div
            v-for="(item, index) in col1"
            :key="index"
            class="characteristic-wrapper__item"
          >
            <h3 v-html="item.title"></h3>
            <p v-html="item.text"></p>
          </div>
        </div>
        <div class="characteristic-wrapper__col col2">
          <div
            v-for="(item, index) in col2"
            :key="index"
            class="characteristic-wrapper__item"
          >
            <h3 v-html="item.title"></h3>
            <p v-html="item.text"></p>
          </div>

          <button @click="orderModalOpen">Заказать</button>
        </div>

        <div class="characteristic-wrapper__button">
          <button @click="orderModalOpen">Заказать</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapMutations } from "vuex";
import MyImage from "../UI/MyImage.vue";
export default {
  components: {
    MyImage,
  },
  data() {
    return {
      col1: [
        {
          title: "<span> Вес </span> - 3200&nbsp;г",
          text: "«Алхикик» легко переносить в рюкзаке или даже сумке. Вы всегда сможете взять его с собой — в гости, на дачу или даже на рыбалку.",
        },
        {
          title:
            "<span> Материал </span>  - AISI&nbsp;304 + калёное&nbsp;стекло",
          text: "Только проверенные материалы, не вступающие в химическую реакцию с продуктами.",
        },
        {
          title: "<span> Объём куба </span> - 2&nbsp;л",
          text: "Колбы на 2 литра достаточно, чтобы провести пробную перегонку или сделать самогон в небольшом количестве всего за полтора часа!",
        },
      ],
      col2: [
        {
          title: "<span> Рабочая мощность </span>  - 1&nbsp;кВт",
          text: "Оптимальная мощность для карманного дистиллятора, которая позволит сделать перегонку даже в полевых условиях.",
        },

        {
          title: "<span> Размеры </span> - 450х350х210",
          text: "В отличие от обычного самогонного аппарата, который занимает полкухни, «Алхикик» компактен. Коллекционная модель не требует много места — она помещается на полке, столе, тумбочке и буквально приковывает к себе взгляды гостей.",
        },
      ],
    };
  },

  methods: {
    ...mapMutations(["changeUserRassrochka"]),

    orderModalOpen() {
      this.changeUserRassrochka(false);
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

#characteristic {
  @extend %pbt-gray;

  .title {
    gap: 23px;

    @media (max-width: 1024px) {
      gap: 19px;
    }

    @media (max-width: 768px) {
      gap: 15px;
    }
  }

  .container {
    @media (max-width: 992px) {
      max-width: 1610px;
    }
    @media (max-width: 768px) {
      max-width: 560px;
    }
  }

  .characteristic-wrapper {
    display: grid;
    grid-template-columns: 6.5fr 8fr 9fr;
    column-gap: 40px;

    @media (max-width: 1280px) {
      column-gap: 30px;
    }

    @media (max-width: 1180px) {
      grid-template-columns: 1fr 1fr;
      width: 95%;
      margin: 0 auto;
    }

    @media (max-width: 1180px) {
      grid-template-columns: 0.8fr 1fr;
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      width: 100%;
      gap: 0px;
    }

    &__img {
      margin-right: 10px;

      @media (max-width: 1180px) {
        margin-right: 0;
        grid-row: 1/3;
        align-self: center;
        picture {
          justify-content: center;
        }
      }

      @media (max-width: 768px) {
        grid-row: 1/2;
        grid-column: 1/2;
      }

      @include image-aspect {
        aspect-ratio: 312/521;
        @media (max-width: 768px) {
          aspect-ratio: 43/70;
          max-width: 172px;
        }
      }
    }

    &__item {
      margin-bottom: 35px;
      @media (max-width: 1180px) {
        margin-bottom: 20px;
      }
      @media (max-width: 1180px) {
        margin-bottom: 15px;
      }
    }

    &__col {
      &.col2 {
        grid-column: 3/4;
        grid-row: 1/2;

        .characteristic-wrapper__item p {
          max-width: 490px;
          width: 100%;
        }

        button {
          @extend %button-green;
        }
      }
      @media (max-width: 1180px) {
        &.col1 {
          grid-column: 2/3;
          grid-row: 1/2;
          align-self: end;
        }

        &.col2 {
          grid-column: 2/3;
          grid-row: 2/3;

          button {
            display: none;
          }
        }
      }

      @media (max-width: 768px) {
        &.col1 {
          grid-column: 1/2;
          grid-row: 2/3;
        }

        &.col2 {
          grid-column: 1/2;
          grid-row: 3/4;
        }
      }

      h3 {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 400;
        font-size: 26px;
        line-height: 121%;
        color: #323232;

        @include fluidFontSize(20, 26, 993, 1920);

        margin-bottom: 15px;
        @media (max-width: 1180px) {
          margin-bottom: 12px;
        }

        @media (max-width: 768px) {
          font-size: 18px;
          line-height: 25px;
          margin-bottom: 5px;
        }

        span {
          font-family: "Raleway";
          font-weight: 600;
          font-size: 26px;
          line-height: 118%;

          @include fluidFontSize(20, 26, 993, 1920);

          @media (max-width: 768px) {
            font-size: 20px;
            line-height: 27px;
          }
        }
      }

      p {
        font-family: "Raleway";
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 125%;
        color: #323232;

        @include fluidFontSize(18, 24, 993, 1920);

        @media (max-width: 768px) {
          font-size: 16px;
          line-height: 23px;
        }
      }
    }

    &__button {
      grid-column: 3/4;
      grid-row: 1/2;
      align-self: flex-end;
      margin: 20px 0 100px;

      @media (max-width: 1440px) {
        margin-bottom: 60px;
      }

      @media (min-width: 1181px) {
        display: none;
      }

      @media (max-width: 1180px) {
        grid-row: 3/4;
        grid-column: 1/3;
        margin: 0;
      }

      @media (max-width: 768px) {
        grid-row: 4/5;
      }

      button {
        @extend %button-green;

        @media (max-width: 1180px) {
          margin: 40px auto 0;
        }

        @media (max-width: 768px) {
          margin: 25px auto 0;
        }
      }
    }
  }
}
</style>
