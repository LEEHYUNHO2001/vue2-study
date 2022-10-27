<template>
  <article>
    <h2>UserList</h2>
    <ul v-for="user in users" :key="user.id">
      <li>{{ user.name }}</li>
    </ul>
  </article>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.getUsers();
  },
  methods: {
    async getUsers() {
      // jsonplaceholder API
      const url = "https://jsonplaceholder.typicode.com/users";
      try {
        const res = await axios.get(url);
        this.users = res.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style></style>
