<template>
  <main>
    <MenuHeader></MenuHeader>
    <Links v-bind="attrs"></Links>
  </main>
</template>

<script setup>
import Links from "@/components/Menu/MenuLinks/Links";
import MenuHeader from "@/components/Menu/MenuHeader";
import Home from "@/assets/Home.svg";
import Work from "@/assets/Work.svg";
import Profile from "@/assets/Profile.svg";
import InfoCircle from "@/assets/InfoCircle.svg";
import { ref } from "vue";

const attrs = ref({
  links: [
    {
      icon: Home,
      name: "Panel",
    },
    {
      icon: Work,
      name: "Empresas",
    },
    {
      icon: Profile,
      name: "Perfil",
    },
    {
      icon: InfoCircle,
      name: "Contacto",
    },
  ],
});
</script>

<style lang="stylus" scoped>
main
  display flex
  flex-direction column
  padding-left 20px
  padding-top 20px
  border-right 1px solid #39424e
  margin-right 50px
</style>
