import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todoItems: [
      {
        id: 1,
        text: "Vue2 기초 공부",
        checked: false,
      },
      {
        id: 2,
        text: "Vue2 + Typescript 공부",
        checked: false,
      },
    ],
  },
});
