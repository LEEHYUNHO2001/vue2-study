import Vue from "vue";
import VueRouter, { NavigationGuardNext, Route } from "vue-router";
import { ItemView, UserView } from "../views";
import createListView from "../views/CreateListView";
import bus from "../utils/bus";
import store from "../store/index.js";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/news",
    },
    {
      path: "/news",
      name: "news",
      component: createListView("NewsView"),
      async beforeEnter(
        routeTo: Route,
        routeFrom: Route,
        next: NavigationGuardNext<Vue>
      ) {
        bus.$emit("on:progress");

        // 전역상태관리 안써보기!
        // 라우터에서 데이터 요청 지시 내리기 x
        // try {
        //   await store.dispatch("FETCH_LIST", routeTo.name);
        //   next();
        // } catch (err) {
        //   new Error("failed to fetch news items");
        //   // next("/error");
        // }

        next();
      },
    },
    {
      path: "/ask",
      name: "ask",
      component: createListView("AskView"),
      async beforeEnter(
        routeTo: Route,
        routeFrom: Route,
        next: NavigationGuardNext<Vue>
      ) {
        bus.$emit("on:progress");
        try {
          await store.dispatch("FETCH_LIST", routeTo.name);
          next();
        } catch (err) {
          new Error("failed to fetch news items");
        }
      },
    },
    {
      path: "/jobs",
      name: "jobs",
      component: createListView("JobsView"),
      async beforeEnter(
        routeTo: Route,
        routeFrom: Route,
        next: NavigationGuardNext<Vue>
      ) {
        bus.$emit("on:progress");
        try {
          await store.dispatch("FETCH_LIST", routeTo.name);
          next();
        } catch (err) {
          new Error("failed to fetch news items");
        }
      },
    },
    {
      path: "/item/:id",
      component: ItemView,
      async beforeEnter(
        routeTo: Route,
        routeFrom: Route,
        next: NavigationGuardNext<Vue>
      ) {
        bus.$emit("on:progress");
        const itemId = routeTo.params.id;
        try {
          await store.dispatch("FETCH_ITEM", itemId);
          next();
        } catch (err) {
          new Error("failed to fetch item details");
        }
      },
    },
    {
      path: "/user/:id",
      component: UserView,
      async beforeEnter(
        routeTo: Route,
        routeFrom: Route,
        next: NavigationGuardNext<Vue>
      ) {
        bus.$emit("on:progress");
        const itemId = routeTo.params.id;
        try {
          await store.dispatch("FETCH_USER", itemId);
          next();
        } catch (err) {
          new Error("failed to fetch user profile");
        }
      },
    },
  ],
});
