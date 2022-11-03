<template>
	<div class="user-content">
		<button type="button" class="submit-update-btn" @click="handleUpdating">
			update submit
		</button>
		<div>
			<label> user : </label>
			<input class="update-user-input" :value="user.name" />
		</div>
		<div>
			<label>phone number : </label>
			<input class="update-user-input" :value="user.phoneNumber" />
		</div>
		<div>
			<label>email : </label>
			<input class="update-user-input" :value="user.email" />
		</div>
		<div><label>date : </label>{{ user.date }}</div>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { User } from '@/types';

@Component
export default class UpdateUserItem extends Vue {
	@Prop() public user!: User;
	@Prop() public isUpdating!: boolean;

	handleUpdating() {
		this.$emit('handleUpdating');
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
