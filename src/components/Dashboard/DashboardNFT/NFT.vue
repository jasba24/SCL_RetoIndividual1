<template>
  <slot></slot>
  <section ref="nft" class="nft__container">
    <NFTCard></NFTCard>
  </section>
</template>

<script setup>
import NFTCard from "@/components/Dashboard/DashboardNFT/NFTCard";
import { ref } from "vue";

const nft = ref(null);
</script>

<style lang="stylus" scoped>
.nft__container
  display flex
  justify-content center
  background transparent
</style>
