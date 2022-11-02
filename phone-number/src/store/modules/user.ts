import { User } from '@/types';

interface AddUserState {
	userList: User[];
}

export default {
	state: {
		userList: [
			{
				name: 'example user',
				phoneNumber: '01012345678',
				email: 'ex1@iga.com',
				date: '2022년 3월 20일 14시 21분',
			},
		] as User[],
	},
	mutations: {
		ADD_USER(state: AddUserState, user: User) {
			state.userList.push(user);
		},
	},
};
