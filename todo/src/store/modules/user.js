import axios from "axios";

export default {
  namespaced: true,
  state: {
    users: [],
  },
  mutations: {
    SET_USERS(state, users) {
      state.users = users;
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
  },
};
