<template>
	<section class="phone-number">
		<h1 class="title">{{ title }}</h1>
		<InputUserForm />
	</section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import InputUserForm from './InputUserForm.vue';

@Component({
	components: {
		InputUserForm,
	},
})
export default class PhoneNumber extends Vue {
	title = '전화번호부';
}
</script>

<style scoped>
.phone-number {
	margin: 50px;
}
.title {
	text-align: center;
	font-size: 30px;
}
</style>
