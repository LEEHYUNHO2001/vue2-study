<template>
  <div class="todo-container">
    <header>
      <h1>{{ title }}</h1>
    </header>
    <main>
      <TodoInput :item="todoText" @input="updateTodoText" @add="addTodoItem" />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import TodoInput from "./TodoInput.vue";

const storageKey = "vue-func-ts-todo";
const storage = {
  save(todoItems: string[]) {
    const parsed = JSON.stringify(todoItems);
    localStorage.setItem(storageKey, parsed);
  },
  fetch() {
    const todoItems = localStorage.getItem(storageKey) || "[]";
    return JSON.parse(todoItems);
  },
};

export default Vue.extend({
  name: "TodoContainer",
  props: {
    title: String,
  },
  components: { TodoInput },
  data() {
    return {
      todoText: "",
      todoItems: [] as string[],
    };
  },
  methods: {
    updateTodoText(value: string) {
      this.todoText = value;
    },
    addTodoItem() {
      this.todoItems.push(this.todoText);
      storage.save(this.todoItems);
      this.initTodoText();
    },
    initTodoText() {
      this.todoText = "";
    },
    fetchTodoItems() {
      this.todoItems = storage.fetch();
    },
  },
  created() {
    this.fetchTodoItems();
  },
});
</script>

<style scoped></style>
