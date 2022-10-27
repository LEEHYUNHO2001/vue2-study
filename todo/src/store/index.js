import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

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
    users: [],
  },
  mutations: {
    SET_USERS(state, users) {
      state.users = users;
    },
    ADD_TODO_ITEM(state, value) {
      const newId =
        state.todoItems.length > 0
          ? state.todoItems[state.todoItems.length - 1].id + 1
          : 0;

      state.todoItems.push({
        id: newId,
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
  actions: {
    async getUsers({ commit }) {
      // jsonplaceholder API
      const url = "https://jsonplaceholder.typicode.com/users";
      try {
        const res = await axios.get(url);
        commit("SET_USERS", res.data);
      } catch (err) {
        console.log(err);
      }
    },
    addTodoItem({ commit }, value) {
      // 보통 axios와 같은 비동기 처리를 하게 됨
      setTimeout(() => {
        commit("ADD_TODO_ITEM", value);
      }, 500);
    },
    toggleTodoCheck({ commit }, payload) {
      setTimeout(() => {
        commit("TOGGLE_TODO_CHECK", payload);
      }, 500);
    },
    deleteTodo({ commit }, todoItemId) {
      setTimeout(() => {
        commit("DELETE_TODO", todoItemId);
      }, 500);
    },
  },
});
