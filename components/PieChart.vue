<template>
  <!-- An Pie chart using Highcharts -->
  <div class="w-full md:w-1/2 p-3">
    <vue-highcharts :options="chartdata" ref="pieChart"></vue-highcharts>
  </div>
</template>
<script>
// Importing Highcharts
import VueHighcharts from "vue2-highcharts";

export default {
  components: {
    VueHighcharts
  },
  props: {
    resultSet: {
      type: Object,
      required: true
    }
  },
  computed: {
    chartdata() {
      // Storing cube.js query result
      const result = this.resultSet.loadResponse.data;

      const setOne = [];

      result.forEach(function(item) {
        setOne.push(
          item["Countrylanguage.isofficial"].toString(),
          parseInt(item["Countrylanguage.count"])
        );
      });

      const setTwo = setOne.splice(0, 2);

      const pieData = [];
      pieData.push(setOne);
      pieData.push(setTwo);

      // This is the graphs data input,
      // edit this to change the graph
      const chartdata = {
        chart: {
          type: "pie",
          options3d: {
            enabled: true,
            alpha: 45
          }
        },
        title: {
          text: "Global Count of Official Languages"
        },
        plotOptions: {
          pie: {
            innerSize: 100,
            depth: 45
          }
        },
        series: [
          {
            name: "Number of languages",
            data: pieData
          }
        ]
      };
      return chartdata;
    }
  }
};
</script>
