<template>
	<form class="input-form" @submit.prevent="userDataSubmit">
		<input placeholder="userName" v-model="user.name" />
		<input placeholder="phoneNumber" v-model="user.phoneNumber" />
		<input placeholder="userName" v-model="user.email" />
		<button type="submit">create</button>
	</form>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class InputUserForm extends Vue {
	user = {
		name: '',
		phoneNumber: '',
		email: '',
	};

	userDataSubmit() {
		if (this.inputValidation()) {
			console.log(this.user);
		}
	}
	inputValidation() {
		const { name, phoneNumber, email } = this.user;
		if (!name || !phoneNumber || !email) {
			alert('모두 입력해주세요.');
			return false;
		}
		return true;
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
