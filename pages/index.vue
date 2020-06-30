<template>
  <BaseContainer>
    <div class="flex justify-center">

      <!-- Using Cube.js Query Renderer to pass query results as props -->
      <query-renderer :cubejs-api="cubejsApi" :query="languageCountQuery">
        <template v-slot="{ loading, resultSet }">
          <LanguageCard
            title="Number of Languages"
            v-if="!loading"
            :result-set="resultSet"
          />
        </template>
      </query-renderer>

      <!-- Using Cube.js Query Renderer to pass query results as props -->
      <query-renderer :cubejs-api="cubejsApi" :query="cityQuery">
        <template v-slot="{ loading, resultSet }">
          <CityCard
            title="Number of Cities"
            v-if="!loading"
            :result-set="resultSet"
          />
        </template>
      </query-renderer>

      <!-- Using Cube.js Query Renderer to pass query results as props -->
      <query-renderer :cubejs-api="cubejsApi" :query="countryQuery">
        <template v-slot="{ loading, resultSet }">
          <CountryCard
            title="Number of Countries"
            v-if="!loading"
            :result-set="resultSet"
          />
        </template>
      </query-renderer>
    </div>

    <div class="flex flex-row flex-wrap flex-grow mt-2">

      <!-- Using Cube.js Query Renderer to pass query results as props -->
      <query-renderer :cubejs-api="cubejsApi" :query="continentQuery">
        <template v-slot="{ loading, resultSet }">
          <Bar v-if="!loading" :result-set="resultSet" />
        </template>
      </query-renderer>

      <!-- Using Cube.js Query Renderer to pass query results as props -->
      <query-renderer :cubejs-api="cubejsApi" :query="languageQuery">
        <template v-slot="{ loading, resultSet }">
          <Pie v-if="!loading" :result-set="resultSet" />
        </template>
      </query-renderer>
    </div>
  </BaseContainer>
</template>

<script>
// Importing Cube.js client libraries
import cubejs from "@cubejs-client/core";
import { QueryRenderer } from "@cubejs-client/vue";

// Importing our application components
import BaseContainer from "~/components/containers/Base.vue";
import Bar from "~/components/BarChart.vue";
import Pie from "~/components/PieChart.vue";
import CityCard from "~/components/CityCard.vue";
import CountryCard from "~/components/CountryCard.vue";
import LanguageCard from "~/components/LanguageCard.vue";


// Our Cube.js Key and API URL
const cubejsApi = cubejs(
  "<API KEY>",
  { apiUrl: "http://localhost:4000/cubejs-api/v1" }
);

export default {
  components: {
    Bar,
    Pie,
    QueryRenderer,
    BaseContainer,
    CityCard,
    CountryCard,
    LanguageCard
  },
  data() {
    return {
      cubejsApi,
      
      // Defining Cube.js querys
      continentQuery: {
        measures: ["Country.count"],
        dimensions: ["Country.continent"]
      },
      cityQuery: {
        measures: ["City.count"]
      },
      languageCountQuery: {
        measures: ["Countrylanguage.count"]
      },
      countryQuery: {
        measures: ["Country.count"]
      },
      languageQuery: {
        measures: ["Countrylanguage.count"],
        dimensions: ["Countrylanguage.isofficial"]
      }
    };
  },
  methods: {},
  mounted() {}
};
</script>
