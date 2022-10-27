<template>
  <input
    type="text"
    class="w-100 p-2"
    placeholder="할일을 입력하세요"
    v-model="todoInput"
    @keyup.enter="handleAddTodo"
  />
</template>

<script>
export default {
  data() {
    return {
      todoInput: "",
    };
  },
  methods: {
    handleAddTodo(e) {
      // state 변경 (mutations)
      // this.$store.commit("ADD_TODO_ITEM", e.target.value);

      // 비동기 처리 (actions)
      this.$store.dispatch("addTodoItem", e.target.value);
      this.todoInput = "";
    },
  },
};
</script>

<style></style>
