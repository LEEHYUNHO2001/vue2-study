<template>
  <article>
    <h2>UserList</h2>
    <ul v-for="user in users" :key="user.id">
      <li>{{ user.name }}</li>
    </ul>
  </article>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  created() {
    this.getUsers();
  },
  computed: {
    ...mapState({
      users: (state) => state.user.users,
    }),

    // mapState로 아래의 코드를 위의 코드로 줄이기 가능
    // users() {
    //   return this.$store.state.users;
    // },
  },
  methods: {
    ...mapActions(["getUsers"]),

    // getUsers() {
    //   this.$store.dispatch("getUsers");
    // },
  },
};
</script>

<style></style>
