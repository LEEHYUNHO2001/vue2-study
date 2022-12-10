import Vue from "vue";
import Vuex from "vuex";

import login from "./modules/login/login";
import user from "./modules/user/user";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    login,
    user,
  },
});
