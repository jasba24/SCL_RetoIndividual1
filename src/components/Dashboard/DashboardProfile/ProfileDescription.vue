<template>
  <section class="description__container">
    <div class="edit__icon"></div>
    <h1>JohnD</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan
      urna nec ipsum tempus, vitae consequat velit rhoncus. Nunc quis dolor
      urna. Curabitur in orci congue, pellentesque massa ullamcorper, volutpat
      odio. Proin eget nulla odio.
    </p>
    <div class="location__container">
      <img :src="Location" alt="" />
      <span>Palafolis, España</span>
      <img class="social_icon" :src="GitHub" alt="" />
      <img :src="linkedin" alt="" />
    </div>
    <hr />
    <h2>FullStack Senior</h2>
  </section>
</template>

<script setup>
import Location from "@/assets/Location.svg";
import GitHub from "@/assets/GitHub.svg";
import linkedin from "@/assets/linkedin.svg";
import edit from "@/assets/edit.svg";
import { computed } from "vue";

const editURL = computed(() => `url(${edit})`);
</script>

<style lang="stylus" scoped>
.description__container
  display flex
  flex-direction column
  justify-content center
  align-items center
  position relative
  & h1
    margin-top 90px
    margin-bottom 0
  & h3
    font-weight normal
    margin 0
  & p
    width 700px
    text-align center
    font-weight 300
  & img
    width 25px
    height 25px
  & .location__container
    display flex
    & *
      margin-left 10px
    & span
      font-size 25px
    & .social_icon
      cursor pointer
  & hr
    width 50%
    margin-top 20px
.edit__icon
  width 20px
  height 20px
  position absolute
  right 10px
  top 10px
  background-image v-bind(editURL)
  background-size 20px
  background-repeat no-repeat
  cursor pointer
</style>
