<template>
  <section class="modal__container">
    <div @click="closeModal" class="modal__closeIcon">X</div>
    <h1 class="modal__title">Imagen de portada</h1>
    <form class="modal__form">
      <div class="input__link">
        <label>URL de imagen</label>
        <input ref="url" type="text" />
      </div>
      <button @click.prevent="toogleModal">Guardar</button>
      <div class="form__options">
        <div></div>
        <p>o</p>
        <div></div>
      </div>
      <div class="input__img">
        <label class="input__file--description">Sube una imagen</label>
        <label class="input__file--label"
          >{{ chooseName }}
          <input
            ref="file"
            @change="getFileUrl"
            class="input__file"
            type="file"
            accept=".svg,.png,.jpg.jpeg,.gif"
        /></label>
      </div>
    </form>
  </section>
</template>

<script setup>
import { useStore } from "vuex";
import { ref } from "vue";

const store = useStore();

const url = ref(null);

const file = ref(null);

let fileUrl = ref("");

let chooseName = ref("Escoge una imagen");

const getFileUrl = () => {
  const objectURL = URL.createObjectURL(file.value.files[0]);

  console.log(file.value.files.length === 0);

  chooseName.value =
    file.value.files.length === 0 ? "Escoge una imagen" : "Imagen Escogida";

  return objectURL ? (fileUrl = objectURL) : (fileUrl = url.value.value);
};

const closeModal = () => {
  store.commit("showModal", false);
};

const toogleModal = () => {
  store.commit("setProfileBgUrl", fileUrl);
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
  margin-bottom 10px
  & input
    border 1px solid #39424E
    border-width 2px
    border-radius 5px
    background-color primary-color
    width 97%
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
  & .form__options
    display flex
    justify-content center
    align-items center
    & div
      border 1px solid #39424E
      width 50%
      margin-top 20px
      margin-bottom 20px
    & p
      font-size 30px
      margin 0 15px
      color #b5b5b5
label
  position absolute
  background-color #232730
  color #B5B5B5
  padding 0 10px
  top -10px
  left 10px
.input__link, .input__img
  position relative
.input__img
  height 50px
.input__file
  display none
.input__file--description
  z-index 2
.input__file--label
  height 40px
  width 477px
  padding-top 10px
  border 2px solid #39424E
  border-radius 5px
  top 0
  left 0
  color white
  font-size 18px
  font-weight bold
  cursor pointer
  text-align center
</style>
