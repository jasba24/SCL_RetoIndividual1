<template>
  <main>
    <DashboardHeader></DashboardHeader>
    <Profile></Profile>
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
  height 100vh
  margin-right 50px
</style>
