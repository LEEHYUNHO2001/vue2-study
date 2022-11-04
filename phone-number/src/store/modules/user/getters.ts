import { AddUserState } from "@/types";

const getUserList = (state: AddUserState) => {
  return state.userList;
};

const getIsSort = (state: AddUserState) => {
  return state.isSort;
};

const sortUser = (state: AddUserState) => {
  const a = [...state.userList];
  const sortedUserList = [...a.sort((a, b) => a.name.localeCompare(b.name))];
  return sortedUserList;
};

export { getUserList, getIsSort, sortUser };
