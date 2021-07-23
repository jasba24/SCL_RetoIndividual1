<template>
  <section class="modal__container">
    <div @click="closeModal" class="modal__closeIcon">X</div>
    <h1 class="modal__title">Stack</h1>
    <p class="modal__content">
      Aquí podrás definir tu stack de hard skills con las habilidades que
      utilizas frecuentemente.
    </p>
    <form class="modal__form">
      <input type="text" />
      <button>Guardar</button>
    </form>
  </section>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();

const closeModal = () => {
  store.commit("showModalStack", false);
};
</script>

<style lang="stylus" scoped>
.modal__content
  font-weight 300
</style>
