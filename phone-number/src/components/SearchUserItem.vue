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
    <UserList :search="search" :filteredUserList="filteredUserList" />
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
    return this.$store.getters.getUserList;
  }
  get isSort() {
    return this.$store.getters.getIsSort;
  }
  get sortUserList() {
    return this.$store.getters.sortUser;
  }
  get filteringUserList() {
    // 정렬 boolean값에 따라 userList 결정
    const userList = this.isSort ? this.sortUserList : this.userList;

    const searchedUserList = userList.filter((user: User) => {
      const pn = user.phoneNumber;
      return pn.includes(this.search);
    });
    return searchedUserList;
  }

  handleSearch() {
    this.filteredUserList = this.filteringUserList;
  }

  @Watch("userList")
  watchUserList() {
    this.handleSearch();
  }

  @Watch("isSort")
  watchIsSort() {
    this.handleSearch();
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
