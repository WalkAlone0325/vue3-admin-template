import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "normalize.css/normalize.css";
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
import "@/styles/index.scss";
import "@/permission";
import icon from "@/icons";

const app = createApp(App);
icon(app);

app
  .use(ElementPlus)
  .use(store)
  .use(router)
  .mount("#app");
