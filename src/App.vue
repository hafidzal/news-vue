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
      <v-container>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue';
// import Spinner from 'vue-simple-spinner';

export default {
  name: 'App',
  mounted() {
    this.$store.dispatch('setNews');
  },
  components: {
    SearchBar,
    // vueSpinner: Spinner,
  },
};
</script>
