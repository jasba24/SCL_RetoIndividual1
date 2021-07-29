<template>
  <section class="card__preview">
    <div class="card__content">
      <h1>@edgar.gago</h1>
      <p>Web dev | Creator ||</p>
    </div>
    <img class="logo" :src="cardPreview" alt="" />
    <img class="logo45" :src="logo45" alt="" srcset="" />
  </section>
</template>

<script setup>
import cardPreview from "@/assets/cardPreview.png";
import { defineProps } from "vue";

defineProps({
  logo45: String,
});
</script>

<style lang="stylus" scoped>
.card__preview
  position relative
  display flex
  flex-direction column
  width 300px
  height 350px
  margin-right 100px
  background-color #232730
  border 10px solid #6AB972
  box-shadow 0px 0px 250px 0px #93B990
  filter: drop-shadow(0px 0px 250px #93B990);
  & div
    margin-left 10px
  & p
    font-weight bold
.logo
  object-fit cover
.logo45
  position absolute
  width 150px
  right 0
  bottom 0
</style>
