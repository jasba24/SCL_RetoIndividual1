import { createStore } from "vuex";

export default createStore({
  state: {
    showModal: false,
    profileBgUrl: "",
  },
  mutations: {
    showModal(state, value) {
      state.showModal = value;
    },
    setProfileBgUrl(state, value) {
      state.profileBgUrl = value;
    },
  },
  actions: {},
  modules: {},
});
