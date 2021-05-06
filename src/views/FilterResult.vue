<template>
  <div class="result">
    <div v-if="result.length === 0">
      <center>
      <h1>sorry, not found.</h1>
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
                :to="`/${article.title}`">
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
    this.result = this.$store.getters.getFilterResult;
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
