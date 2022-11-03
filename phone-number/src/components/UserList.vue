<template>
	<ul class="user-container">
		<li v-for="(user, index) in filteredUserList" :key="user.email">
			<UserItemContainer :user="user" :index="index" />
		</li>
	</ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { User } from '@/types';

import UserItemContainer from './UserItemContainer.vue';

@Component({
	components: {
		UserItemContainer,
	},
})
export default class UserList extends Vue {
	@Prop() public filteredUserList!: User[];
}
</script>

<style scoped></style>
