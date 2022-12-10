import { ActionContext } from "vuex";
import { RootState } from "./state";
import { Mutations, MutationTypes } from "./mutations";
import {
  fetchNews,
  fetchAsk,
  fetchJobs,
  fetchUser,
  fetchItem,
  fetchList,
} from "../api/index";

enum ActionTypes {
  FETCH_NEWS = "FETCH_NEWS",
  FETCH_ASK = "FETCH_ASK",
  FETCH_JOBS = "FETCH_JOBS",
  FETCH_USER = "FETCH_USER",
  FETCH_ITEM = "FETCH_ITEM",
  FETCH_LIST = "FETCH_LIST",
}

type MyActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload?: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<RootState, RootState>, "commit">;

const actions = {
  async [ActionTypes.FETCH_NEWS](context: MyActionContext) {
    const { data } = await fetchNews();
    context.commit(MutationTypes.SET_NEWS);
    return data;
  },
  // async [ActionTypes.FETCH_ASK]({ commit }) {
  //   return fetchAsk().then((response) => commit("SET_ASK", response.data));
  // },
  // async [ActionTypes.FETCH_JOBS]({ commit }) {
  //   return fetchJobs().then((response) => commit("SET_JOBS", response.data));
  // },
  // async [ActionTypes.FETCH_USER]({ commit }, userId) {
  //   return fetchUser(userId).then((res) => commit("SET_USER", res.data));
  // },
  // async [ActionTypes.FETCH_ITEM]({ commit }, itemId) {
  //   return fetchItem(itemId).then((res) => commit("SET_ITEM", res.data));
  // },
  // // hoc
  // async [ActionTypes.FETCH_LIST]({ commit }, listType) {
  //   return fetchList(listType).then((res) => commit("SET_LIST", res.data));
  // },
};

type Actions = typeof actions;

export { actions, ActionTypes, Actions };
