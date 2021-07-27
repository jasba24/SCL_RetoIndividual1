<template>
  <section class="nft__container">
    <NFTCard></NFTCard>
  </section>
</template>

<script setup>
import NFTCard from "@/components/Dashboard/DashboardNFT/NFTCard";
</script>

<style lang="stylus" scoped>
.nft__container
  display flex
  justify-content center
  background transparent
</style>
