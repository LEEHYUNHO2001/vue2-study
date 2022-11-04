import { AddUserState, UpdateUser, User } from "@/types";

const ADD_USER = (state: AddUserState, user: User) => {
  state.userList.push(user);
};

const UPDATE_USER = (
  state: AddUserState,
  { user, origin_email }: UpdateUser
) => {
  state.userList = state.userList.map((data) => {
    if (data.email === origin_email) return user;
    return data;
  });
};

const DELETE_USER = (state: AddUserState, email: string) => {
  state.userList = state.userList.filter((user) => user.email !== email);
};
const SORT_USER = (state: AddUserState) => {
  state.isSort = !state.isSort;
};

const CLEAR_USER = (state: AddUserState) => {
  state.userList = [];
};

export { ADD_USER, UPDATE_USER, DELETE_USER, SORT_USER, CLEAR_USER };
