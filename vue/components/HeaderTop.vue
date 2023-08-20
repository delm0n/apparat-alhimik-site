<template>
  <div class="header-top" :class="{ 'header-top--scroll': scroll }">
    <div class="container">
      <div class="header-top__wrap">
        <div class="header-top__logo">
          <picture>
            <source srcset="build/images/src/logo.webp" type="image/webp" />
            <img src="build/images/src/logo.png" alt="Логотип Helicon" />
          </picture>
          <p>
            Официальный сайт <br />
            завода-производителя
          </p>
        </div>

        <div class="header-top__nav">
          <ul
            ref="menu"
            class="menu-list"
            v-bind:class="{ 'menu-list--open': burger }"
          >
            <li v-for="(item, index) in navigations" v-bind:key="index">
              <p
                v-on:click="scrollToSection(item.selector)"
                v-text="item.name"
              ></p>
            </li>
            <li>
              <a
                download
                href="uploadupdate/Инструкция СА _Алхимик_.pdf"
                target="_blank"
                >Инструкция</a
              >
            </li>
            <li class="mobile-phone">
              <a href="tel:88002505932">{{ getPhone }}</a>
            </li>
          </ul>
        </div>

        <div class="header-top__contact">
          <a href="tel:88002505932" class="header-top__contact-phone">{{
            getPhone
          }}</a>

          <p class="phone-decr">Звонок по России бесплатный</p>

          <!-- <div class="header-top__contact-button" @click="openModalCall()">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="26"
              viewBox="0 0 28 26"
              fill="none"
            >
              <path
                id="Vector"
                d="M13.9192 0C6.65406 0 0.743164 5.83192 0.743164 13C0.743164 20.1681 6.65406 26 13.9192 26C15.1127 26 16.2948 25.8429 17.5462 25.4922C20.081 24.3861 21.4642 21.6566 20.8514 18.9938L20.8772 18.9684C21.2632 18.5891 21.4369 17.8575 21.2648 17.3465L21.1908 17.1244C21.0171 16.6134 20.4445 16.0802 19.9169 15.9373L17.9692 15.4121C17.4416 15.2709 16.6889 15.4613 16.3013 15.8438L15.5968 16.5388C13.0363 15.8549 11.0274 13.8728 10.3357 11.3465L11.0402 10.6514C11.4263 10.2705 11.6193 9.52783 11.4761 9.00575L10.9453 7.08398C10.8021 6.56348 10.2585 5.99854 9.7406 5.82715L9.51861 5.75412C8.99909 5.58274 8.25763 5.7557 7.87161 6.13818L6.8165 7.1792C6.62833 7.36328 6.50768 7.89171 6.50768 7.89334C6.47227 11.1973 7.78478 14.3791 10.1524 16.7166C12.5135 19.0462 15.7271 20.3396 19.0645 20.3109C19.0725 20.3109 19.1948 20.284 19.3396 20.2411C19.3492 21.8391 18.4309 23.3324 16.9945 23.9656C15.9989 24.2369 14.9646 24.375 13.9192 24.375C7.56279 24.375 2.39017 19.2715 2.39017 13C2.39017 6.72852 7.56279 1.625 13.9192 1.625C20.2756 1.625 25.4482 6.72852 25.4482 13C25.4482 14.8694 24.9979 16.6578 24.1085 18.313C23.8961 18.7097 24.0506 19.2017 24.451 19.4111C24.8548 19.6238 25.3517 19.4698 25.564 19.0747C26.5661 17.2085 27.0952 15.1074 27.0952 13C27.0952 5.83192 21.1844 0 13.9192 0Z"
                fill="white"
              />
            </svg>

            <svg
              style="display: none"
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="14"
              viewBox="0 0 15 14"
              fill="none"
            >
              <g id="vuesax/bold/call-calling">
                <g id="vuesax/bold/call-calling_2">
                  <g id="call-calling">
                    <path
                      id="Vector"
                      d="M10.8645 6.30244C10.6116 6.30244 10.4116 6.08185 10.4116 5.81715C10.4116 5.58395 10.1939 5.09866 9.82924 4.67639C9.47042 4.26673 9.0763 4.02723 8.74689 4.02723C8.49395 4.02723 8.29395 3.80664 8.29395 3.54193C8.29395 3.27723 8.49983 3.05664 8.74689 3.05664C9.33512 3.05664 9.95277 3.39698 10.4939 4.00832C10.9998 4.58185 11.3234 5.29404 11.3234 5.81084C11.3234 6.08185 11.1175 6.30244 10.8645 6.30244Z"
                      fill="#A8A8A8"
                    />
                    <path
                      id="Vector_2"
                      d="M12.988 6.3023C12.7351 6.3023 12.5351 6.08171 12.5351 5.81701C12.5351 3.57961 10.8351 1.76449 8.75275 1.76449C8.4998 1.76449 8.2998 1.5439 8.2998 1.27919C8.2998 1.01449 8.4998 0.787598 8.74686 0.787598C11.3351 0.787598 13.441 3.0439 13.441 5.81701C13.441 6.08171 13.2351 6.3023 12.988 6.3023Z"
                      fill="#A8A8A8"
                    />
                    <path
                      id="Vector_3"
                      d="M6.99931 8.94936L5.91108 10.1153C5.68166 10.3611 5.31696 10.3611 5.08166 10.1216C5.01696 10.0523 4.95225 9.98928 4.88755 9.91995C4.28166 9.26449 3.73461 8.57751 3.24637 7.85903C2.76402 7.14054 2.37578 6.42205 2.09343 5.70987C1.81696 4.99138 1.67578 4.3044 1.67578 3.64894C1.67578 3.22037 1.74637 2.81071 1.88755 2.43256C2.02872 2.0481 2.25225 1.69516 2.56402 1.38003C2.94049 0.982976 3.35225 0.787598 3.78755 0.787598C3.95225 0.787598 4.11696 0.825413 4.26402 0.901043C4.41696 0.976673 4.55225 1.09012 4.65813 1.25398L6.02284 3.31491C6.12872 3.47247 6.20519 3.61743 6.25813 3.75609C6.31108 3.88844 6.34049 4.02079 6.34049 4.14054C6.34049 4.2918 6.29931 4.44306 6.21696 4.58802C6.14049 4.73298 6.02872 4.88424 5.88755 5.0355L5.44049 5.5334C5.37578 5.60272 5.34637 5.68466 5.34637 5.7855C5.34637 5.83592 5.35225 5.88004 5.36402 5.93046C5.38166 5.98088 5.39931 6.01869 5.41108 6.05651C5.51696 6.26449 5.69931 6.5355 5.95813 6.86323C6.22284 7.19096 6.50519 7.52499 6.81108 7.85903C6.8699 7.92205 6.93461 7.98508 6.99343 8.0481C7.22872 8.2939 7.23461 8.69726 6.99931 8.94936Z"
                      fill="#A8A8A8"
                    />
                    <path
                      id="Vector_4"
                      d="M13.4239 11.0798C13.4239 11.2562 13.3945 11.439 13.3357 11.6155C13.318 11.6659 13.3004 11.7163 13.2769 11.7667C13.1769 11.9936 13.0475 12.2079 12.8769 12.4096C12.5886 12.7499 12.271 12.9957 11.9122 13.1533C11.9063 13.1533 11.9004 13.1596 11.8945 13.1596C11.5475 13.3108 11.171 13.3928 10.7651 13.3928C10.1651 13.3928 9.52393 13.2415 8.84746 12.9327C8.17099 12.6239 7.49452 12.2079 6.82393 11.6848C6.59452 11.502 6.36511 11.3193 6.14746 11.1239L8.07099 9.06295C8.2357 9.1953 8.38275 9.29614 8.50628 9.36547C8.5357 9.37808 8.57099 9.39698 8.61217 9.41589C8.65923 9.4348 8.70628 9.4411 8.75923 9.4411C8.85923 9.4411 8.9357 9.40329 9.0004 9.33396L9.44746 8.86127C9.59452 8.70371 9.7357 8.58396 9.87099 8.50833C10.0063 8.42009 10.1416 8.37598 10.2886 8.37598C10.4004 8.37598 10.518 8.40119 10.6475 8.45791C10.7769 8.51463 10.9122 8.59657 11.0592 8.70371L13.0063 10.1848C13.1592 10.2982 13.2651 10.4306 13.3298 10.5882C13.3886 10.7457 13.4239 10.9033 13.4239 11.0798Z"
                      fill="#A8A8A8"
                    />
                  </g>
                </g>
              </g>
            </svg>

            <span>Заказать звонок</span>
          </div> -->

          <div
            class="burger-container"
            :class="{ 'burger-container--open': burger }"
            @click="burger = !burger"
          >
            <div class="burger" v-bind:class="{ 'burger--open': burger }">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      scroll: false,
      burger: false,
      navigations: [
        {
          name: "Преимущества",
          selector: "#reasons",
        },

        {
          name: "Гарантии",
          selector: "#made",
        },

        {
          name: "Доставка",
          selector: "#delivery",
        },

        {
          name: "Отзывы",
          selector: "#feedback",
        },
      ],
    };
  },
  computed: mapGetters(["getPhone"]),
  created() {
    window.addEventListener("scroll", () => {
      this.scroll = window.pageYOffset < 30 ? false : true;
    });
  },

  methods: {
    scrollToSection(selector) {
      this.gsap.to(window, {
        duration: 1.5,
        // добавить в +
        scrollTo: { y: selector },

        // scrollTo:
        //   document.querySelector(selector).offsetTop -
        //   document.querySelector(selector).offsetHeight,
      });
      this.burger = false;
    },

    openModalCall() {
      setTimeout(() => {
        Fancybox.show([
          {
            src: "#call-modal",
          },
        ]);
      }, 10);
    },
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

@mixin flex-center-x($gap) {
  display: flex;
  align-items: center;
  column-gap: $gap;
}

.header-top {
  position: fixed;
  background-color: #fff;
  width: 100%;
  box-shadow: 0 7px 9px 1px rgba(0, 0, 0, 0);
  transition: all 0.4s ease-in-out;
  padding: 0 20px;
  z-index: 20;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 576px) {
    padding: 0 10px;
  }

  &--scroll {
    box-shadow: 0 7px 9px 1px transparentize(#323232, 0.95);
  }

  &__wrap {
    display: flex;
    align-items: center;
    column-gap: 45px;
    justify-content: space-between;
    height: 80px;
    position: relative;

    @media (max-width: 768px) {
      height: 70px;
    }
  }

  &__logo {
    // @include flex-center-x(30px);
    display: flex;
    align-items: center;

    p {
      color: #323232;
      font-size: 12px;
      font-family: "Raleway";
      line-height: 19px;
      margin-left: 15px;
      white-space: nowrap;

      @media (max-width: 1750px) and (min-width: 1281px) {
        display: none;
      }

      @media (max-width: 768px) {
        font-size: 12px;
        line-height: 130%;
        margin-left: 10px;
      }

      @media (max-width: 576px) {
        display: none;
      }
    }

    img {
      @media (max-width: 768px) {
        display: block;
        max-width: 60px;
        width: 100%;
      }
    }
  }

  &__contact {
    @include flex-center-x(10px);
    flex-direction: column;

    @media (max-width: 1280px) {
      gap: 20px;
    }

    @media (max-width: 768px) {
      gap: 10px;
    }

    &-phone {
      display: block;
      white-space: nowrap;
      transition: all 0.4s;

      color: #323232;
      font-size: 24px;
      font-family: "IBM Plex Sans";
      font-weight: 600;
      line-height: 31px;

      &:hover {
        color: #e2bc85;
      }

      @media (max-width: 1280px) {
        display: none;
      }
    }

    .phone-decr {
      color: var(--unnamed, #323232);
      text-align: center;
      font-family: "Raleway";
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: 25px;

      @media (max-width: 1280px) {
        display: none;
      }
    }

    // &-button {
    //   cursor: pointer;
    //   display: flex;
    //   align-items: center;

    //   width: 241px;
    //   justify-content: center;
    //   height: 47px;
    //   border-radius: 20px;
    //   background: #a8a8a8;
    //   box-shadow: 0px 0px 30px 0px rgba(255, 255, 255, 0.3);
    //   @media (max-width: 768px) {
    //     width: 30px;
    //     height: 30px;
    //     background: none;
    //     border-radius: 30px;
    //     border: 1px solid #a8a8a8;
    //     svg {
    //       &:nth-child(2) {
    //         display: block !important;
    //       }
    //       &:first-child {
    //         display: none;
    //       }
    //     }
    //   }
    //   span {
    //     white-space: nowrap;
    //     margin-left: 18px;
    //     color: #fff;
    //     text-align: center;
    //     font-size: 18px;
    //     font-family: "Raleway";
    //     font-weight: 600;
    //     line-height: 25px;
    //     @media (max-width: 768px) {
    //       display: none;
    //     }
    //   }
    //   transition: all 0.3s;
    //   box-shadow: 0 10px 30px transparentize(#fff, 1);
    //   &:hover,
    //   &:focus {
    //     box-shadow: 0px 0px 30px 0px rgba(255, 255, 255, 0.3);
    //     background: #707070;
    //   }
    //   &:active {
    //     transform: translateY(1px);
    //   }
    // }
  }

  &__nav {
    .menu-list {
      @include flex-center-x(20px);
      // flex-wrap: wrap;
      justify-content: center;
      row-gap: 10px;

      @media (max-width: 1280px) {
        flex-direction: column;
        align-items: start;
        gap: 10px;
        position: absolute;
        top: 0;
        z-index: 10;
        background: #fff;
        width: 216px;
        box-sizing: border-box;
        padding: 65px 20px 20px;
        right: 0px;
        transform: translateY(-100%);
        opacity: 0;
        transition: transform 0.45s 0.1s, opacity 0.25s;
        border-radius: 10px;
      }

      @media (max-width: 576px) {
        top: -5px;
        right: 5px;
      }

      &--open {
        transform: translateY(10px);
        opacity: 1;
        transition: transform 0.4s, opacity 0.3s 0.2s;
      }

      li:not(.mobile-phone) {
        p,
        a {
          transition: all 0.4s;
          cursor: pointer;

          color: #323232;
          text-align: center;
          font-size: 20px;
          font-family: "Raleway";
          font-weight: 500;
          line-height: 27px;

          &:hover {
            color: #e2bc85;
          }

          @media (max-width: 1280px) {
            color: #323232;
            padding: 5px 0;
            font-size: 16px;
            font-weight: 600;
            line-height: 23px;
          }
        }
      }

      .mobile-phone {
        display: none;
        @media (max-width: 1280px) {
          display: block;
          a {
            display: block;
            margin-top: 5px;
            color: var(--unnamed, #323232);
            font-family: "IBM Plex Sans";
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
            line-height: 25px;
          }
        }
      }
    }
  }

  .burger {
    &-container {
      @media (min-width: 1281px) {
        display: none;
      }
      cursor: pointer;
      display: block;
      height: 44px;
      width: 44px;
      border-radius: 22px;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 20;
      transition: all 0.3s;

      @media (max-width: 576px) {
        width: 36px;
        height: 36px;
      }

      // &--open {
      //   border: 1px solid #323232;
      // }
    }

    position: relative;
    width: 40px;
    height: 14px;

    span {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 22px;
      height: 1px;
      border-radius: 0;
      background-color: #323232;
      transition: 0.4s all;

      &:nth-child(1) {
        top: 1px;
      }

      &:nth-child(2),
      &:nth-child(3) {
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
      }

      &:nth-child(4) {
        top: calc(100% - 1px);
        transform: translateX(-50%) translateY(-50%);
      }
    }

    &--open {
      span {
        background-color: #323232;
        &:nth-child(1) {
          transition: 0.2s all;
          opacity: 0;
        }

        &:nth-child(2) {
          transform: translateX(-50%) translateY(-50%) rotate(45deg);

          @media (max-width: 479px) {
            width: 24px;
          }
        }

        &:nth-child(3) {
          transform: translateX(-50%) translateY(-50%) rotate(-45deg);

          @media (max-width: 479px) {
            width: 24px;
          }
        }

        &:nth-child(4) {
          transition: 0.2s all;
          opacity: 0;
        }
      }
    }
  }
}
</style>
