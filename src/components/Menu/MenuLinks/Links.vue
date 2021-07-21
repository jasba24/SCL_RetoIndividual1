<template>
  <nav class="nav">
    <li class="nav-item" v-for="(l, i) in links" :key="i">
      <img :src="l.icon" alt="" />
      <button>{{ l.name }}</button>
    </li>
  </nav>
</template>

<script>
export default {
  props: ["links"],
};
</script>

<style lang="stylus" scoped>
.nav
  display flex
  flex-direction column
  &-item
    list-style none
    display flex
    & button
      border none
      background-color inherit
      color white
      &:hover
        color #569b51

img
  width 50px
  height 50px
</style>
