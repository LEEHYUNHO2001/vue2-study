<template>
  <div class="todo-container">
    <header>
      <h1>{{ title }}</h1>
    </header>
    <main>
      <TodoInput :item="todoText" @input="updateTodoText" @add="addTodoItem" />
      <ul>
        <TodoItem
          v-for="(item, i) in todoItems"
          :key="item + i"
          :item="item"
          :index="i"
          @remove="removeTodoItem"
        />
      </ul>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import TodoInput from "./TodoInput.vue";
import TodoItem from "./TodoItem.vue";

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
  components: { TodoInput, TodoItem },
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
    removeTodoItem(index: number) {
      this.todoItems.splice(index, 1);
      storage.save(this.todoItems);
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
