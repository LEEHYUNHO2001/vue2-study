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
import { UserPost } from "@/types";
import axios from "axios";

@Component
export default class InputUserForm extends Vue {
  user = {
    name: "",
    phoneNumber: "",
    email: "",
  } as UserPost;

  // userDataSubmit에서 this.$emit('addUser', this.user);
  // 대신 this.addUser(this.user) 사용 가능
  // @Emit('addUser')
  // private addUser() {}

  get isSort() {
    return this.$store.getters.getIsSort;
  }

  async postUserProxy() {
    try {
      const body = {
        phoneNumber: this.user.phoneNumber,
        userName: this.user.name,
        email: this.user.email
      }
      await axios({
        url: "/phonenumber",
        method: "post",
        data: body,
      });
    } catch (err) {
      console.log(err);
    }
  }

  // date를 backend에서 생성하고, front에서 바로 보여줘야 하므로
  // post하자마자 해당 phone number을 가진 유저 정보 get하기
  async getUserProxy() {
    try {
      const res = await axios.get(`/phonenumber/${this.user.phoneNumber}`);
      return {
        name: res.data.userName,
        phoneNumber: res.data.phoneNumber,
        email: res.data.email,
        date: res.data.date
      };
    } catch (err) {
      console.log(err)
    }
  }

  userDataSort() {
    this.$store.commit("SORT_USER");
  }
  userDataClear() {
    this.$store.commit("CLEAR_USER");
  }
  async userDataSubmit() {
    if (allValidate(this.user)) {
      // 이제 date는 백엔드에서 생성
      // this.currentDate();

      // this.$emit('addUser', this.user);
      await this.postUserProxy();
      const createdUser = await this.getUserProxy();
      await this.$store.commit("ADD_USER", createdUser);
      this.clearInput();
    }
  }
  // currentDate() {
  //   const current = new Date();
  //   const year = current.getFullYear();
  //   const month = current.getMonth() + 1;
  //   const date = current.getDate();
  //   const hours = current.getHours();
  //   const minutes = current.getMinutes();
  //
  //   this.user.date = `${year}년 ${month}월 ${date}일 ${hours}시 ${minutes}분`;
  // }
  clearInput() {
    this.user = {
      name: "",
      phoneNumber: "",
      email: "",
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
