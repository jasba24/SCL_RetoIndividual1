<template>
  <section class="modal__container">
    <h1 class="modal__title">Imagen de portada</h1>
    <form class="modal__form">
      <input ref="url" type="text" placeholder="URL de imagen" />
      <button @click.prevent="toogleModal">Guardar</button>
    </form>
  </section>
</template>

<script setup>
import { useStore } from "vuex";
import { ref } from "vue";

const store = useStore();

const url = ref(null);

const toogleModal = () => {
  store.commit("setProfileBgUrl", url.value.value);
  store.commit("toogleModal");
};
</script>

<style lang="stylus" scoped>
primary-color = #232730
secondary-color = #569b51
.modal__container
  background-color primary-color
  color white
  width 500px
  height 200px
  padding 24px
.modal__title
  margin 16px 0 20px
  font-weight normal
.modal__form
  & input
    border-color internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133))
    border 1px solid #39424E
    border-width 2px
    border-radius 5px
    background-color primary-color
    width 100%
    height 50px
    font-size 16px
    &:focus
      border-color secondary-color
      outline 0
  & button
    margin-top 20px
    width 100%
    background-color secondary-color
    color white
    height 40px
    border 0
    border-radius 5px
    font-size 16px
    text-transform uppercase
    font-weight bold
    cursor pointer
  & label
    position absolute
</style>
