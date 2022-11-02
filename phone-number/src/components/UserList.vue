<template>
	<ul class="user-container">
		<li class="user" v-for="user in userList" :key="user.email">
			<p>user : {{ user.name }}</p>
			<p>phone number : {{ user.phoneNumber }}</p>
			<p>email : {{ user.email }}</p>
			<p>date : {{ user.date }}</p>
		</li>
	</ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { User } from '@/types';

@Component
export default class UserList extends Vue {
	@Prop() public userList!: User[];
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
