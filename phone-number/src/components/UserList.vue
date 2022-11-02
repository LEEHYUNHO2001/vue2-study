<template>
	<ul class="user-container">
		<li
			class="user"
			:class="{ odd: isOdd(index) }"
			v-for="(user, index) in userList"
			:key="user.email"
		>
			<p>user : {{ user.name }}</p>
			<p>phone number : {{ user.phoneNumber }}</p>
			<p>email : {{ user.email }}</p>
			<p>date : {{ user.date }}</p>
		</li>
	</ul>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class UserList extends Vue {
	// @Prop() public userList!: User[];
	userList = this.$store.state.user.userList;

	isOdd(index: number) {
		if (index % 2 === 1) return true;
		return false;
	}
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
.odd {
	background-color: #f2f2f2;
}
</style>
