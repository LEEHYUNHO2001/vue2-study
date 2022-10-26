<template>
  <div>Completed Todo: {{ numberOfCompleteTodo }}</div>
</template>

<script>
export default {
  computed: {
    todoItems() {
      return this.$store.state.todoItems;
    },
    numberOfCompleteTodo() {
      return this.todoItems.filter((todoItem) => todoItem.checked).length;
    },
  },
};
</script>

<style></style>
