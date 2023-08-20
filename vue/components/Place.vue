<template>
  <section id="place">
    <div class="container">
      <div class="title">
        <h2>Перегонка — в любых условиях!</h2>
        <p class="subtitle">Занимайтесь дистилляцией там, где хочется</p>
      </div>

      <div class="place-wrapper">
        <div v-for="(place, index) in places" :key="index">
          <my-image
            class="place-wrapper__img"
            :alt="place.img.alt"
            :sorce="'build/images/place/' + place.img.src"
            :media="993"
          />
          <p v-html="place.text"></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MyImage from "../UI/MyImage.vue";
export default {
  components: { MyImage },
  data() {
    return {
      places: [
        {
          text: "На природе",
          img: {
            src: "place-1",
            alt: "самогонный аппарат на природе",
          },
        },

        {
          text: "На даче",
          img: {
            src: "place-2",
            alt: "самогонный аппарат на даче",
          },
        },

        {
          text: "На охоте",
          img: {
            src: "place-3",
            alt: "самогонный аппарат на охоте",
          },
        },

        {
          text: "На рыбалке",
          img: {
            src: "place-4",
            alt: "самогонный аппарат на рыбалке",
          },
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#place {
  .title {
    gap: 25px;

    @media (max-width: 1024px) {
      gap: 20px;
    }

    @media (max-width: 768px) {
      gap: 10px;
    }
  }
  @extend %pbt;

  .place-wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 35px;

    @media (max-width: 1366px) {
      gap: 25px;
    }

    @media (max-width: 992px) {
      grid-template-columns: repeat(2, 1fr);
      max-width: 580px;
      width: 100%;
      margin: 0 auto;
      gap: 20px;
    }

    @media (max-width: 576px) {
      grid-template-columns: 1fr;
    }

    p {
      font-family: "Raleway";
      font-style: normal;
      font-weight: 400;
      font-size: 26px;
      line-height: 121%;
      margin-top: 30px;
      text-align: center;
      color: #323232;

      @include fluidFontSize(20, 26, 993, 1920);

      @media (max-width: 992px) {
        margin-top: 10px;
      }

      @media (max-width: 768px) {
        font-size: 20px;
        line-height: 27px;
      }
    }

    &__img {
      @include image-aspect {
        aspect-ratio: 98/67;
        @media (max-width: 992px) {
          max-width: 278px;
          aspect-ratio: 278/187;
        }
      }

      @media (max-width: 992px) {
        align-self: center;
        picture {
          justify-content: center;
        }
      }
    }
  }
}
</style>
