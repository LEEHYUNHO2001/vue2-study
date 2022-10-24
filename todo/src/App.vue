<template>
  <div id="app" class="container">
    <h1 class="text-center">TODO</h1>
    <input
      type="text"
      class="w-100 p-2"
      placeholder="할일을 입력하세요"
      v-model="todoInput"
      @keyup.enter="addTodoItem"
    />
    <TodoItem
      v-for="todoItem in todoItems"
      :key="todoItem.id"
      :todoItem="todoItem"
      @toggle-check="toggleCheck"
    />
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem.vue";

export default {
  components: {
    TodoItem,
  },
  data() {
    return {
      todoInput: "",
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
    addTodoItem(e) {
      this.todoItems.push({
        id: this.todoItems.length + 1,
        text: e.target.value,
        checked: false,
      });
      this.todoInput = "";
    },
    toggleCheck({ id, checked }) {
      const index = this.todoItems.findIndex((todoItem) => todoItem.id === id);
      this.todoItems[index].checked = checked;
    },
  },
};
</script>
