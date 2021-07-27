<template>
  <section class="card__details">
    <div class="logo__container">
      <img :src="card" alt="" />
      <div class="logo__content">
        <h1>@edgar.gago</h1>
        <h1>Web dev | Creator ||</h1>
        <p>Abierto a oportunidades</p>
      </div>
    </div>
    <div class="card__info">
      <h1>
        <strong>1º</strong> <small>España, rango Creator ||</small> <br />
        <strong>157</strong> <small>General Europa</small>
      </h1>
      <img class="chart" :src="chart" alt="" srcset="" />
    </div>
    <div id="decoration"></div>
    <div class="card__score">
      <div class="score__details">
        <h1>Participación de @edgar.gago</h1>
        <ul>
          <li v-for="(d, i) in details" :key="i">
            <span>{{ d.name }}</span> <span>{{ d.score }}</span>
          </li>
        </ul>
      </div>
      <div class="score__position">
        <h1>Posición Global</h1>
        <p><img :src="logo45" alt="" srcset="" /></p>
      </div>
    </div>
  </section>
</template>

<script setup>
import card from "@/assets/card.png";
import chart from "@/assets/chart.png";
import { ref, defineProps } from "vue";

defineProps({
  logo45: String,
});

const details = ref([
  {
    name: "Hackatones",
    score: 12,
  },
  {
    name: "Challenges",
    score: 56,
  },
  {
    name: "Proyectos OS",
    score: 3,
  },
  {
    name: "Emblemas",
    score: 78,
  },
]);
</script>

<style lang="stylus" scoped>
.card__details
  display grid
  width 350px
  background-color #232730
  border 10px solid #6AB972
  box-shadow 0px 0px 250px 0px #93B990
  filter: drop-shadow(0px 0px 250px #93B990);
.logo__container
  display flex
  & p
    font-weight bold
// img
//     width 90px
.card__info
  display flex
  flex-direction column
  & h1
    margin-left 20px
    font-weight bold
    & strong
      font-size 20px
  & img
    margin 0 auto
.card__score
  display grid
  grid-template-columns 65% 35%
  margin-top 10px
  & .score__details
    padding-left 20px
  & .score__position
    text-align right
    margin-right 5px
    & h1
      margin-bottom 0
    & p
      color: #5aa25a;
      font-size 90px
      font-weight 800
      margin 0
    & img
      width 100px
  & h1
    font-size 15px
    margin-bottom 7px
  & ul
    padding 0
  & li
    display flex
    justify-content space-between
    margin-top 5px
    list-style none
.chart
  width initial
  margin-bottom 20px
#decoration
  border-top 1px solid #FFFFFF
  margin 0 auto
  margin-top 20px
  width 95%
</style>
