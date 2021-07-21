<template>
  <main>
    <MenuHeader></MenuHeader>
    <Links v-bind="attrs"></Links>
  </main>
</template>

<script setup>
import Links from "@/components/Menu/MenuLinks/Links";
import MenuHeader from "@/components/Menu/MenuHeader";
import logo from "@/assets/logo.png";
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

<style lang="stylus" scoped>
main
  display flex
  flex-direction column
  padding-left 40px
  padding-top 40px
  border-right 1px solid #39424e
  margin-right 50px
</style>
