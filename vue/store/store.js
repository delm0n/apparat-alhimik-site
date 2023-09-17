import { createStore } from "vuex";
import { storePHP } from "./storePHP.js";

export default createStore({
  modules: {
    storePHP,
  },
  state() {
    return {
      modalFeedback: false,
      modalSuccess: "",
      review: false,

      promocode: {
        message: "",
        status: "",
        coupon: "",
        id: 0,
        price: 0,
      },

      user: {
        name: "",
        phone: "",
        rassrochka: false,
      },

      alhimik: {
        id: goods.alhimik,
        price: goodsJson[goods.alhimik].price,
        oldPrice: goodsJson[goods.alhimik].oldPrice,
      },
    };
  },
  mutations: {
    showModalFeedback(state) {
      state.modalFeedback = true;
    },

    changeUserRassrochka(state, value) {
      state.user.rassrochka = value;
    },

    writeReview(state) {
      state.review = true;
    },

    openModalSuccess(state, text) {
      state.modalSuccess = text;
    },

    setPromocode(state, json) {
      if (json.status === "success") {
        state.promocode.message = "Промокод применён";
        // state.promocode.status = json.status;
        // state.promocode.coupon = json.coupon;
        // state.promocode.id = json.id;
        // state.promocode.price = json.price;
      } else {
        state.promocode.message = "Промокод недействителен";
        // state.promocode.status = json.status;
        // state.promocode.coupon = "";
        // state.promocode.id = 0;
        // state.promocode.price = 0;
      }
    },
  },
  getters: {
    getModalFeedback(state) {
      return state.modalFeedback;
    },
    getReview(state) {
      return state.review;
    },

    getUser(state) {
      return state.user;
    },
    getUserRassrochka(state) {
      return state.user.rassrochka;
    },

    getPromocode(state) {
      return state.promocode;
    },

    getMainId(state) {
      return state.alhimik.id;
    },

    getMainPrices(state) {
      return [state.alhimik.price, state.alhimik.oldPrice];
    },
  },
});
