<template>
  <section>
    <h2>로그인이 필요한 서비스입니다.</h2>
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
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios, { AxiosError } from "axios";
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
    await this.saveAccessToken();
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
    };
  }
  async postAccessToken() {
    try {
      const res = await axios({
        url: `${apiEndpoint}/api/Login/GetToken`,
        method: "post",
        data: this.loginData,
      });
      return res.data;
    } catch (err) {
      if(err instanceof AxiosError){
        if (err.response) {
          // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
          alert(err.response.data);
        } else if (err.request) {
          // 요청이 이루어 졌으나 응답을 받지 못했습니다.
          // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
          // Node.js의 http.ClientRequest 인스턴스입니다.
          console.log(err.request);
        } else {
          // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
          console.log("Error", err.message);
        }
      }
    }
  }
  async saveAccessToken() {
    const data = await this.postAccessToken();
    const accessToken = data.token;
    this.$store.commit("SUCCESS_GET_ACCESSTOKEN", accessToken);
    this.$router.push('/');
  }
}
</script>

<style scoped></style>
