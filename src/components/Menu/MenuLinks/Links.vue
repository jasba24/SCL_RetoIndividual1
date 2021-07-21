<template>
  <nav class="nav">
    <li class="nav-item" v-for="(l, i) in links" :key="i">
      <img :src="l.icon" alt="" />
      <button>{{ l.name }}</button>
    </li>
  </nav>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  links: Array,
});
</script>

<style lang="stylus" scoped>
.nav
  display flex
  flex-direction column
  &-item
    list-style none
    display flex
    margin-top 20px
    & button
      border none
      background-color inherit
      color #CDCDCD
      font-family: Montserrat;
      font-size: 25px;
      font-style: normal;
      font-weight: 400;
  &-item:nth-child(3) button
    color #569B51
img
  width 36px
  height 36px
</style>
