<template>
  <v-select
    v-model="selectFilter"
    :items="filterList"
    item-text="name"
    :menu-props="{ maxHeight: '400'}"
    label="Pick you favourite source news"
    prepend-inner-icon="mdi-filter-variant"
    persistent-hint
    solo
    outlined
    flat
    @change="handleFilter"
  ></v-select>
</template>

<script>

export default {
  name: 'FilterBar',
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
