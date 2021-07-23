<template>
  <section class="stack__container">
    <div @click="showModalStack" class="edit__icon"></div>
    <p>Stack definido por el usuario</p>
    <div v-for="(stack, i) in stackItems" :key="i">
      <a :href="stackUrl(stack)" target="_blank" rel="noreferrer">
        <img :src="url + stack + '.svg'" :alt="'logo ' + stack" />
      </a>
    </div>
    <div v-show="showModal" class="modal">
      <ModalStack></ModalStack>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from "vue";
import ModalStack from "@/components/Dashboard/DashboardModal/ModalStack";
import { useStore } from "vuex";

const store = useStore();

const url = computed(() => "stacklogos/logo-");

const showModalStack = () => {
  store.commit("showModalStack", true);
};

const stackUrl = (stack) => {
  const urls = {
    ajax: "https://en.wikipedia.org/wiki/Ajax_(programming)",
    android: "https://www.android.com/",
    angular: "https://angular.io/",
    aws: "https://aws.amazon.com/",
    azure: "https://azure.microsoft.com/es-es/",
    bitbucket: "https://bitbucket.org/product/",
    cassandradb: "https://cassandra.apache.org/",
    couchdb: "https://couchdb.apache.org/",
    csharp: "https://docs.microsoft.com/en-us/dotnet/csharp/",
    css3: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    docker: "https://www.docker.com/",
    figma: "https://figma.com/",
    firebase: "https://firebase.google.com/",
    flutter: "https://flutter.dev/",
    github: "https://github.com",
    golang: "https://golang.org/",
    googlecloud: "https://cloud.google.com/",
    graphql: "https://graphql.org/",
    html5: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    ios: "https://www.apple.com/ios/",
    java: "https://java.com/es",
    javascript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    jenkins: "https://www.jenkins.io/",
    jetpack: "https://developer.android.com/jetpack/compose",
    kotlin: "https://developer.android.com/kotlin",
    kubernetes: "https://kubernetes.io/",
    mariadb: "https://mariadb.org/",
    memcache: "https://memcached.org/",
    mongodb: "https://www.mongodb.com/",
    mysql: "https://dev.mysql.com/",
    nightwatch: "https://nightwatchjs.org/",
    nodejs: "https://nodejs.org/es/",
    php: "https://php.net/",
    postgresql: "https://www.postgresql.org/",
    postman: "https://www.getpostman.com/",
    python: "https://www.python.org/",
    react: "https://reactjs.org/",
    reactnative: "https://reactnative.dev/",
    redis: "https://redis.io/",
    rust: "https://www.rust-lang.org/",
    rxjava: "http://reactivex.io/",
    sketch: "https://www.sketch.com/",
    sonarqube: "https://www.sonarqube.org/",
    spring: "https://spring.io/",
    swift: "https://developer.apple.com/swift/",
    typescript: "https://www.typescriptlang.org/",
    visualstudio: "https://code.visualstudio.com/",
    vue: "https://vuejs.org",
    xamarin: "https://xamarin.com/",
    zeplin: "https://zeplin.io/",
  };
  return urls[stack];
};

const showModal = computed(() => store.state.showModalStack);

const stackItems = ref([
  "ajax",
  "android",
  "angular",
  "aws",
  "azure",
  "bitbucket",
  "cassandradb",
  "couchdb",
  "csharp",
  "css3",
  "docker",
  "figma",
  "firebase",
  "flutter",
  "github",
  "golang",
  "googlecloud",
  "graphql",
  "html5",
  "ios",
  "java",
  "javascript",
  "jenkins",
  "jetpack",
  "kotlin",
  "kubernetes",
  "mariadb",
  "memcache",
  "mongodb",
  "mysql",
  "nightwatch",
  "nodejs",
  "php",
  "postgresql",
  "postman",
  "python",
  "react",
  "reactnative",
  "redis",
  "rust",
  "rxjava",
  "sketch",
  "sonarqube",
  "spring",
  "swift",
  "typescript",
  "visualstudio",
  "vue",
  "xamarin",
  "zeplin",
]);
</script>

<style lang="stylus" scoped>
.stack__container
	position relative
</style>
