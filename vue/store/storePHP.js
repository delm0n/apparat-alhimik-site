export const storePHP = {
  state: () => ({
    webpSupport: webp,
    test: testVersion,
    year: year,
    formHelicon: "",
    phone: phone,
  }),
  mutations: {},
  getters: {
    getYear(state) {
      return state.year;
    },
    getWebp(state) {
      return state.webpSupport;
    },
    getMetric(state) {
      return state.formHelicon;
    },

    getPhone(state) {
      return state.phone;
    },

    isTest(state) {
      return state.test;
    },
  },
};
