<template>
  <section class="phone-number">
    <h1 class="title">{{ title }}</h1>
    <SearchUserItem />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import SearchUserItem from "./SearchUserItem.vue";

@Component({
  components: {
    SearchUserItem,
  },
})
export default class PhoneNumber extends Vue {
  title = "전화번호부";
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
