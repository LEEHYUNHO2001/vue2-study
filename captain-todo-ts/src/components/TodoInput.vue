<template>
  <div>
    <label for="todo-input">오늘 할 일 : </label>
    <input
      id="todo-input"
      type="text"
      :value="item"
      @input="handleInput"
      @keydown.enter="addTodo"
    />
    <button type="submit" @click="addTodo">추가</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    item: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleInput(e: Event) {
      this.$emit("input", (e.target as HTMLInputElement).value);
    },
    addTodo() {
      this.$emit("add");
    },
  },
});
</script>

<style scoped>
#todo-input {
  border: 1px solid #000;
}
</style>
