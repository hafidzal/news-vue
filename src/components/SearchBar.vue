<template>
    <v-container>
        <v-text-field
            class='shrink blue-grey darken-3 pt-4'
            height='25'
            rounded
            dense
            single-line
            prepend-inner-icon="mdi-magnify"
            :value="search"
            type="search"
            label='Search..'
            @keyup.enter="handleSearch"
          ></v-text-field>
    </v-container>
</template>

<script>
export default {
  methods: {
    handleSearch(e) {
      this.$store.dispatch('setSearch', e.target.value)
        .then(() => {
          this.$router.push(`/result/${e.target.value}`);
        });
    },
  },
};
</script>
