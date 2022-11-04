<template>
  <div class="home-container">
    <h1>{{ title }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class HomeContainer extends Vue {
  title = "HomeContainer";
}
</script>

<style scoped></style>
