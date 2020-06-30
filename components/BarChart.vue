<template>
  <!-- An Bar chart using Highcharts -->
  <div class="w-full md:w-1/2 p-3">
      <vue-highcharts :options="chartdata" ref="barChart"></vue-highcharts>
  </div>
</template>
<script>
// Importing Highcharts
import VueHighcharts from "vue2-highcharts";
import Highcharts from "highcharts";

export default {
  components: {
    VueHighcharts,
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
      const data = [];
      const fin = [];
      const labels = [];

      result.forEach(function(item) {
        labels.push(item["Country.continent"]);
        data.push(parseInt(item["Country.count"]));

      });

      for (let i = 0; i < data.length; i++) {
        fin.push({
          Continent: labels[i],
          Count: data[i]
        });
      }

      // This is the charts data input,
      // edit this to change the chart
      const chartdata = {
        chart: {
          type: "bar"
        },
        title: {
          text: "Global Country Count by Continent"
        },
        xAxis: {
          categories: labels,
          title: {
            text: null
          }
        },
        yAxis: {
          min: 0,
          title: {
            text: "Number of Countries",
            align: "high"
          },
          labels: {
            overflow: "justify"
          }
        },
        plotOptions: {
          bar: {
            dataLabels: {
              enabled: true
            }
          }
        },
        legend: {
          layout: "horizontal",
          align: "right",
          verticalAlign: "top",
          x: -40,
          y: 80,
          floating: true,
          borderWidth: 1,
          backgroundColor:
            (Highcharts.theme && Highcharts.theme.legendBackgroundColor) ||
            "#FFFFFF",
          shadow: true
        },
        credits: {
          enabled: false
        },
        series: [
          {
            name: "Current Data",
            data: data
          }
        ]
      };
      return chartdata;
    }
  }
};
</script>
