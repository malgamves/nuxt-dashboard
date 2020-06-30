<template>
  <!-- A card to display cube.js data -->
  <div class="w-full  p-3">
    <div class="bg-white border rounded shadow p-2">
      <div class="flex flex-row items-center">
        <div class="flex-1 text-right md:text-center">
          <h5 class="font-bold uppercase text-gray-500">{{ title }}</h5>
          <h3 class="font-bold text-3xl">
            {{ chartdata }}
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    resultSet: {
      type: Object,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  computed: {
    chartdata() {
      // Storing cube.js query result
      const result = this.resultSet.loadResponse.data[0][
        "Countrylanguage.count"
      ];

      return result;
    }
  }
};
</script>
