<template>
	<section class="phone-number">
		<h1 class="title">{{ title }}</h1>
		<InputUserForm @addUser="addUser" />
		<UserList :userList="userList" />
	</section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { User } from '@/types';

import InputUserForm from './InputUserForm.vue';
import UserList from './UserList.vue';

@Component({
	components: {
		InputUserForm,
		UserList,
	},
})
export default class PhoneNumber extends Vue {
	title = '전화번호부';
	userList = [
		{
			name: 'example user',
			phoneNumber: '01012345678',
			email: 'ex1@iga.com',
		},
	] as User[];

	addUser(user: User) {
		this.userList.push(user);
	}
}
</script>

<style scoped>
.phone-number {
	margin: 50px;
}
.title {
	text-align: center;
	font-size: 30px;
}
</style>
