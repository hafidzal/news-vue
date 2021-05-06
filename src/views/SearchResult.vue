<template>
  <div class="result">
    <div v-if="result.length === 0">
      <center>
      <h1>search not found.</h1>
      <p>
        <a href="/">Go home?</a>
      </p>
      </center>
    </div>
    <div v-for="article in result" :key="article.title">
          <v-container>
          <v-card>
            <v-container @click="setVisitedHeadline(article)">
              <router-link style="text-decoration : none;"
            :to="{ name: 'title', query: { title: article.title, news: article } }">
              <span class="px-4 caption font-weight-bold grey--text">
                {{ article.source.name }}
              </span>
              <v-container fill-height fluid>
                  <v-layout>
                    <v-flex xs12 align-end d-flex>
                      <span class="h1 font-weight-bold black--text">
                        {{ article.title }}
                      </span>
                    </v-flex>
                  </v-layout>
                </v-container>
                <v-card-text>
                  <span class="body-2 font-weight-light grey--text">
                    {{ article.description }}
                  </span>
                </v-card-text>
              </router-link>
            </v-container>
          </v-card>
          </v-container>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Result',
  data() {
    return {
      result: '',
    };
  },
  mounted() {
    this.result = this.$store.getters.getSearchResult;
  },
  computed: {
    loading() {
      return this.$store.getters.loading;
    },
  },
  methods: {
    setVisitedHeadline(article) {
      this.$store.dispatch('setVisitedHeadline', article.title);
    },
  },
};
</script>

<style scoped>

  center {
    margin: 15vw;
  }

  h1 {
    color: var(--border);
    font-size: 2em;
  }

</style>
