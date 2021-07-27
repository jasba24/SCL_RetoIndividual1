<template>
  <main>
    <DashboardHeader></DashboardHeader>
    <div v-show="!showNFT" class="profile__container" ref="profile">
      <Profile>
        <button @click="toggleProfile" class="btn__nft">Ver nuwe NFT</button>
      </Profile>
    </div>
    <div v-show="showNFT" class="nft__container" ref="nft">
      <NFT>
        <button @click="toggleNFT" class="btn__nft">Ver nuwe NFT</button>
      </NFT>
    </div>
  </main>
</template>

<script setup>
import DashboardHeader from "@/components/Dashboard/DasboardHeader";
import Profile from "@/components/Dashboard/DashboardProfile/Profile";
import NFT from "@/components/Dashboard/DashboardNFT/NFT";
import { computed, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const nft = ref(null);
const profile = ref(null);

const showNFT = computed(() => store.state.showNFT);

const toggleNFT = () => {
  nft.value.classList.add("showAnimation");
  profile.value.classList.remove("showAnimation");
  setTimeout(() => {
    store.commit("showNFT", !showNFT.value);
  }, 1000);
};

const toggleProfile = () => {
  profile.value.classList.add("showAnimation");
  nft.value.classList.remove("showAnimation");
  setTimeout(() => {
    store.commit("showNFT", !showNFT.value);
  }, 1000);
};

const bc = computed(() => {
  return !showNFT.value ? "#2E353F" : "transparent";
});

const border = computed(() => {
  return !showNFT.value ? "1px solid #39424E" : "none";
});
</script>

<style lang="stylus" scoped>
main
  width calc(100% - 50px)
  margin-right 50px
.profile__container
  background-color v-bind(bc)
  border v-bind(border)
.btn__nft
  background transparent
  border 1px solid #689F63
  color #689F63
  padding 10px 30px
  margin-top 20px
  margin-left 30px
  cursor pointer
  text-transform uppercase
.showAnimation
  animation-name leave
  animation-duration 1s
@keyframes leave
  0%
    transform scale(0)
  50%
    transform scale(0.5)
  100%
    transform scale(0)
@media (max-width: 1200px)
  main
    margin-right 20px
@media (max-width: 768px)
  main
    position relative
    margin-left 20px
</style>
