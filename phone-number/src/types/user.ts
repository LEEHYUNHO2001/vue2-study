export interface InitUser {
  id: string;
  userName: string;
  phoneNumber: string;
  email: string;
  date: string;
}

export interface User {
  name: string;
  phoneNumber: string;
  email: string;
  date: string;
}

export interface AddUserState {
  userList: User[];
  isSort: boolean;
}

export interface UpdateUser {
  user: User;
  origin_email: string;
}
