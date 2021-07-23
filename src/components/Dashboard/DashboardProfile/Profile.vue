<template>
  <section class="profile">
    <div v-show="showModal" class="modal">
      <Modal></Modal>
    </div>
    <div class="bg__container">
      <div @click="toogleModal" class="edit__icon"></div>
      <img class="profile__img" :src="profileImg" />
    </div>
  </section>
  <ProfileDescription></ProfileDescription>
  <ProfileStack></ProfileStack>
</template>

<script setup>
import profileImg from "@/assets/profileImg.png";
import profileBg from "@/assets/profileBg.png";

import Modal from "@/components/Dashboard/DashboardModal/Modal";
import ProfileDescription from "@/components/Dashboard/DashboardProfile/ProfileDescription";
import ProfileStack from "@/components/Dashboard/DashboardProfile/ProfileStack";
import { computed } from "vue";
import { useStore } from "vuex";

const bgURL = computed(() => {
  return store.state.profileBgUrl
    ? `url(${store.state.profileBgUrl})`
    : `url(${profileBg})`;
});

const store = useStore();

const showModal = computed(() => store.state.showModal);

const toogleModal = () => {
  store.commit("toogleModal", true);
  console.log(store.state.showModal);
};
</script>

<style lang="stylus" scoped>
.profile
  width 78vw
.bg__container
  position relative
  width 100%
  height 170px
  background-image v-bind(bgURL)
  background-size cover
  background-repeat no-repeat
.profile__img
  position relative
  object-fit cover
  left 43%
  bottom -90px
.modal
  background-color rgba(0, 0, 0, 0.8)
  display flex
  justify-content center
  align-items center
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index 10
</style>
