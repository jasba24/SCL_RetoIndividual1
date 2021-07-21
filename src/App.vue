<template>
  <Menu></Menu>
  <Dashboard></Dashboard>
</template>

<script setup>
import Dashboard from "@/components/Dashboard/Dashboard";
import Menu from "@/components/Menu/Menu";
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50
  background-color #232730
  display grid
  grid-template-columns 250px 1fr
body
  margin 0
</style>
