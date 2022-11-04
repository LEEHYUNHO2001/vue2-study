import { User } from "@/types";

interface AddUserState {
  userList: User[];
  isSort: boolean;
}

interface UpdateUser {
  user: User;
  origin_email: string;
}

export default {
  state: {
    userList: [
      {
        name: "bbb user",
        phoneNumber: "1112",
        email: "ex1@iga.com",
        date: "2022년 3월 20일 14시 21분",
      },
      {
        name: "ccc user",
        phoneNumber: "2223",
        email: "ex2@iga.com",
        date: "2021년 3월 20일 14시 21분",
      },
      {
        name: "aaa user",
        phoneNumber: "12345678",
        email: "ex3@iga.com",
        date: "2020년 3월 20일 14시 21분",
      },
    ] as User[],
    isSort: false as boolean,
  },
  mutations: {
    ADD_USER(state: AddUserState, user: User) {
      state.userList.push(user);
    },
    UPDATE_USER(state: AddUserState, { user, origin_email }: UpdateUser) {
      state.userList = state.userList.map((data) => {
        if (data.email === origin_email) return user;
        return data;
      });
    },
    DELETE_USER(state: AddUserState, email: string) {
      state.userList = state.userList.filter((user) => user.email !== email);
    },
    SORT_USER(state: AddUserState) {
      state.isSort = !state.isSort;
    },
    CLEAR_USER(state: AddUserState) {
      state.userList = [];
    },
  },
  getters: {
    getUserList(state: AddUserState) {
      return state.userList;
    },
    getIsSort(state: AddUserState) {
      return state.isSort;
    },
    sortUser(state: AddUserState) {
      const a = [...state.userList];
      const sortedUserList = [
        ...a.sort((a, b) => a.name.localeCompare(b.name)),
      ];
      return sortedUserList;
    },
  },
};
