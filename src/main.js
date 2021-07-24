import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import stackItems from "./filters";

const app = createApp(App);
app.use(store);
app.config.globalProperties.$filters = {
  stackItems,
};
app.mount("#app");
