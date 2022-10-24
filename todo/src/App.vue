<template>
  <div id="app" class="container">
    <h1 class="text-center">TODO</h1>
    <CompleteTodo :todoItems="todoItems" />
    <AddTodoInput @handle-add-todo="addTodoItem" />
    <TodoList
      :todoItems="todoItems"
      @toggle-check="toggleCheck"
      @handle-delete="deleteTodo"
    />
  </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";
import AddTodoInput from "@/components/AddTodoInput.vue";
import CompleteTodo from "@/components/CompleteTodo.vue";

export default {
  components: {
    TodoList,
    AddTodoInput,
    CompleteTodo,
  },
  data() {
    return {
      todoItems: [
        {
          id: 1,
          text: "Vue2 기초 공부",
          checked: false,
        },
        {
          id: 2,
          text: "Vue2 + Typescript 공부",
          checked: false,
        },
      ],
    };
  },
  methods: {
    addTodoItem(value) {
      this.todoItems.push({
        id: this.todoItems[this.todoItems.length - 1].id + 1,
        text: value,
        checked: false,
      });
    },
    toggleCheck({ id, checked }) {
      const index = this.todoItems.findIndex((todoItem) => todoItem.id === id);
      this.todoItems[index].checked = checked;
    },
    deleteTodo(id) {
      this.todoItems = this.todoItems.filter((todoItem) => todoItem.id !== id);
    },
  },
};
</script>
