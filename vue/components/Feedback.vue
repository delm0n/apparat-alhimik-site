<template>
  <section id="feedback">
    <div class="container">
      <div class="title">
        <h2>Отзывы наших клиентов</h2>
      </div>
      <div class="feedback-wrapper__container">
        <div class="row">
          <div class="feedback-wrapper">
            <div class="swiper-wrapper">
              <div v-for="(feed, i) in feedbacks" :key="i" class="swiper-slide">
                <div class="feedback-item">
                  <div class="feedback-item__img">
                    <my-image
                      :alt="'Отзыв клиента на аппарат алхимик'"
                      :sorce="'build/images/feedback/' + feed.img"
                      :media="577"
                    />
                  </div>

                  <div class="feedback-item__btn">
                    <div class="link-inline" @click="readFeedback(feed.text)">
                      Прочитать отзыв
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="feedback-navigation">
              <div class="feedback-button-prev">
                <slider-button :longarrow="longarrowFeedbacks" />
              </div>

              <div class="feedback-button-next">
                <slider-button :rotate="true" :longarrow="longarrowFeedbacks" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="feedback-button">
        <button :disabled="getReview" @click="openModalFeedback()">
          {{ getReview ? "Отзыв отправлен" : "Написать отзыв" }}
        </button>
      </div>
    </div>

    <div v-if="modalContent" id="feedback-modal" style="display: none">
      <p v-html="modalContent"></p>
    </div>
  </section>
</template>

<script>
import { Swiper, Navigation } from "swiper";
import MyImage from "../UI/MyImage.vue";
import SliderButton from "../UI/SliderButton.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  components: { MyImage, SliderButton },
  data() {
    return {
      longarrowFeedbacks: window.innerWidth > 768,
      feedbacks: [
        {
          img: "feedback-1",
          text: "Приветствую. У меня уже есть основной аппарат колонного типа на 2 дюйма. При выборе ректификационные колонны задумывался как гнать малые объемы или гнать пробу напитков. Сначала был выбор купить аппарат с сухопарником, выбрав поменьше куб. Но все не то. А как увидел алхимика решил сразу взять. Такой компактный домашний вариант как раз для малых прогонов. Доставка бесплатная порадовала. Пока стоит в кабинете радует глаз, как прогоню на нем пробу джин, отпишусь.",
        },
        {
          img: "feedback-2",
          text: "Да совсем недавно заинтересовала эта тема самогоноварения. Не планирую гнать большие обьемы литров на целую деревню. Интресен сам процесс. Не хотелось покупать дорогое оборудование, а для начала изучил какие модели бывают, и увидел у того же производителя новинку алхимик. Большое спасибо менеджерам, которые при оформлении заказа мне доходчиво объяснили все азы как правильно им пользоваться. Буду практиковаться",
        },
        {
          img: "feedback-3",
          text: "Значит так.. Здравствуйте. Года идут, а два самых любимых хобби - самогоноварения и рыбалка - остаются. Как приходит лето не люблю сидеть дома. На реку я езжу часто отдохнуть в тишине от семьи, а вот самогонный аппарат с собой не потащишь… Как увидел этот мини самогонный аппарат, так загорелся идеей купить. Теперь буду сидеть на берегу озера перегонять мацерат и ловить рыбу. Просто сказка... А главное он работает автономно от горелки, то есть электричество не нужно, воду можно использовать из речки.",
        },
        {
          img: "feedback-4",
          text: "Решили с коллегами купить в интернет магазине подарок директору от коллектива. Аппарат пришел быстро и хорошо упакованный. Внешних дефектов нет, стекло целое без сколов и царапин. В работе пока не проверяли, хороший подарок самогонщику со стажем. А главное его производят в России.",
        },
        {
          img: "feedback-5",
          text: "Здравствуйте.Покупал отцу на юбилей, спасибо что не опоздали с доставкой. Цитирую с его слов: “Это один из лучших подарков за всю мою жизнь!” Он как сувенирный, но и рабочий дистиллятор. При этом отличное качество и успел урвать по выгодной цене. Изучил ваш каталог товаров, заинтересовал автоклав, теперь я загорелся его приобрести пока действуют подарочные скидки. В целом у вас очень приятный ассортимент.",
        },
        {
          img: "feedback-6",
          text: "Добрый день! Все хорошо упаковано, надежно. Ничего не разбилось. Комплект полный, спасибо за подарки и бонусы. Я подарила отцу, очень доволен. Классный аппарат. Магазин понравился, продавцы грамотно объясняют. Буду еще у вас заказывать!",
        },
        {
          img: "feedback-7",
          text: "Здравствуйте, живу в Москве и взял Алхимик на подарок для коллеги. Рейтинг нужно поддерживать, все дела. Подарок получился просто топ. Можно использовать не только для красоты, но и для приготовления самогона, а стоит недорого (брал по низким скидочным ценам). В общем, самый оригинальный подгон получился у меня. Теперь друг говорит, мол, покупайте себе тоже. А мы с женой гоним на огромном, с узлом отбора. Такая штуковина нам, разве что, на обзор и на сувенир. Но если честно, красиво, блин! Совсем бы не отказался.",
        },
      ],
      modalContent: "",
    };
  },

  mounted() {
    let myFeedbackSwiper;
    const feedbackSwiper = () => {
      myFeedbackSwiper = new Swiper(".feedback-wrapper", {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 40,
        grabCursor: true,
        loop: true,
        navigation: {
          nextEl: ".feedback-button-next",
          prevEl: ".feedback-button-prev",
        },
        modules: [Navigation],

        breakpoints: {
          1367: {
            spaceBetween: 40,
          },

          993: {
            slidesPerView: 3,
            spaceBetween: 25,
          },

          577: {
            slidesPerView: 2,
            spaceBetween: 20,
          },

          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        },
      });
    };

    addEventListener("resize", (event) => {
      myFeedbackSwiper.destroy(true, true);
      feedbackSwiper();
    });
    feedbackSwiper();
  },
  computed: mapGetters(["getReview"]),

  methods: {
    ...mapMutations(["showModalFeedback"]),

    readFeedback(text) {
      this.modalContent = text;
      setTimeout(() => {
        Fancybox.show([
          {
            src: "#feedback-modal",
          },
        ]);
      }, 10);
    },

    openModalFeedback() {
      this.showModalFeedback();
      setTimeout(() => {
        Fancybox.show([
          {
            src: "#modal-feedback",
          },
        ]);
      }, 10);
    },
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#feedback {
  overflow: hidden;
  @extend %pbt-gray;

  .container {
    @media (max-width: 768px) {
      max-width: 684px;
    }
  }

  .feedback-wrapper__container {
    position: relative;
  }

  .row {
    max-width: 1525px;
    margin: 0 auto;
    overflow: hidden;

    @media (min-width: 577px) {
      width: 80%;
      .feedback-button-prev,
      .feedback-button-next {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 5;
      }

      .feedback-button-prev {
        left: 20px;

        @media (max-width: 768px) {
          left: 0;
        }
      }

      .feedback-button-next {
        right: 20px;
        @media (max-width: 768px) {
          right: 0;
        }
      }
    }
  }
  @media (max-width: 576px) {
    .feedback-navigation {
      display: flex;
      gap: 15px;
      justify-content: center;
      margin-top: 30px;
      margin-bottom: 15px;
    }
  }

  .feedback-item {
    &__btn {
      margin: 33px auto 0;
      display: flex;
      justify-content: center;

      @media (max-width: 1366px) {
        margin: 22px auto 0;
      }

      .link-inline {
        @include linkHover(#323232);

        font-family: "Raleway";
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 139%;
        text-align: center;
        color: #323232;

        @media (max-width: 768px) {
          font-size: 16px;
          line-height: 23px;
        }
      }
    }

    &__img {
      img {
        width: 100%;
        aspect-ratio: 380/707;
        @media (max-width: 576px) {
          aspect-ratio: 75/139;
          max-width: 224px;
        }
      }

      picture {
        justify-content: center;
      }
    }
  }

  .feedback-button {
    margin-top: 60px;
    @media (max-width: 768px) {
      margin-top: 35px;
    }
    @media (max-width: 576px) {
      margin-top: 15px;
    }
    button {
      @extend %button-gray;
      margin: 0 auto;
    }
  }
}

#feedback-modal {
  @extend %modal;
  max-width: 615px;
  padding: 60px 22px 35px;
  border-radius: 20px;

  @media (max-width: 768px) {
    padding: 30px 15px 25px;
    max-width: 520px;

    .is-close {
      top: 10px !important;
      width: 16px;
      height: 16px;
    }
  }

  p {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 31px;

    color: #323232;

    @media (max-width: 768px) {
      font-size: 14px;
      line-height: 21px;
    }
  }
}
</style>
