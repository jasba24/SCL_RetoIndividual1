<template>
  <main class="card__container">
    <CardPreview :logo45="logo45"></CardPreview>
    <CardDetail :logo45="logo45"></CardDetail>
  </main>
</template>

<script setup>
import logo45 from "@/assets/logo45.svg";
import CardPreview from "@/components/Dashboard/DashboardNFT/CardPreview";
import CardDetail from "@/components/Dashboard/DashboardNFT/CardDetail";
</script>

<style lang="stylus" scoped>
.card__container
  display flex
  justify-content space-between
  align-items center
  background-color transparent
</style>
