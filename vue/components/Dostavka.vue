<template>
  <section id="dostavka-block">
    <div class="container">
      <div class="dostavka-block__wrapper">
        <div class="dostavka-block__text">
          <h2>Гарантия честной цены</h2>
          <p>
            Мы сотрудничаем с самыми оперативными транспортными компаниями
            России: ПЭК, DPD, КИТ, Деловые линии. Если вы больше доверяете
            другой транспортной фирме, то мы можем воспользоваться ее услугами.
            <br /><br />
            По умолчанию мы отправляем ваш заказ Почтой России. Стоимость
            доставки и полную стоимость заказа менеджер сообщит вам на этапе
            согласования.
          </p>
        </div>

        <div class="dostavka-block__img">
          <my-image
            :alt="'Доставка'"
            :sorce="'build/images/dostavka/dostavka-block-img'"
            :mobile="false"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MyImage from "../UI/MyImage.vue";
export default {
  components: { MyImage },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#dostavka-block {
  @extend %pbt;
  background: #fff;
  padding-top: 0;

  .dostavka-block__wrapper {
    display: flex;
    gap: 50px;
    align-items: center;

    @media (max-width: 992px) {
      flex-direction: column;
    }
  }

  .dostavka-block__text {
    @media (min-width: 993px) {
      max-width: 50%;
    }

    h2 {
      color: #2b2b2b;
      font-size: 52px;
      font-family: "Raleway";
      font-weight: 700;
      line-height: 130%;
      margin-bottom: 30px;

      @include fluidFontSize(36, 52, 992, 1920);

      @media (max-width: 768px) {
        margin-bottom: 15px;
        text-align: center;
        font-size: 26px;
        line-height: 33px;
      }
    }

    p {
      color: #2b2b2b;
      font-size: 24px;
      font-family: "Raleway";
      line-height: 29px;

      @include fluidFontSize(18, 24, 993, 1920);

      @media (max-width: 768px) {
        font-size: 16px;
        line-height: 23px;
      }
    }
  }
}
</style>