<template>
	<ul class="user-container">
		<li v-for="(user, index) in userList" :key="user.email">
			<UserItemContainer :user="user" :index="index" />
		</li>
	</ul>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import UserItemContainer from './UserItemContainer.vue';

@Component({
	components: {
		UserItemContainer,
	},
})
export default class UserList extends Vue {
	get userList() {
		return this.$store.state.user.userList;
	}
}
</script>

<style scoped></style>
