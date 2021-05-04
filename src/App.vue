<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      height="110"
    >
    <SearchBar></SearchBar>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue';

export default {
  name: 'App',
  mounted() {
    this.$store.dispatch('setNews');
    this.$store.dispatch('setFilterList');
  },
  components: {
    SearchBar,
  },
  data: () => ({
    //
  }),
};
</script>
