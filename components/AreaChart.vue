<template>
  <!-- An Area Graph using Highcharts -->
  <div class="w-full md:w-1/2 p-3">
    <vue-highcharts :options="chartdata" ref="areaCharts"></vue-highcharts>
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
      const result = this.resultSet.loadResponse.data;
      const data = [];
      const labels = [];
      const res = [];

      result.forEach(function(item) {
        labels.push(item["Country.count"]);
        data.push(parseFloat(item["Country.lifeexpectancy"]));

      });

      for (let i = 0; i < data.length; i++) {
        res.push({
          Continent: labels[i],
          Count: data[i]
        });
      }
      
      // This is the graphs data input,
      // edit this to change the graph

      const chartdata = {
        chart: {
          type: "area"
        },
        title: {
          text: "US and USSR nuclear stockpiles"
        },
        subtitle: {
          text:
            'Source: <a href="http://thebulletin.metapress.com/content/c4120650912x74k7/fulltext.pdf">' +
            "thebulletin.metapress.com</a>"
        },
        xAxis: {
          allowDecimals: false,
          labels: {
            formatter: function() {
              return this.value; // clean, unformatted number for year
            }
          }
        },
        yAxis: {
          title: {
            text: "Nuclear weapon states"
          },
          labels: {
            formatter: function() {
              return this.value;
            }
          }
        },
        tooltip: {
          pointFormat:
            "{series.name} produced <b>{point.y:,.0f}</b><br/>warheads in {point.x}"
        },
        plotOptions: {
          area: {
            pointStart: 1940,
            marker: {
              enabled: false,
              symbol: "circle",
              radius: 2,
              states: {
                hover: {
                  enabled: true
                }
              }
            }
          }
        },
        series: [
          {
            name: "Life Expectancy",
            data: data //add data here following highchart format
          },
        ]
      };
      return chartdata;
    }
  }
};
</script>
