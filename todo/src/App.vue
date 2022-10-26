<template>
  <div id="app" class="container">
    <h1 class="text-center">TODO</h1>
    <CompleteTodo />
    <AddTodoInput @handle-add-todo="addTodoItem" />
    <TodoList @toggle-check="toggleCheck" @handle-delete="deleteTodo" />
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
