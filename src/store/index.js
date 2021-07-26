import { createStore } from "vuex";

export default createStore({
  state: {
    showModal: false,
    showModalUser: false,
    showHeader: false,
    profileBgUrl: "",
    profileIMg: "",
    userInfo: {},
  },
  mutations: {
    showModal(state, value) {
      state.showModal = value;
    },
    showModalUser(state, value) {
      state.showModalUser = value;
    },
    showHeader(state, value) {
      state.showHeader = value;
    },
    setProfileBgUrl(state, value) {
      state.profileBgUrl = value;
    },
    setProfileImg(state, value) {
      state.profileImg = value;
    },
    setUserInfo(state, value) {
      state.userInfo = value;
    },
  },
  actions: {},
  modules: {},
});
