<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <label for="userName">Name :</label>
      <input
        type="text"
        id="userName"
        name="userName"
        placeholder="userName"
        @input="handleLoginData"
        :value="loginData.userName"
      />
    </div>
    <div>
      <label for="password">Password :</label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="password"
        @input="handleLoginData"
        :value="loginData.password"
      />
    </div>
    <button type="submit">Login</button>
  </form>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";
import { apiEndpoint } from "@/constants";

interface LoginData {
  userName: string;
  password: string;
}

@Component
export default class Login extends Vue {
  loginData = {
    userName: "",
    password: "",
  } as LoginData;

  async handleSubmit() {
    await this.postAccessToken();
    await this.clearLoginData();
  }
  handleLoginData(e: InputEvent) {
    const eTarget = e.target as HTMLInputElement;
    this.loginData = {
      ...this.loginData,
      [eTarget.name]: eTarget.value,
    };
  }
  clearLoginData() {
    this.loginData = {
      userName: "",
      password: "",
    }
  }
  async postAccessToken() {
    try {
      const res = await axios({
        url: `${apiEndpoint}/api/Login/GetToken`,
        method: "post",
        data: this.loginData,
      });
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  }
}
</script>

<style scoped></style>
