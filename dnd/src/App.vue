<template>
  <div id="app">
    <DndBoard />
  </div>
</template>

<script>
import DndBoard from "./components/DndBoard.vue";

export default {
  name: "App",
  components: {
    DndBoard,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
