<template>
  <Menu></Menu>
  <Dashboard></Dashboard>
</template>

<script setup>
import Dashboard from "@/components/Dashboard/Dashboard";
import Menu from "@/components/Menu/Menu";
import edit from "@/assets/edit.svg";
import { computed } from "vue";
const editURL = computed(() => `url(${edit})`);
</script>

<style lang="stylus">
primary-color = #232730
#app
  font-family Montserrat
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  background-color primary-color
  color white
  display grid
  grid-template-columns 250px 1fr
body
  margin 0
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
.modal
  background-color rgba(0, 0, 0, 0.8)
  display flex
  justify-content center
  align-items center
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index 10
</style>
