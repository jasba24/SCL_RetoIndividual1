<template>
  <section class="stack__container">
    <div @click="showModalStack" class="edit__icon"></div>
    <p>Stack definido por el usuario</p>
    <div class="stactLogos__container">
      <div v-for="(stack, i) in stackList" :key="i">
        <a :href="stack.url" target="_blank" rel="noreferrer">
          <img
            :src="$filters.stackItems(stack.name)"
            :alt="'logo ' + stack.name"
          />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const stackList = ref([
  {
    name: "golang",
    url: "https://golang.org/",
  },
  {
    name: "java",
    url: "https://java.com/es",
  },
  {
    name: "javascript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "nodejs",
    url: "https://nodejs.org/es/",
  },
  {
    name: "python",
    url: "https://www.python.org/",
  },
  {
    name: "rust",
    url: "https://www.rust-lang.org/",
  },
]);
</script>

<style lang="stylus" scoped>
.stack__container
  position relative
  border 1px solid #39424E
  border-radius 5px
  width 90%
  margin 0 auto
  & p
    position absolute
    top: -10px;
    left: 10px;
    margin 0
    padding 0 10px
    background-color #2E353F
.stactLogos__container
  display grid
  justify-content center
  align-items center
  grid-template-columns: repeat(6, 100px);
  gap 5px
  padding 26px 100px
  & div
    display flex
    justify-content center
    align-items center
    background-color #161821
    margin 5px
    border-radius 5px
  & img
    height 80px
</style>
