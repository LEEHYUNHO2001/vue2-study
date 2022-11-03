<template>
	<div class="user-content">
		<button type="button" class="update-btn" @click="handleUpdating">
			update
		</button>
		<p>user : {{ user.name }}</p>
		<p>phone number : {{ user.phoneNumber }}</p>
		<p>email : {{ user.email }}</p>
		<p>date : {{ user.date }}</p>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { User } from '@/types';

@Component
export default class UserItem extends Vue {
	@Prop() public user!: User;
	@Prop() public isUpdating!: boolean;

	handleUpdating() {
		this.$emit('handleUpdating');
	}
}
</script>

<style scoped>
.update-btn {
	height: 30px;
	color: #fff;
	background-color: #000;
}
</style>
