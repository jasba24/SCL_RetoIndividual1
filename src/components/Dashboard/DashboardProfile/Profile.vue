<template>
  <section class="profile">
    <div v-show="showModal" class="modal">
      <Modal></Modal>
    </div>
    <div class="bg__container">
      <div @click="toogleModal" class="edit__icon"></div>
      <img class="profile__img" :src="profileURL" />
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

const store = useStore();

const bgURL = computed(() => {
  return store.state.profileBgUrl
    ? `url(${store.state.profileBgUrl})`
    : `url(${profileBg})`;
});

const showModal = computed(() => store.state.showModal);

const toogleModal = () => {
  store.commit("showModal", true);
};

const profileURL = computed(() => store.state.profileImg ?? profileImg);
</script>

<style lang="stylus" scoped>
.bg__container
  position relative
  width 100%
  height 170px
  background-image v-bind(bgURL)
  background-size cover
  background-repeat no-repeat
.profile__img
  width 150px
  height 150px
  object-fit cover
  border-radius 50%
  border 2px solid #39424E
  position relative
  left 43%
  bottom -90px
@media (max-width 600px)
  .profile__img
    left 35%
@media (max-width 425px)
  .profile__img
    left 30%
</style>
