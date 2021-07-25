<template>
  <div class="img__container">
    <div>
      <img class="img__logo" :src="BrandLogo" alt="" />
      <img class="img__name" :src="BrandName" alt="" />
    </div>
    <img
      @click="closeHeader"
      class="closeHeader__icon"
      :src="ArrowLeftCircle"
      alt=""
    />
  </div>
</template>

<script setup>
import BrandLogo from "@/assets/BrandLogo.svg";
import BrandName from "@/assets/BrandName.svg";
import ArrowLeftCircle from "@/assets/Arrow - Left Circle.svg";
import { useStore } from "vuex";

const store = useStore();

const closeHeader = () => {
  store.commit("showHeader", false);
};
</script>

<style lang="stylus" scoped>
.img__logo
  width 30px
  height 35px
  margin-right 10px
.img__name
  height 35px
.img__container
  display flex
  justify-content space-around
  margin-bottom 50px
.closeHeader__icon
  width 30px
  height 35px
  display none
@media (max-width: 768px)
  .closeHeader__icon
    display block
</style>
