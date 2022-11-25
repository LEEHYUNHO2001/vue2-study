import { AddUserState } from "@/types";

const getUserList = (state: AddUserState) => {
  return state.userList;
};

const getIsSort = (state: AddUserState) => {
  return state.isSort;
};

const sortUser = (state: AddUserState) => {
  const userListCopy = [...state.userList];
  return userListCopy.sort((a, b) => a.name.localeCompare(b.name));
};

export { getUserList, getIsSort, sortUser };
