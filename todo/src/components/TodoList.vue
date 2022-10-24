<template>
  <div>
    <TodoItem
      v-for="todoItem in todoItems"
      :key="todoItem.id"
      :todoItem="todoItem"
      @toggle-check="toggleCheck"
      @handle-delete="deleteTodo"
    />
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem.vue";

export default {
  components: {
    TodoItem,
  },
  props: {
    todoItems: {
      type: Array,
      required: true,
    },
  },
  methods: {
    toggleCheck(value) {
      this.$emit("toggle-check", value);
    },
    deleteTodo(todoId) {
      this.$emit("handle-delete", todoId);
    },
  },
};
</script>

<style></style>
