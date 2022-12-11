import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/global.css";

import firebase from "@/services/firebaseConnection";

let app;
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App).use(router).mount("#app");
  }
});
