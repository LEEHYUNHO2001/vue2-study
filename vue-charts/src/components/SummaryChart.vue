<template>
  <div class="summary-chart"></div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";

import { getEndPoint } from "@/utils";

type Rows = string[][];

interface SummaryHeader {
  idx: number;
  key: string;
  label: string;
  description: string;
  property_type: string;
  value_type: string;
}

interface SummaryChartData {
  headers: SummaryHeader;
  rows: Rows;
}

@Component
export default class SummaryChart extends Vue {
  chartData = {} as SummaryChartData;

  created() {
    this.getChartData();
  }

  async getChartData() {
    try {
      const url = getEndPoint("1");
      const res = await axios.get(url);
      this.chartData = res.data.data;
    } catch (err) {
      console.log(err);
    }
  }
}
</script>

<style scoped></style>
