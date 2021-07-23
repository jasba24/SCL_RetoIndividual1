import { createStore } from "vuex";

export default createStore({
  state: {
    showModal: false,
    showModalStack: false,
    profileBgUrl: "",
  },
  mutations: {
    showModal(state, value) {
      state.showModal = value;
    },
    showModalStack(state, value) {
      state.showModalStack = value;
    },
    setProfileBgUrl(state, value) {
      state.profileBgUrl = value;
    },
  },
  actions: {},
  modules: {},
});
