import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/logistics-requests",
      name: "Logistic Requests",
      component: () => import("./views/LogisticRequests.vue")
    },
    {
      path: "/logistics-requests/new",
      name: "New Logistics Request",
      component: () => import("./views/NewLogisticRequest.vue")
    }
  ]
});
