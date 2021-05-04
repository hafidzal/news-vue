<template>
    <v-container fluid>
        <h1>filter:</h1>
        <v-select
          v-model="e6"
          :items="filterList"
          item-text="name"
          :menu-props="{ maxHeight: '400' }"
          label="Select"
          multiple
          hint="Pick your favorite source"
          persistent-hint
        ></v-select>
    </v-container>
</template>

<script>
export default {
  name: 'Filter',
  data() {
    return {
      filterList: [],
    };
  },
  mounted() {
    this.filterList = this.$store.getters.getFilterList;
  },
};
</script>
