<template>
  <div id="modal-feedback">
    <template v-if="getModalFeedback">
      <h3>Напишите отзыв о товаре</h3>
      <div>
        <div class="inputs-container">
          <input
            class="alhimik-input alhimik-input-name"
            aria-label="Ваше имя"
            type="text"
            autocomplete="off"
            placeholder="Ваше имя"
            v-model="name"
          />

          <input
            :class="[
              'alhimik-input alhimik-input-email',
              errors.email ? 'alhimik-input--error' : '',
            ]"
            aria-label="Ваш e-mail"
            type="email"
            autocomplete="off"
            placeholder="Ваш e-mail"
            v-model="email"
            @click="errors.email = false"
          />

          <input-file class="alhimik-input-file" v-tabindex />

          <textarea
            :class="[
              'alhimik-input alhimik-input-textaria',
              errors.text ? 'alhimik-input--error' : '',
            ]"
            aria-label="Ваш отзыв"
            type="email"
            placeholder="Ваш отзыв..."
            rows="7"
            v-model="text"
            style="resize: none"
            @click="errors.text = false"
          ></textarea>
          <button
            :disabled="
              !(this.text && this.email && this.name) &&
              !errors.email &&
              !errors.text
            "
            @click="validateForm()"
            class="button"
          >
            Написать отзыв
          </button>
        </div>
      </div>

      <div class="decr">
        Нажимая на кнопку «Написать отзыв», вы соглашаетесь на обработку
        персональных данных, а также с политикой конфиденциальности
      </div>
    </template>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import InputFile from "../UI/InputFile.vue";

export default {
  data() {
    return {
      email: "",
      text: "",
      name: "",

      errors: {
        email: false,
        text: false,
      },
    };
  },
  directives: {
    tabindex: {
      inserted(el) {
        el.setAttribute("tabindex", 0);
      },
    },
  },
  computed: mapGetters(["getModalFeedback"]),
  methods: {
    validateForm() {
      this.emailError();
      this.textError();

      let send = true; //отправляем
      for (var key in this.errors) {
        this.errors[key] ? (send = false) : "";
      }

      if (send) {
        this.writeReview();
        Fancybox.close();
      }
    },

    ...mapMutations(["writeReview"]),

    emailError() {
      !/^[^@]+@\w+(\.\w+)+\w$/.test(this.email)
        ? ((this.errors.email = true), alert("Email указан не корректно"))
        : (this.errors.email = false);
    },

    textError() {
      this.text.length < 10
        ? ((this.errors.text = true),
          alert("Отзыв должен содержать минимум 10 символов"))
        : (this.errors.text = false);
    },
  },
  components: {
    InputFile,
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#modal-feedback {
  .alhimik-input--error {
    &::placeholder {
      color: rgb(214 85 85 / 70%);
      opacity: 1;
    }
  }

  @extend %modal;

  max-width: 860px;
  width: 100%;
  padding: 45px 15px;
  margin: 0 auto;
  @media (max-width: 768px) {
    padding: 30px 17px 24px;
    max-width: 520px;
  }

  h3 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 28px;

    line-height: 37px;
    text-align: center;
    color: #323232;
    margin-bottom: 35px;

    @media (max-width: 768px) {
      font-size: 26px;
      line-height: 33px;
      margin-bottom: 25px;
    }
  }

  .button {
    @extend %button-green;
  }

  .decr {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;

    text-align: center;
    color: #707070;
    max-width: 500px;
    margin: 50px auto 0;

    @media (max-width: 768px) {
      font-size: 14px;
      line-height: 21px;
      margin-top: 20px;
    }
  }
  @media (min-width: 769px) {
    .inputs-container {
      display: grid;
      grid-template-columns: 1fr 1.1fr;
      gap: 15px 35px;
      .alhimik-input-name {
        grid-column: 1/2;
        grid-row: 1/2;
      }

      .alhimik-input-email {
        grid-column: 1/2;
        grid-row: 2/3;
      }

      .alhimik-input-file {
        grid-column: 1/2;
        grid-row: 3/5;
      }

      .alhimik-input-textaria {
        grid-column: 2/3;
        grid-row: 1/4;
      }

      .button {
        grid-column: 2/3;
        grid-row: 4/5;
      }
    }
  }
  @media (max-width: 768px) {
    .inputs-container {
      & > * {
        margin-bottom: 15px;
      }

      .button {
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
}
</style>
