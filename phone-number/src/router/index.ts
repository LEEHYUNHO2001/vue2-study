import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import axios from "axios";
import { apiEndpoint } from "@/constants";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { authRequired: true },
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/LoginView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async function (to, from, next) {
  if (to.matched.some((routeInfo) => routeInfo.meta.authRequired)) {
    try {
      const accessToken = router.app.$store.getters.getAccessToken;
      const authHeader = { Authorization: `Bearer ${accessToken}` };
      const res = await axios.get(`${apiEndpoint}/api/Login/GetList`, {
        headers: authHeader,
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  } else {
    next();
  }
});

export default router;
