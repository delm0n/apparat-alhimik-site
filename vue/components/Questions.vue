<template>
  <section id="questions">
    <div class="container">
      <div class="questions-wrapper">
        <div class="questions-wrapper__img">
          <my-image
            :alt="'наши операторы всегда на связи'"
            :mobile="false"
            :sorce="'build/images/questions/questions-2'"
          />
        </div>
        <div class="questions-wrapper__content">
          <h2>Остались вопросы ?</h2>
          <p class="phone">8 800 250 59 32</p>
          <p class="decr">
            Звоните прямо сейчас, и мы ответим. Или оставьте свои данные, и мы
            свяжемся с вами в ближайшее&nbsp;время
          </p>

          <questions-form />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MyImage from "../UI/MyImage.vue";
import QuestionsForm from "./QuestionsForm.vue";
export default {
  components: { MyImage, QuestionsForm },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#questions {
  @extend %pbt-gray;

  .questions-wrapper {
    display: flex;
    gap: 60px;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1366px) {
      gap: 20px;
    }

    @media (max-width: 1125px) {
      justify-content: center;
    }

    &__img {
      min-width: 576px;
      @media (max-width: 1125px) {
        display: none;
      }
    }

    &__content {
      max-width: 645px;
      width: 100%;

      & > *:not(:last-child) {
        margin-bottom: 25px;
      }

      h2 {
        color: #323232;
        font-size: 52px;
        font-family: "Raleway";
        font-weight: 700;
        line-height: 115%;

        @include fluidFontSize(36, 52, 992, 1920);

        @media (max-width: 768px) {
          font-size: 26px;
          font-weight: 700;
          text-align: center;
          line-height: 33px;
          margin-bottom: 30px;
        }
      }

      .phone {
        color: #323232;
        font-size: 32px;
        font-family: "IBM Plex Sans";
        font-weight: 500;
        line-height: 115%;

        @include fluidFontSize(22, 32, 992, 1920);

        @media (max-width: 768px) {
          font-size: 24px;
          font-weight: 500;
          text-align: center;
          line-height: 31px;
          margin-bottom: 15px;
        }
      }

      .decr {
        color: #323232;
        font-size: 24px;
        font-family: "Raleway";
        line-height: 129%;

        @include fluidFontSize(20, 24, 992, 1920);

        @media (max-width: 768px) {
          text-align: center;
          font-size: 18px;
          line-height: 25px;
          margin-bottom: 15px;
        }
      }
    }
  }
}
</style>