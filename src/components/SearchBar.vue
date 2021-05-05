<template>
    <v-container class="pl-16 pr-16">
        <v-text-field
            filled
            rounded
            dense
            prepend-inner-icon="mdi-magnify"
            :value="search"
            type="search"
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
