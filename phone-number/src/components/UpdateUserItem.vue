<template>
	<form class="user-content" @submit.prevent="userDataUpdate">
		<button type="submit" class="submit-update-btn">update submit</button>
		<div>
			<label> user : </label>
			<input class="update-user-input" v-model="updatingUser.name" />
		</div>
		<div>
			<label>phone number : </label>
			<input class="update-user-input" v-model="updatingUser.phoneNumber" />
		</div>
		<div>
			<label>email : </label>
			<input class="update-user-input" v-model="updatingUser.email" />
		</div>
		<div><label>date : </label>{{ user.date }}</div>
	</form>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { User } from '@/types';

@Component
export default class UpdateUserItem extends Vue {
	@Prop() public user!: User;
	@Prop() public index!: number;
	updatingUser = { ...this.$props.user };

	handleIsUpdating() {
		this.$emit('handleIsUpdating');
	}
	userDataUpdate() {
		this.$store.commit('UPDATE_USER', {
			user: this.updatingUser,
			index: this.index,
		});
		this.handleIsUpdating();
	}
}
</script>

<style scoped>
.submit-update-btn {
	height: 30px;
	color: #fff;
	background-color: red;
}
.update-user-input {
	border: 1px solid #000;
}
</style>
