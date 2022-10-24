<template>
  <div>Completed Todo: {{ numberOfCompleteTodo }}</div>
</template>

<script>
export default {
  props: {
    todoItems: {
      tpye: Array,
      required: true,
    },
  },
  computed: {
    numberOfCompleteTodo() {
      return this.todoItems.filter((todoItem) => todoItem.checked).length;
    },
  },
};
</script>

<style></style>
