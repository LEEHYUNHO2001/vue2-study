<template>
	<div class="user" :class="{ odd: isOdd(index) }">
		<div class="user-content" v-if="!isUpdating">
			<button type="button" class="update-btn" @click="handleUpdating()">
				{{ isUpdating ? 'cancel' : 'update' }}
			</button>
			<p>user : {{ user.name }}</p>
			<p>phone number : {{ user.phoneNumber }}</p>
			<p>email : {{ user.email }}</p>
			<p>date : {{ user.date }}</p>
		</div>
		<InputUserForm v-else />
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { User } from '@/types';

import InputUserForm from './InputUserForm.vue';

@Component({
	components: {
		InputUserForm,
	},
})
export default class UserItem extends Vue {
	@Prop() public user!: User;
	@Prop() public index!: number;
	isUpdating = false;

	isOdd(index: number) {
		if (index % 2 === 1) return true;
		return false;
	}
	handleUpdating() {
		this.isUpdating = !this.isUpdating;
	}
}
</script>

<style scoped>
.user-container {
	margin-top: 50px;
}
.user {
	width: 400px;
	height: 250px;
	margin-top: 20px;
	border: 1px solid #000;
}
.user-content {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	text-align: center;
	height: 100%;
	padding-bottom: 20px;
}
.odd {
	background-color: #f2f2f2;
}
.update-btn {
	height: 30px;
	color: #fff;
	background-color: #000;
}
</style>
