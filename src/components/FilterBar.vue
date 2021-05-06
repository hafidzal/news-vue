<template>
    <v-container fluid>
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
      this.$store.dispatch('setFilteredResult', this.selectFilter)
        .then(() => {
          this.$router.push(`/filter/${this.selectFilter}`);
        });
    },
  },
};
</script>
