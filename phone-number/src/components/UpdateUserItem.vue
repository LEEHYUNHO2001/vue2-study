<template>
  <form class="user-content" @submit.prevent="onClickUpdateBtn">
    <button type="submit" class="submit-update-btn">update submit</button>
    <div>
      <label> user : </label>
      <input class="update-user-input" v-model="updatingUser.name" />
    </div>
    <div>
      <label>phone number : </label>
      <input class="update-user-input" v-model="updatingUser.phoneNumber" />
    </div>
    <div>
      <label>email : </label>
      <input class="update-user-input" v-model="updatingUser.email" />
    </div>
    <div><label>date : </label>{{ user.date }}</div>
  </form>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import { allValidate } from "@/utils";
import { User } from "@/types";
import axios from "axios";
import { apiEndpoint } from "@/constants";

@Component
export default class UpdateUserItem extends Vue {
  @Prop() public user!: User;
  updatingUser = { ...this.$props.user };

  async updateUserProxy() {
    try {
      const body = {
        userName: this.updatingUser.name,
        phoneNumber: this.updatingUser.phoneNumber,
        email: this.updatingUser.email,
      };
      await axios({
        url: `${apiEndpoint}/phonenumber/${this.user.phoneNumber}`,
        method: "put",
        data: body,
      });
      return true;
    } catch (err) {
      console.log(err);
    }
  }

  handleIsUpdating() {
    this.$emit("handleIsUpdating");
  }
  userDataUpdate() {
    this.$store.commit("UPDATE_USER", {
      user: this.updatingUser,
      origin_email: this.user.email,
    });
  }
  async onClickUpdateBtn() {
    if (allValidate(this.updatingUser)) {
      const res = await this.updateUserProxy();
      if (res) await this.userDataUpdate();
      else alert("서버에 문제가 있습니다.");
      this.handleIsUpdating();
    }
  }
}
</script>

<style scoped>
.submit-update-btn {
  height: 30px;
  color: #fff;
  background-color: red;
}
.update-user-input {
  border: 1px solid #000;
}
</style>
