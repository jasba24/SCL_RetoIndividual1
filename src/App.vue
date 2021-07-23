<template>
  <Menu></Menu>
  <Dashboard></Dashboard>
</template>

<script setup>
import Dashboard from "@/components/Dashboard/Dashboard";
import Menu from "@/components/Menu/Menu";
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
</style>
