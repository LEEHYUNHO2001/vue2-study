<template>
  <article>
    <h2>UserList</h2>
    <ul v-for="user in users" :key="user.id">
      <li>{{ user.name }}</li>
    </ul>
  </article>
</template>

<script>
export default {
  created() {
    this.getUsers();
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
  methods: {
    getUsers() {
      this.$store.dispatch("getUsers");
    },
  },
};
</script>

<style></style>
