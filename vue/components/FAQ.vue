<template>
  <section id="faq">
    <div class="container">
      <div class="title">
        <h2>Ответы на самые популярные вопросы</h2>
      </div>

      <div class="accordions">
        <div
          v-for="(acc, index) in accordions"
          v-bind:key="index"
          class="accordion-item"
        >
          <div class="accordion-menu">
            <h3>
              <span class="number"> {{ index + 1 }}. </span>
              {{ acc.title }}
            </h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
            >
              <line
                x1="0.5"
                y1="12.0294"
                x2="25.5"
                y2="12.0294"
                stroke="#323232"
                stroke-width="1.5"
              />
              <line
                v-show="!acc.show"
                x1="12.9043"
                y1="25.3481"
                x2="12.9043"
                y2="0.348145"
                stroke="#323232"
                stroke-width="1.5"
              />
            </svg>
          </div>
          <div class="accordion-content">
            <div class="accordion-content__wrap">
              <p v-html="acc.content"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      accordions: [
        {
          title: "Сколько прослужит СА «Алхимик»? ",
          content:
            "При аккуратном использовании аппарата, он прослужит долгие годы. Вам остаётся только время от времени менять горелки и расходные материалы (шланги).",
          show: false,
        },
        {
          title: "На сколько хватает горелки?",
          content: `Горелки хватает примерно на 5-6 часов непрерывной работы.`,
          show: false,
        },
        {
          title: "Какой мощности холодильник?",
          content:
            "Холодильник, установленный в аппарате, имеет мощность 1,5 кВт.",
          show: false,
        },
        {
          title: "Сколько времени занимает перегонка?",
          content: "Перегонка занимает 1 час 30 минут.",
          show: false,
        },
        {
          title: "Можно ли вернуть аппарат, если его качество меня не устроит?",
          content:
            "Вы можете обменять или вернуть товар в течение 14 (а в случае дистанционной оплаты — 7) дней с момента покупки. Все обращения обрабатывает служба поддержки. Правила возврата: товар не был в употреблении, нет следов эксплуатации; товар надлежащего качества; имеется чек.",
          show: false,
        },
        {
          title: "Какой крепости можно добиться на этом аппарате?",
          content:
            "Максимальная крепость готового продукта составляет 75 градусов.",
          show: false,
        },
      ],
    };
  },

  methods: {
    createAnimation(element) {
      let menu = element.querySelector(".accordion-menu");
      let box = element.querySelector(".accordion-content");

      this.gsap.set(box, { height: "auto" });
      let animation = this.gsap
        .from(box, {
          height: 0,
          duration: 0.3,
          ease: "power1.inOut",
        })
        .reverse();

      return function (clickedMenu) {
        if (clickedMenu === menu) {
          animation.reversed(!animation.reversed());
        } else {
          animation.reverse();
        }
      };
    },

    changeShow(i) {
      this.accordions.forEach((element, index) => {
        index == i
          ? (element.show = element.show == true ? false : true)
          : (element.show = false);
      });
    },
  },

  mounted() {
    this.$nextTick(function () {
      let groups = this.gsap.utils.toArray(".accordion-item");

      let menus = this.gsap.utils.toArray(".accordion-menu");
      let menuToggles = groups.map(this.createAnimation);
      menus.forEach((menu, i) => {
        menu.addEventListener("click", () => {
          toggleMenu(menu);
          this.changeShow(i);
        });
      });
      function toggleMenu(clickedMenu) {
        menuToggles.forEach((toggleFn) => toggleFn(clickedMenu));
      }
    });
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#faq {
  @extend %pbt-gray;

  .accordions {
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 35px;
    // filter: drop-shadow(5px 5px 15px 0px rgba(157, 157, 157, 0.15));
    // box-shadow: 5px 5px 15px 0px rgba(157, 157, 157, 0.15);

    @media (max-width: 768px) {
      gap: 20px;
    }
  }

  .accordion-menu {
    border-radius: 10px;
    padding: 28px 50px;
    cursor: pointer;
    user-select: none;
    min-height: 100px;
    display: flex;
    align-items: center;
    box-shadow: 5px 5px 15px 0px rgba(157, 157, 157, 0.15);

    gap: 15px;
    justify-content: space-between;

    background: #ffffff;
    border-radius: 10px;

    @media (max-width: 768px) {
      padding: 14px;
      min-height: 70px;
    }

    h3 {
      color: #323232;
      font-family: "Raleway";
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 123%;

      @include fluidFontSize(20, 24, 993, 1920);

      @media (max-width: 768px) {
        font-size: 14px;
        line-height: 21px;
      }
      span.number {
        font-family: "IBM Plex Sans";
      }
    }

    svg {
      flex-shrink: 0;

      width: 36px;
      height: 36px;

      @media (max-width: 992px) {
        width: 28px;
        height: 28px;
      }
    }
  }

  .accordion-content {
    height: 0;
    overflow: hidden;

    &__wrap {
      padding: 20px 0 0;

      //   @media (max-width: 768px) {
      //     padding: 30px 10px 0;
      //   }

      //   @media (max-width: 576px) {
      //     padding: 18px 10px 0;
      //   }
    }

    p {
      font-family: "Raleway";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 132%;
      color: #323232;

      @media (max-width: 768px) {
        font-size: 14px;
        line-height: 21px;
      }
    }
  }
}
</style>
