<template>
  <nav class="nav">
    <ul>
      <li class="nav-item" v-for="(l, i) in links" :key="i">
        <img :src="l.icon" alt="" />
        <button>{{ l.name }}</button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Menu",

  props: ["links"],
};
</script>

<style lang="stylus">
.nav
  display flex
  height 100%
  background-color red
  &-item
    list-style none
    display flex
    & img
      width 20px
      height 20px
    & button
      border none
      background-color inherit
</style>
