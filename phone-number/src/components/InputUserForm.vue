<template>
  <form class="input-form" @submit.prevent="userDataSubmit">
    <input placeholder="userName" v-model="user.name" />
    <input placeholder="phoneNumber" v-model="user.phoneNumber" />
    <input placeholder="email" v-model="user.email" />
    <button type="submit">create</button>
    <button type="button" @click="userDataSort">
      {{ isSort ? "original sort" : "user sort" }}
    </button>
    <button type="button" @click="userDataClear">clear</button>
  </form>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import { allValidate } from "@/utils/validate";
import { User } from "@/types";

@Component
export default class InputUserForm extends Vue {
  user = {
    name: "",
    phoneNumber: "",
    email: "",
    date: "",
  } as User;

  // userDataSubmit에서 this.$emit('addUser', this.user);
  // 대신 this.addUser(this.user) 사용 가능
  // @Emit('addUser')
  // private addUser() {}

  get isSort() {
    return this.$store.getters.getIsSort;
  }

  userDataSort() {
    this.$store.commit("SORT_USER");
  }
  userDataClear() {
    this.$store.commit("CLEAR_USER");
  }
  userDataSubmit() {
    if (allValidate(this.user)) {
      this.currentDate();
      // this.$emit('addUser', this.user);
      this.$store.commit("ADD_USER", this.user);
      this.clearInput();
    }
  }
  currentDate() {
    const current = new Date();
    const year = current.getFullYear();
    const month = current.getMonth() + 1;
    const date = current.getDate();
    const hours = current.getHours();
    const minutes = current.getMinutes();

    this.user.date = `${year}년 ${month}월 ${date}일 ${hours}시 ${minutes}분`;
  }
  clearInput() {
    this.user = {
      name: "",
      phoneNumber: "",
      email: "",
      date: "",
    };
  }
}
</script>

<style scoped>
.input-form {
  display: flex;
  margin-top: 50px;
}
.input-form > input {
  height: 30px;
  padding-left: 10px;
  border: 1px solid #000;
}
.input-form > button {
  height: 30px;
  padding: 0px 10px;
  margin-left: 10px;
  color: #fff;
  background-color: #000;
}
</style>
