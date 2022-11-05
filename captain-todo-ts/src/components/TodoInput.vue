<template>
  <div>
    <label for="todo-input"></label>
    <input id="todo-input" type="text" />
    <button type="button" @click="addTodo">add</button>
  </div>
</template>

<script lang="ts">
export default {
  methods: {
    addTodo() {
      console.log("add");
    },
  },
};
</script>

<style scoped>
#todo-input {
  border: 1px solid #000;
}
</style>
