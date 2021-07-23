<template>
  <main>
    <DashboardHeader></DashboardHeader>
    <div class="profile__container"><Profile></Profile></div>
    <JobSection></JobSection>
    <Skills></Skills>
  </main>
</template>

<script setup>
import DashboardHeader from "@/components/Dashboard/DasboardHeader";
import Profile from "@/components/Dashboard/DashboardProfile/Profile";
import JobSection from "@/components/Dashboard/DashboardJobSection/JobSection";
import Skills from "@/components/Dashboard/DashboardSkills.vue/Skills";
</script>

<style lang="stylus" scoped>
main
  margin-right 50px
.profile__container
  background-color #2E353F
  border 1px solid #39424E
</style>
