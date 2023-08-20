<template>
  <div class="steps-item">
    <my-image
      class="steps-item__img"
      :alt="step.img.alt"
      :sorce="step.img.src"
      :media="769"
    />
    <p v-html="step.text"></p>
  </div>
</template>

<script>
import MyImage from "../UI/MyImage.vue";
export default {
  components: { MyImage },
  props: {
    step: Object,
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

.steps-item {
  p {
    font-family: "Raleway";
    font-style: normal;
    color: #323232;
    margin-top: 20px;

    font-weight: 400;
    font-size: 24px;
    line-height: 125%;

    @include fluidFontSize(18, 24, 993, 1920);

    @media (max-width: 768px) {
      font-size: 16px;
      line-height: 23px;
    }
    span {
      font-weight: 600;
    }
  }

  &__img {
    @include image-aspect {
      aspect-ratio: 506/294;
      @media (max-width: 768px) {
        max-width: 385px;
        aspect-ratio: 379/222;
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
</style>
