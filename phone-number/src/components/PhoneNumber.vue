<template>
  <section class="phone-number">
    <h1 class="title">{{ title }}</h1>
    <SearchUserItem />
  </section>
</template>

<script lang="ts">
import axios from "axios";
import { Component, Vue } from "vue-property-decorator";

import SearchUserItem from "./SearchUserItem.vue";
import {InitUser} from "@/types";

@Component({
  components: {
    SearchUserItem,
  },
})
export default class PhoneNumber extends Vue {
  title = "전화번호부";

  async getUserProxy() {
    try {
      const res = await axios.get("/phonenumbers");
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }
  async objectKeyNameTransform() {
    const data = await this.getUserProxy();
    const newData = data.map((user:InitUser) => {
      return {
        name: user.userName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        date: user.date,
      }
    });
    this.$store.commit("INIT_USER", newData);
  }
  mounted() {
    this.objectKeyNameTransform();
  }
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
