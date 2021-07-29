import { createStore } from "vuex";

export default createStore({
  state: {
    showModal: false,
    showModalUser: false,
    showHeader: false,
    showNFT: false,
    showQr: false,
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
    showNFT(state, value) {
      state.showNFT = value;
    },
    mutateQr(state, value) {
      state.showQr = value;
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
