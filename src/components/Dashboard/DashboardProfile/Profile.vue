<template>
  <section class="profile" v-show="false">
    <div v-show="showModal" class="modal">
      <Modal></Modal>
    </div>
    <div class="bg__container">
      <div @click="toogleModal" class="edit__icon"></div>
      <img class="profile__img" :src="profileURL" />
    </div>
  </section>
  <button class="btn__nft">Ver nuwe NFT</button>
  <ProfileDescription v-show="false"></ProfileDescription>
  <ProfileStack v-show="false"></ProfileStack>
  <NFT v-show="true"></NFT>
</template>

<script setup>
import profileImg from "@/assets/profileImg.png";
import profileBg from "@/assets/profileBg.png";

import Modal from "@/components/Dashboard/DashboardModal/Modal";
import ProfileDescription from "@/components/Dashboard/DashboardProfile/ProfileDescription";
import ProfileStack from "@/components/Dashboard/DashboardProfile/ProfileStack";
import NFT from "@/components/Dashboard/DashboardNFT/NFT";
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
.btn__nft
  background transparent
  border 1px solid #689F63
  color #689F63
  padding 10px 30px
  margin-top 20px
  margin-left 30px
  cursor pointer
  text-transform uppercase
@media (max-width 600px)
  .profile__img
    left 35%
@media (max-width 425px)
  .profile__img
    left 30%
</style>
