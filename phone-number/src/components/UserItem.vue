<template>
  <form class="user-content" @submit.prevent="userDataDelete">
    <div>
      <button type="button" class="btn update-btn" @click="handleIsUpdating">
        update
      </button>
      <button type="submit" class="btn delete-btn">delete</button>
    </div>
    <p>user : {{ user.name }}</p>
    <p>phone number : {{ user.phoneNumber }}</p>
    <p>email : {{ user.email }}</p>
    <p>date : {{ user.date }}</p>
  </form>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import { User } from "@/types";

@Component
export default class UserItem extends Vue {
  @Prop() public user!: User;

  handleIsUpdating() {
    this.$emit("handleIsUpdating");
  }
  userDataDelete() {
    this.$store.commit("DELETE_USER", this.user.email);
  }
}
</script>

<style scoped>
.btn {
  width: 50%;
  height: 30px;
  color: #fff;
}
.update-btn {
  background-color: #000;
}
.delete-btn {
  background-color: red;
}
</style>
