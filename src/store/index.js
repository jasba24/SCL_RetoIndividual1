import { createStore } from "vuex";

export default createStore({
  state: {
    showModal: false,
    profileBgUrl: "",
    userInfo: {},
  },
  mutations: {
    showModal(state, value) {
      state.showModal = value;
    },
    setProfileBgUrl(state, value) {
      state.profileBgUrl = value;
    },
    setUserInfo(state, value) {
      state.userInfo = value;
    },
  },
  actions: {},
  modules: {},
});
