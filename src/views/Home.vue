<template>
  <v-app class="home">
    <h1>{{ angka }}</h1>
    <v-btn @click="added"> add </v-btn>
    <h3>{{ headline }}</h3>
    <v-layout row align-center class="pl-6 pr-6">
      <div v-for="article in news" :key="article.title">
        <v-card class="my-3" hover>
           <v-container fill-height fluid>
              <v-layout>
                <v-flex xs12 align-end d-flex>
                  <span class="headline">{{ article.title }}</span>
                </v-flex>
              </v-layout>
            </v-container>
            <v-card-text>
              {{ article.description }}
            </v-card-text>
        </v-card>
      </div>
    </v-layout>
  </v-app>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data() {
    return {
      angka: 1,
      headline: '',
    };
  },
  computed: {
    news() {
      return this.$store.getters.getNews;
    },
  },
  mounted() {
    this.headline = this.$store.getters.getCurrentHeadline;
  },
  methods: {
    added() {
      this.angka += 1;
    },
  },
};
</script>
