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
          :key="item.title + i"
          :item="item"
          :index="i"
          @remove="removeTodoItem"
          @toggle="toggleItemComplete"
        />
      </ul>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import TodoInput from "./TodoInput.vue";
import TodoItem from "./TodoItem.vue";

export interface Todo {
  title: string;
  done: boolean;
}

const storageKey = "vue-func-ts-todo";
const storage = {
  save(todoItems: Todo[]) {
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
      todoItems: [] as Todo[],
    };
  },
  methods: {
    updateTodoText(value: string) {
      this.todoText = value;
    },
    addTodoItem() {
      const todo: Todo = {
        title: this.todoText,
        done: false,
      };
      this.todoItems.push(todo);
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
    toggleItemComplete(item: Todo, index: number) {
      this.todoItems.splice(index, 1, {
        ...item,
        done: !item.done,
      });
      storage.save(this.todoItems);
    },
  },
  created() {
    this.fetchTodoItems();
  },
});
</script>

<style scoped></style>
