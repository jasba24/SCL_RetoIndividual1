<template>
  <img :src="logo" alt="" />
  <main>
    <Profile></Profile>
    <JobSection></JobSection>
    <Skills></Skills>
  </main>
</template>

<script setup>
import logo from "@/assets/logo.png";
import Profile from "@/components/Profile";
import JobSection from "@/components/JobSection";
import Skills from "@/components/Skills";
</script>

<style lang="stylus" scoped>
div
	height 100vh
</style>
