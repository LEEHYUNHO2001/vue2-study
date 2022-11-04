<template>
  <div class="summary-chart">
    <Bar
      :chart-options="chartOptions"
      :chart-data="chartData"
      :chart-id="chartId"
      :dataset-id-key="datasetIdKey"
      :width="width"
      :height="height"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

import { getEndPoint } from "@/utils";

import { SummaryChartData } from "./type";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

// 막대 차트 그리기
// https://vue-chartjs.org/guide/#chart-with-dynamic-styles
@Component({
  components: {
    Bar,
  },
  props: {
    chartId: {
      type: String,
      default: "bar-chart",
    },
    datasetIdKey: {
      type: String,
      default: "label",
    },
    width: {
      type: Number,
      default: 400,
    },
    height: {
      type: Number,
      default: 400,
    },
    cssClasses: {
      default: "",
      type: String,
    },
    styles: {
      type: Object,
      default: () => {
        //
      },
    },
    plugins: {
      type: Array,
      default: () => [],
    },
  },
})
export default class SummaryChart extends Vue {
  // chartData = {} as SummaryChartData;
  chartData = {};
  chartOptions = {
    responsive: true,
    // maintainAspectRatio: false,
  };

  created() {
    this.getChartData();
  }

  async getChartData() {
    try {
      const url = getEndPoint("1");
      const res = await axios.get(url);
      const data: SummaryChartData = res.data.data;

      const labels = data.rows.map((row) => row[0]);
      const datasets = [
        {
          label: "Summary Bar Chart",
          backgroundColor: "#f87979",
          data: data.rows.map((row) => parseInt(row[1])),
        },
      ];

      this.chartData = { labels, datasets };
      console.log(this.chartData);
    } catch (err) {
      console.log(err);
    }
  }
}
</script>

<style scoped></style>
