<template>
	<form class="input-form" @submit.prevent="userDataSubmit">
		<input placeholder="userName" v-model="user.name" />
		<input placeholder="phoneNumber" v-model="user.phoneNumber" />
		<input placeholder="email" v-model="user.email" />
		<button type="submit">create</button>
	</form>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import {
	nameRegex,
	phoneNumberRegex,
	emailRegex,
} from '@/constants/validation';
import { User } from '@/types';

@Component
export default class InputUserForm extends Vue {
	user = {
		name: '',
		phoneNumber: '',
		email: '',
	} as User;

	// @Emit('addUser')
	// private addUser() {

	// }

	userDataSubmit() {
		if (
			!this.emptyValidate() &&
			!this.userNameValidate() &&
			!this.phoneNumberValidate() &&
			!this.emailValidate()
		) {
			this.$emit('addUser', this.user);
			this.clearInput();
		}
	}
	clearInput() {
		this.user = {
			name: '',
			phoneNumber: '',
			email: '',
		};
	}
	emptyValidate() {
		const { name, phoneNumber, email } = this.user;
		if (!name || !phoneNumber || !email) {
			alert('모두 입력해주세요.');
			return true;
		}
	}
	userNameValidate() {
		const { name } = this.user;
		if (
			!nameRegex.test(name) ||
			name.length > 20 ||
			name.split(' ').join('').length === 0
		) {
			alert('20자리 이하의 영문 + 띄어쓰기 조합으로 이름을 적어주세요.');
			return true;
		}
	}
	phoneNumberValidate() {
		const { phoneNumber } = this.user;
		if (!phoneNumberRegex.test(phoneNumber) || phoneNumber.length > 10) {
			alert('10자리 이하의 숫자만 입력해주세요.');
			return true;
		}
	}
	emailValidate() {
		const { email } = this.user;
		if (!emailRegex.test(email) || email.length > 40) {
			alert('40자리 이하의 이메일 형식으로 입력해주세요.');
			return true;
		}
	}
}
</script>

<style scoped>
.input-form {
	display: flex;
	justify-content: space-between;
	margin-top: 50px;
}
.input-form > input {
	height: 30px;
	padding-left: 10px;
	border: 1px solid #000;
}
.input-form > button {
	height: 30px;
	padding: 0px 10px;
	color: #fff;
	background-color: #000;
}
</style>
