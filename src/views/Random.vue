<template>
  <b-container id="draw-graph-sample">
    <b-row class="justify-content-center">
      <Menu />
    </b-row>
    <b-row>
      <canvas id="chart" />
    </b-row>
    <b-row class="justify-content-center">
      <b-button @click="start">{{ this.buttonText }}</b-button>
    </b-row>
  </b-container>
</template>

<script>
import Menu from "@/components/Menu.vue";
import Chart from "chart.js";
const sleep = (msec) => new Promise((resolve) => setTimeout(resolve, msec));
export default {
  components: {
    Menu,
  },
  mounted() {
    const ctx = document.getElementById("chart").getContext("2d");
    this.chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
        ],
        datasets: [{ label: 'Random number', data: [] }],
      },
      options: {
        responsive: true,
        title: {
          display: true,
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        scales: {
          xAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: "Count",
              },
            },
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: "Value",
              },
              ticks: {
                  max: 10,
                  min: 0,
              },
            },
          ],
        },
      },
    });
  },
  methods: {
    async start() {
      if (this.chartAvailable) {
        this.chartAvailable = false;
        this.buttonText = "start";
        return;
      }
      this.chartAvailable = true;
      this.buttonText = "stop";
      await sleep(1000);
      while (this.chartAvailable) {
        this.chart.data.datasets.forEach((dataset) => {
          if (dataset.data.length >= 20) {
            dataset.data.splice(0, 1);
          }
          dataset.data.push(this.getRandomInt(10));
        });
        this.chart.update();
        await sleep(1000);
      }
    },
    getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    },
  },
  data() {
    return {
      chart: null,
      buttonText: "start",
    };
  },
};
</script>

<style scoped>
#draw-graph-sample {
  height: 100vh;
  min-height: 500px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background: repeating-linear-gradient(
    to right,
    #8edae5,
    #8edae5 14.3%,
    white 14.3%,
    white 28.6%
  );
}
</style>