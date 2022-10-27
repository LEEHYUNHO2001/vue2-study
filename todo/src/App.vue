<template>
  <div id="app" class="container">
    <h1 class="text-center">TODO</h1>
    <CompleteTodo />
    <AddTodoInput />
    <TodoList />
    <UserList />
  </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";
import AddTodoInput from "@/components/AddTodoInput.vue";
import CompleteTodo from "@/components/CompleteTodo.vue";
import UserList from "@/components/UserList.vue";

export default {
  components: {
    TodoList,
    AddTodoInput,
    CompleteTodo,
    UserList,
  },
};
</script>
