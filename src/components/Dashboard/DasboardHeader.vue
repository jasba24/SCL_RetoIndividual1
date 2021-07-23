<template>
  <figure>
    <img :src="Setting" alt="" />
  </figure>
</template>

<script setup>
import Setting from "@/assets/Setting.svg";
</script>

<style lang="stylus" scoped>
figure
  display flex
  justify-content flex-end
  margin-right 0
img
  width 40px
  height 40px
  padding 10px
  background-color #1b1d29
</style>
