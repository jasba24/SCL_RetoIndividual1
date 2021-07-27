<template>
  <main>
    <DashboardHeader></DashboardHeader>
    <div class="profile__container"><Profile></Profile></div>
  </main>
</template>

<script setup>
import DashboardHeader from "@/components/Dashboard/DasboardHeader";
import Profile from "@/components/Dashboard/DashboardProfile/Profile";
import { computed, ref } from "vue";

const value = ref(false);

const bc = computed(() => {
  return value.value ? "#2E353F" : "transparent";
});

const border = computed(() => {
  return value.value ? "1px solid #39424E" : "none";
});
</script>

<style lang="stylus" scoped>
main
  width calc(100% - 50px)
  margin-right 50px
.profile__container
  background-color v-bind(bc)
  border v-bind(border)
@media (max-width: 1200px)
  main
    margin-right 20px
@media (max-width: 768px)
  main
    position relative
    margin-left 20px
</style>
