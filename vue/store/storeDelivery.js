import { createStore } from "vuex";
import { storePHP } from "./storePHP.js";

export default createStore({
  modules: {
    storePHP,
  },
  getters: {
    getMainId(state) {
      return alhimik.id;
    },
  },
});
