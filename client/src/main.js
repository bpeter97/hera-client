import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import BootstrapVue from "bootstrap-vue/dist/bootstrap-vue.esm";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/css/dashboard.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// socket io
import * as io from "socket.io-client";
import VueSocketIO from "vue-socket.io";

// Libriaries
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSpinner,
  faHourglassStart,
  faCheck,
  faBars,
  faMap,
  faTasks,
  faCalculator,
  faExclamationTriangle,
  faSignOutAlt,
  faHome
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import CoolLightBox from "vue-cool-lightbox";
import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";

Vue.use(
  new VueSocketIO({
    debug: true,
    connection: io("https://hera-tasks.herokuapp.com/")
    // connection: io("http://localhost:5000/")
  })
);
Vue.use(BootstrapVue);
Vue.use(CoolLightBox);
Vue.config.productionTip = false;

library.add(faSpinner);
library.add(faHome);
library.add(faHourglassStart);
library.add(faCheck);
library.add(faBars);
library.add(faTasks);
library.add(faMap);
library.add(faCalculator);
library.add(faExclamationTriangle);
library.add(faSignOutAlt);
Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
