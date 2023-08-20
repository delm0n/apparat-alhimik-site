<template>
  <div id="order-success-modal">
    <h3>Благодарим за доверие!</h3>

    <p>Ожидайте звонка в течение 10 минут с <span> 7(495)255-37-10 </span></p>
  </div>
</template>


<style lang="scss">
@import "../../scss/_global.scss";

#order-success-modal {
  @extend %modal;
  max-width: 480px;
  padding: 30px;
  width: 100%;

  @media (max-width: 768px) {
    max-width: 390px;
  }
  @media (max-width: 375px) {
    padding: 20px 10px;
  }

  h3 {
    color: #323232;
    text-align: center;
    font-size: 28px;

    font-family: "Raleway";
    font-weight: 700;
    line-height: 37px;
    padding-top: 10px;
    margin-bottom: 30px;

    @media (max-width: 768px) {
      font-size: 26px;
      font-weight: 700;
      line-height: 33px;
      margin-bottom: 15px;
    }
  }

  p {
    color: #707070;
    text-align: center;
    font-size: 18px;
    font-family: "Raleway";
    line-height: 25px;

    @media (max-width: 768px) {
      font-size: 16px;
      line-height: 23px;
    }

    span {
      color: #323232;
      text-align: center;
      font-size: 20px;
      font-family: "IBM Plex Sans";
      font-weight: 600;
      line-height: 27px;

      @media (max-width: 768px) {
        font-size: 18px;
        line-height: 25px;
      }
    }
  }
}
</style>