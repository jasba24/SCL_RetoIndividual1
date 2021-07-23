<template>
  <section class="modal__container">
    <div @click="closeModal" class="modal__closeIcon">X</div>
    <h1 class="modal__title">Imagen de portada</h1>
    <form class="modal__form">
      <label>URL de imagen</label>
      <input ref="url" type="text" />
      <button @click.prevent="toogleModal">Guardar</button>
    </form>
  </section>
</template>

<script setup>
import { useStore } from "vuex";
import { ref } from "vue";

const store = useStore();

const url = ref(null);

const closeModal = () => {
  store.commit("showModal", false);
};

const toogleModal = () => {
  store.commit("setProfileBgUrl", url.value.value);
  store.commit("showModal");
};
</script>

<style lang="stylus">
primary-color = #232730
secondary-color = #569b51
.modal__container
  position relative
  background-color primary-color
  color white
  width 500px
  padding 24px
.modal__title
  margin 16px 0 20px
.modal__form
  position relative
  & input
    border 1px solid #39424E
    border-width 2px
    border-radius 5px
    background-color primary-color
    width 98%
    height 50px
    font-size 16px
    padding-left 10px
    color white
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
    background-color #232730
    color #B5B5B5
    top -10px
    left 10px
    padding 0 10px
.modal__closeIcon
  font-size 20px
  position absolute
  right 30px
  top 20px
  cursor pointer
</style>
