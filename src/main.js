import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import { auth } from "./includes/firebase.js";
import progressBar from "./includes/progressBar.js";
import VeeValidatePlugin from "./includes/validation.js";

import "./index.css";
import "./main.css";
import "nprogress/nprogress.css";

import VueAwesomePaginate from "vue-awesome-paginate";
import "vue-awesome-paginate/dist/style.css";

progressBar(router);

let app;

auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App);

    app.use(createPinia());
    app.use(router);
    app.use(VeeValidatePlugin);
    app.use(VueAwesomePaginate);

    app.mount("#app");
  }
});
