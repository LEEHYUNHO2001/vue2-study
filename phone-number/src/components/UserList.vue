<template>
	<ul class="user-container">
		<li class="user" v-for="user in userList" :key="user.email">
			<p>user : {{ user.name }}</p>
			<p>phone number : {{ user.phoneNumber }}</p>
			<p>email : {{ user.email }}</p>
		</li>
	</ul>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { User } from '@/types';

@Component
export default class UserList extends Vue {
	userList = [
		{
			name: 'example user',
			phoneNumber: '01012345678',
			email: 'ex1@iga.com',
		},
	] as User[];
}
</script>

<style scoped>
.user-container {
	margin-top: 50px;
}
.user {
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	text-align: center;
	width: 400px;
	height: 200px;
	margin-top: 20px;
	border: 1px solid #000;
}
</style>
