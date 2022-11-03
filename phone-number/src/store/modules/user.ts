import { User } from '@/types';

interface AddUserState {
	userList: User[];
}

interface UpdateUser {
	user: User;
	index: number;
}

export default {
	state: {
		userList: [
			{
				name: 'example user',
				phoneNumber: '1112',
				email: 'ex1@iga.com',
				date: '2022년 3월 20일 14시 21분',
			},
			{
				name: 'example user',
				phoneNumber: '2223',
				email: 'ex2@iga.com',
				date: '2021년 3월 20일 14시 21분',
			},
			{
				name: 'example user',
				phoneNumber: '12345678',
				email: 'ex3@iga.com',
				date: '2020년 3월 20일 14시 21분',
			},
		] as User[],
	},
	mutations: {
		ADD_USER(state: AddUserState, user: User) {
			state.userList.push(user);
		},
		UPDATE_USER(state: AddUserState, { user, index }: UpdateUser) {
			state.userList = state.userList.map((data, i) => {
				if (i === index) return user;
				return data;
			});
			// 이 방법은 자신의 값이 바뀐지 몰라 렌더링을 못함
			// state.userList[index] = user;
		},
		DELETE_USER(state: AddUserState, index: number) {
			state.userList = state.userList.filter((_, i) => i !== index);
		},
		CLEAR_USER(state: AddUserState) {
			state.userList = [];
		},
	},
};
