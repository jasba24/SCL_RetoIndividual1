<template>
  <section class="description__container">
    <div @click="showModal" class="edit__icon"></div>
    <h1>JohnD</h1>
    <p>{{ biography }}</p>
    <div class="location__container">
      <img :src="Location" alt="location icon" />
      <span>{{ location }}</span>
      <a
        v-for="(s, i) in social"
        :key="i"
        :href="s.url"
        target="_blank"
        rel="noreferrer"
      >
        <img class="social_icon" :src="s.img" alt="icon" />
      </a>
    </div>
    <hr />
    <h2>{{ jobTitle }}</h2>
    <div v-show="showModalUser" class="modal">
      <ModalUserInfo></ModalUserInfo>
    </div>
  </section>
</template>

<script setup>
import Location from "@/assets/Location.svg";
import GitHub from "@/assets/GitHub.svg";
import linkedin from "@/assets/linkedin.svg";
import GitLab from "@/assets/GitLab.svg";
import behance from "@/assets/behance.png";
import web from "@/assets/web.png";
import ModalUserInfo from "@/components/Dashboard/DashboardModal/ModalUserInfo";
import { computed, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const showModalUser = computed(() => store.state.showModalUser);

const showModal = () => {
  store.commit("showModalUser", true);
};

const location = computed(() => {
  const country = ref(store.state.userInfo.country ?? `España`);
  const city = ref(store.state.userInfo.city ?? `Palafolis`);
  return `${city.value}, ${country.value}`;
});
const biography = computed(
  () =>
    store.state.biography ??
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan
      urna nec ipsum tempus, vitae consequat velit rhoncus. Nunc quis dolor
      urna. Curabitur in orci congue, pellentesque massa ullamcorper, volutpat
      odio. Proin eget nulla odio.`
);

const jobTitle = computed(() => {
  let specialty = "";
  let level = "";
  if (
    store.state.userInfo.skills === null ||
    store.state.userInfo.skills === undefined
  ) {
    specialty = "FullStack";
    level = "Senior";
  } else {
    specialty = store.state.userInfo.skills[0];
    level = store.state.userInfo.skills[1];
  }
  return `${specialty} - ${level}`;
});

const social = computed(() => {
  const data = [];
  const socials = store.state.userInfo.socialMedia;
  if (socials) {
    if (socials[0].length !== 0) {
      const linkedinObj = {
        url: `https://www.linkedin.com/in/${socials[0]}`,
        img: linkedin,
      };
      data.push(linkedinObj);
    }
    if (socials[1].length !== 0) {
      const githubObj = {
        url: `https://www.github.com/${socials[1]}`,
        img: GitHub,
      };
      data.push(githubObj);
    }
    if (socials[2].length !== 0) {
      const gitlabObj = {
        url: `https://www.gitlab.com/${socials[2]}`,
        img: GitLab,
      };
      data.push(gitlabObj);
    }
    if (socials[3].length !== 0) {
      const behanceObj = {
        url: `https://www.behance.net/${socials[3]}`,
        img: behance,
      };
      data.push(behanceObj);
    }
    if (store.state.userInfo.url) {
      const urlObj = {
        url: store.state.userInfo.url,
        img: web,
      };
      data.push(urlObj);
    }
  }
  return data;
});
</script>

<style lang="stylus" scoped>
.description__container
  display flex
  width 100%
  flex-direction column
  justify-content center
  align-items center
  position relative
  & h1
    margin-top 90px
    margin-bottom 0
  & h3
    font-weight normal
    margin 0
  & p
    width 70%
    text-align center
    font-weight 300
  & img
    width 25px
    height 25px
  & .location__container
    display flex
    & *
      margin-left 10px
    & span
      font-size 25px
    & .social_icon
      cursor pointer
  & hr
    width 50%
    margin-top 20px
</style>
