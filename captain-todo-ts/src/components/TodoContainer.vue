<template>
  <section class="hello">
    <h1>{{ title }}</h1>
    <todo-input :item="todoText" @input="updateTodoText" @add="addTodoItem" />
  </section>
</template>

<script lang="ts">
import Vue from "vue";

import TodoInput from "./TodoInput.vue";

export default Vue.extend({
  name: "TodoContainer",
  props: {
    title: String,
  },
  components: { TodoInput },
  data() {
    return {
      todoText: "",
    };
  },
  methods: {
    updateTodoText(value: string) {
      this.todoText = value;
    },
    addTodoItem() {
      localStorage.setItem(this.todoText, this.todoText);
      this.initTodoText();
    },
    initTodoText() {
      this.todoText = "";
    },
  },
});
</script>

<style scoped></style>
