<template>
  <Menu v-bind="attrs"></Menu>
  <Dashboard></Dashboard>
</template>

<script setup>
import Dashboard from "@/components/Dashboard";
import Menu from "./components/Menu.vue";
import logo from "./assets/logo.png";
import { ref } from "vue";

const attrs = ref({
  links: [
    {
      icon: logo,
      name: "Panel",
    },
    {
      icon: logo,
      name: "Empresas",
    },
    {
      icon: logo,
      name: "Perfil",
    },
    {
      icon: logo,
      name: "Contacto",
    },
  ],
});
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50
  display grid
  grid-template-columns 300px 1fr
  background-color blue
body
  margin 0
</style>
