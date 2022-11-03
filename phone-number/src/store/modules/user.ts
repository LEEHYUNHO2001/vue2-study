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
				phoneNumber: '12345678',
				email: 'ex1@iga.com',
				date: '2022년 3월 20일 14시 21분',
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
	},
};
