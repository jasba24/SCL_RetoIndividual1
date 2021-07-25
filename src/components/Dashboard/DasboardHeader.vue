<template>
  <figure>
    <img @click="showHeader" class="menu" :src="menu" alt="" />
    <img class="setting" :src="Setting" alt="" />
  </figure>
</template>

<script setup>
import menu from "@/assets/menu.svg";
import Setting from "@/assets/Setting.svg";
import { useStore } from "vuex";

const store = useStore();

const showHeader = () => {
  store.commit("showHeader", true);
};
</script>

<style lang="stylus" scoped>
figure
  display flex
  width 100%
  justify-content flex-end
  margin 16px 0
img
  width 40px
  height 40px
.setting
  padding 10px
  background-color #1b1d29
.menu
  display none
@media (max-width: 768px)
  figure
    justify-content space-between
  .menu
    display block
</style>
