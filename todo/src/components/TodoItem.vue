<template>
  <div class="mt-3">
    <input type="checkbox" :checked="todoItem.checked" @change="toggleCheck" />
    <span
      class="m-3"
      :class="todoItem.checked && 'text-muted'"
      :style="todoItem.checked && 'text-decoration:line-through'"
    >
      {{ todoItem.text }}
    </span>
    <button class="btn btn-danger btn-sm" @click="deleteTodo">Delete</button>
  </div>
</template>

<script>
export default {
  props: {
    todoItem: {
      type: Object,
      required: true,
    },
  },
  methods: {
    toggleCheck(e) {
      this.$store.dispatch("toggleTodoCheck", {
        id: this.todoItem.id,
        checked: e.target.checked,
      });

      // this.$store.commit("TOGGLE_TODO_CHECK", {
      //   id: this.todoItem.id,
      //   checked: e.target.checked,
      // });
    },
    deleteTodo() {
      this.$store.dispatch("deleteTodo", this.todoItem.id);

      // this.$store.commit("DELETE_TODO", this.todoItem.id);
    },
  },
};
</script>

<style></style>
