<template>
    <v-container fluid>
        <h1>filter:</h1>
        <v-select
          v-model="selectFilter"
          :items="filterList"
          item-text="name"
          :menu-props="{ maxHeight: '400' }"
          label="Select"
          hint="Pick your favorite source"
          persistent-hint
          @change="handleFilter"
        ></v-select>
        {{ selectFilter }}
    </v-container>
</template>

<script>

export default {
  name: 'Filter',
  data() {
    return {
      selectFilter: [],
    };
  },
  computed: {
    filterList() {
      return this.$store.getters.getFilterList;
    },
  },
  methods: {
    handleFilter() {
      this.$store.dispatch('setFilteredResult', this.selectFilter);
    },
  },
};
</script>
