<template>
  <div class="home-container">
    <h1>{{ title }}</h1>
    <SummaryChart />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import SummaryChart from "@/components/SummaryChart/SummaryChart.vue";

@Component({
  components: { SummaryChart },
})
export default class HomeContainer extends Vue {
  title = "HomeContainer";
}
</script>

<style scoped></style>
