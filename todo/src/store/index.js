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
  mutations: {
    ADD_TODO_ITEM(state, value) {
      state.todoItems.push({
        id: state.todoItems[state.todoItems.length - 1].id + 1,
        text: value,
        checked: false,
      });
    },
    TOGGLE_TODO_CHECK(state, { id, checked }) {
      const index = state.todoItems.findIndex((todoItem) => todoItem.id === id);
      state.todoItems[index].checked = checked;
    },
    DELETE_TODO(state, todoItemId) {
      state.todoItems = state.todoItems.filter(
        (todoItem) => todoItem.id !== todoItemId
      );
    },
  },
});
