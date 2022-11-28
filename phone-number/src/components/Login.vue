<template>
  <div>
    <div>
      <label for="userName">userName :</label>
      <input type="text" id="userName">
    </div>
    <div>
      <label for="password">password :</label>
      <input type="password" id="password">
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Login extends Vue {}
</script>

<style scoped></style>
