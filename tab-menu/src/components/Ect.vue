<template>
  <div class="container">
    <h2 class="title">{{ title }}</h2>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Ect",
  data() {
    return {
      title: "Ect",
    };
  },
  methods: {
    increaseCount() {
      this.count = ++this.count;
    },
  },
  created() {
    console.log("Ect created");
  },
  mounted() {
    console.log("Ect mounted");
  },
  updated() {
    console.log("Ect updated");
  },
  destroyed() {
    console.log("Ect destroyed");
  },
  activated() {
    console.log("Ect activated");
  },
  deactivated() {
    console.log("Ect deactivated");
  },
});
</script>

<style scoped>
.container {
  padding: 30px;
}
.title {
  margin-bottom: 30px;
  font-size: 20px;
  font-weight: 700;
}
</style>
