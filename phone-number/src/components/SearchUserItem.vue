<template>
  <div>
    <div class="search-container">
      <input
        class="search-input"
        placeholder="search phone number"
        v-model="search"
        @input="handleSearch"
      />
    </div>
    <InputUserForm />
    <UserList :filteredUserList="filteredUserList" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

import { User } from "@/types";

import InputUserForm from "./InputUserForm.vue";
import UserList from "./UserList.vue";

@Component({
  components: {
    InputUserForm,
    UserList,
  },
})
export default class SearchUserItem extends Vue {
  search = "";
  filteredUserList = this.userList;

  get userList() {
    return this.$store.state.user.userList;
  }
  get filteringUserList() {
    return this.userList.filter((user: User) => {
      const pn = user.phoneNumber;
      return pn.includes(this.search);
    });
  }

  handleSearch() {
    this.filteredUserList = this.filteringUserList;
  }

  @Watch("userList")
  watchUserList() {
    this.filteredUserList = this.filteringUserList;
  }
}
</script>

<style scoped>
.search-container {
  margin-top: 50px;
}
.search-input {
  padding-left: 10px;
  width: 100%;
  height: 40px;
  font-size: 18px;
  border: 2px solid #000;
}
</style>
