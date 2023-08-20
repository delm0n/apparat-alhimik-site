<template>
  <div
    :class="[
      'reasons-item',
      reverse ? 'reasons-item--reverse' : '',
      lastitem ? 'reasons-item--last' : '',
    ]"
  >
    <div class="reasons-item__text">
      <h3>
        <span>{{ stepnumber }}.</span> {{ title }}
      </h3>
      <div class="reasons-item__text-content">
        <slot></slot>
      </div>
    </div>

    <div class="reasons-item__img">
      <my-image :alt="imgAlt" :sorce="imgSrc" :media="769" />
    </div>
  </div>
</template>

<script>
import MyImage from "../UI/MyImage.vue";
export default {
  props: {
    title: String,
    imgSrc: String,
    imgAlt: String,
    reverse: {
      type: Boolean,
      default: false,
    },
    stepnumber: Number,
    lastitem: {
      type: Boolean,
      default: false,
    },
  },

  components: {
    MyImage,
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

.reasons-item {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  align-items: center;
  gap: 30px;
  position: relative;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 20px;
    max-width: 520px;
    margin: 0 auto;
  }

  &.reasons-item--last {
    &::before {
      display: none !important;
    }
  }

  @media (min-width: 993px) {
    &::before {
      content: "";
      position: absolute;
      width: 28%;
      bottom: 0;
      left: 0;
      height: 5px;
      background-color: #e2bc85;
    }
  }

  &__img {
    @include image-aspect {
      aspect-ratio: 770/453;
      @media (max-width: 768px) {
        max-width: 385px;
        aspect-ratio: 385/227;
      }
    }

    @media (max-width: 992px) {
      align-self: center;
      picture {
        justify-content: center;
      }
    }
  }

  &__text {
    /* top | right | bottom | left */
    padding: 0 0 15px 20px;

    @media (max-width: 992px) {
      padding: 0;
      grid-column: 1/2;
      grid-row: 2/3;
    }
  }

  h3 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 118%;
    color: #323232;
    margin-bottom: 25px;
    padding-left: 10px;

    // @include fluidFontSize(28, 28, 993, 1920);

    @media (max-width: 768px) {
      padding-left: 0;
      margin-bottom: 15px;
      font-size: 22px;
      line-height: 29px;
      span {
        display: none;
      }
    }
  }
}

.reasons-item--reverse {
  @media (min-width: 993px) {
    &::before {
      right: 0;
      left: auto;
    }

    .reasons-item__text {
      grid-column: 2/3;
      grid-row: 1/2;
      /* top | right | bottom | left */
      padding: 0 20px 15px 0;
    }
  }
}
</style>
