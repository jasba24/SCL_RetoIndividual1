<template>
  <main :class="showHeader ? 'show' : 'hide'">
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
import { ref, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

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

const showHeader = computed(() => store.state.showHeader);
</script>

<style lang="stylus" scoped>
main
  display flex
  width 180px
  flex-direction column
  padding-left 20px
  padding-top 20px
  border-right 1px solid #39424e
  margin-right 50px
@media (max-width: 1200px)
  main
    margin-right 20px
@media (max-width: 768px)
  main
    position absolute
    width 220px
    height 100vh
    margin-right 0
    border none
    z-index 2
    background-color inherit
  .hide
    display none
  .show
    display flex
</style>
