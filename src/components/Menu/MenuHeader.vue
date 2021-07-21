<template>
  <div class="img__container">
    <img class="img__logo" :src="BrandLogo" alt="" />
    <img class="img__name" :src="BrandName" alt="" />
  </div>
</template>

<script setup>
import BrandLogo from "@/assets/BrandLogo.svg";
import BrandName from "@/assets/BrandName.svg";
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
  margin-bottom 50px
</style>
