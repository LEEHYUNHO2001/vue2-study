<template>
  <div class="container">
    <h2 class="title">{{ title }}</h2>
    <span>count : {{ count }}</span>
    <button class="increase-btn" type="button" @click="increaseCount">+</button>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Counter",
  data() {
    return {
      title: "Counter",
      count: 0,
    };
  },
  methods: {
    increaseCount() {
      this.count = ++this.count;
    },
  },
  created() {
    console.log("Counter created");
  },
  mounted() {
    console.log("Counter mounted");
  },
  updated() {
    console.log("Counter updated");
  },
  destroyed() {
    console.log("Counter destroyed");
  },
  activated() {
    console.log("Counter activated");
  },
  deactivated() {
    console.log("Counter deactivated");
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
.increase-btn {
  width: 20px;
  height: 20px;
  margin-left: 20px;
  border: 1px solid #000;
}
</style>
