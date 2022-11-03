<template>
  <div>
    <ul class="user-container" v-if="filteredUserList.length > 0">
      <li v-for="(user, index) in filteredUserList" :key="user.email">
        <UserItemContainer :user="user" :index="index" />
      </li>
    </ul>
    <p class="no-result" v-else>noResult</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import { User } from "@/types";

import UserItemContainer from "./UserItemContainer.vue";

@Component({
  components: {
    UserItemContainer,
  },
})
export default class UserList extends Vue {
  @Prop() public filteredUserList!: User[];
}
</script>

<style scoped>
.no-result {
  margin-top: 30px;
  font-size: 30px;
  font-weight: 700;
}
</style>
