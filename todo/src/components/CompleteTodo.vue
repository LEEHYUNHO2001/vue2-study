<template>
  <div>Completed Todo: {{ numberOfCompleteTodo }}</div>
</template>

<script>
export default {
  computed: {
    numberOfCompleteTodo() {
      return this.$store.getters.numberOfCompleteTodo;
    },
  },
};
</script>

<style></style>
