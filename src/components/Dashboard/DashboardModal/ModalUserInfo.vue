<template>
  <section class="modal__container">
    <div class="modal__closeIcon">X</div>
    <h1 class="modal__title">Datos Personal</h1>
    <form class="modal__form">
      <p>URL de la imagen que deseas utilizar como avatar</p>
      <div class="input__container">
        <label>Avatar</label>
        <input v-model="avatar" type="text" />
      </div>
      <p>
        Al tener tus datos actualizados tienes más posibilidades de que las
        empresas contacten contigo
      </p>
      <div class="options__container">
        <div class="input__container" v-for="(o, i) in options" :key="i">
          <label>{{ o.name }}</label>
          <select
            class="select__container"
            :ref="
              (el) => {
                if (el) skillInputs[i] = el;
              }
            "
          >
            <option v-for="(option, i) in o.options" :key="i" :value="option">
              {{ option }}
            </option>
          </select>
        </div>
        <div class="input__container">
          <label>Pais</label>
          <input v-model="country" type="text" />
        </div>
        <div class="input__container">
          <label>Ciudad</label>
          <input v-model="city" type="text" />
        </div>
      </div>
      <p>
        Aquí podrás añadir información personal que creas relevante. Comentanos
        quién eres, que cosas te gustan, etc.
      </p>
      <div class="input__container">
        <label>Biografia</label>
        <input v-model="biography" type="text" />
      </div>
      <p>URL de tus redes sociales:</p>
      <div class="socials__container">
        <div class="input__container" v-for="(s, i) in socials" :key="i">
          <label>{{ s.name }}</label>
          <img :src="s.icon" alt="" />
          <input
            :ref="
              (el) => {
                if (el) socialInputs[i] = el;
              }
            "
            type="text"
          />
        </div>
      </div>
      <p>URL de tu portfolio personal:</p>
      <div class="input__container">
        <label>https:</label>
        <input v-model="url" type="text" />
      </div>
      <button @click.prevent="getData">Guardar</button>
    </form>
  </section>
</template>

<script setup>
import { ref } from "vue";
import linkedin from "@/assets/linkedin.svg";
import GitHub from "@/assets/GitHub.svg";
import GitLab from "@/assets/GitLab.svg";
import behance from "@/assets/behance.png";
import { useStore } from "vuex";

const store = useStore();

const socials = ref([
  {
    name: "Linkedin",
    icon: linkedin,
  },
  {
    name: "GitHub",
    icon: GitHub,
  },
  {
    name: "GitLab",
    icon: GitLab,
  },
  {
    name: "Behance",
    icon: behance,
  },
]);

const options = ref([
  {
    name: "Especialidad",
    options: [
      "Sis. engineering",
      "MKT expert",
      "Data scientist",
      "AI/ML engineer",
      "Web developer",
      "Designer",
    ],
  },
  {
    name: "Nivel",
    options: ["Junior", "Especialista", "Sabio"],
  },
]);

const avatar = ref(null);
const skillInputs = ref([]);
const country = ref(null);
const city = ref(null);
const biography = ref(null);
const socialInputs = ref([]);
const url = ref(null);
const socialMedia = ref([]);
const skills = ref([]);

const userData = ref({
  avatar,
  country,
  city,
  biography,
  url,
  socialMedia,
  skills,
});

const getData = () => {
  socialInputs.value.forEach(({ value }) => {
    socialMedia.value.push(value);
  });
  skillInputs.value.forEach(({ value }) => {
    skills.value.push(value);
  });
  store.commit("setUserInfo", userData.value);
  console.log(store.state.userInfo);
};
</script>

<style lang="stylus" scoped>
.modal__container
  height 90vh
  overflow-y scroll
  display grid
  gap 30px
  grid-template-columns 1fr
  & h1
    margin 0
  & p
    font-size 16px
    font-weight 300
    margin 0
.modal__form
  display grid
  gap 30px
  grid-template-columns 1fr
.options__container
  display grid
  grid-template-columns 1fr 1fr
  gap 30px 10px
  & input
    width calc(100% - 16px)
.input__container
  position relative
  width 100%
.select__container
  border 2px solid #39424e
  border-radius 5px
  background-color #232730
  width 100%
  height 40px
  font-size 16px
  padding 0 10px
  outline none
  color #fff
  &:focus
    border-color #569b51
.socials__container
  display grid
  grid-template-columns 1fr 1fr
  gap 30px 10px
  & input
    width calc(100% - 16px)
  & img
    height 30px
    position absolute
    top 15px
    left 10px
</style>
