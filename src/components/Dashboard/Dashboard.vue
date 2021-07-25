<template>
  <main>
    <DashboardHeader></DashboardHeader>
    <div class="profile__container"><Profile></Profile></div>
  </main>
</template>

<script setup>
import DashboardHeader from "@/components/Dashboard/DasboardHeader";
import Profile from "@/components/Dashboard/DashboardProfile/Profile";
</script>

<style lang="stylus" scoped>
main
  width calc(100% - 50px)
  margin-right 50px
.profile__container
  background-color #2E353F
  border 1px solid #39424E
@media (max-width: 1200px)
  main
    margin-right 20px
@media (max-width: 768px)
  main
    position relative
    margin-left 20px
</style>
