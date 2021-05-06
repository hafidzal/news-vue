<template>
  <v-app>
    <v-app-bar
      app
      flat
      class='yellow lighten-2'
      dark
      height='100'
    >
    <v-flex>
      <v-container>
        <v-row>
          <v-col cols='6' sm='6' md='6' lg='6'>
            <v-row>
              <span class='display-1 font-weight-bold black--text pt-4 pl-2'>
                <a @click='home' style="text-decoration : none; color: black;">WML &bull; NEWS
                </a>
              </span>
            </v-row>
          </v-col>

          <v-col cols='6' sm='6' md='6' lg='6'>
            <v-row justify="end">
              <SearchBar></SearchBar>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-flex>
    </v-app-bar>
    <v-main class='blue-grey lighten-5'>
      <v-container>
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
  },
  components: {
    SearchBar,
  },
  methods: {
    home() {
      this.$router.push({
        name: 'Home',
      });
    },
  },
};
</script>
