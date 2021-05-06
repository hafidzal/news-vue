<template>
  <v-app class="home">
    <v-container v-if='loading' class='pt-6'>
        <vueSpinner></vueSpinner>
    </v-container>
    <v-layout v-else row align-center class="pl-6 pr-6 pt-6">
        <v-container>
          <FilterBar></FilterBar>
          <v-btn
            depressed
            color="error"
            @click="wrongPage"
          >
            Wrong Api Call
          </v-btn>
        </v-container>
        <v-container>
          <VisitedHeadline></VisitedHeadline>
        </v-container>
        <div v-for="article in news" :key="article.title">
            <v-container>
            <NewsToolbar :selectedHeadline="article"></NewsToolbar>
            <v-card>
              <v-container @click="setVisitedHeadline(article)">
                <router-link style="text-decoration : none;"
                  :to="{ name: 'title', query: { title: article.title, news: article } }">
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
    </v-layout>
  </v-app>
</template>

<script>
// @ is an alias to /src
import NewsToolbar from '@/components/NewsToolbar.vue';
import VisitedHeadline from '@/components/VisitedHeadline.vue';
import FilterBar from '@/components/FilterBar.vue';
import Spinner from 'vue-simple-spinner';

export default {
  name: 'Home',
  components: {
    NewsToolbar,
    VisitedHeadline,
    FilterBar,
    vueSpinner: Spinner,
  },
  computed: {
    loading() {
      return this.$store.getters.loading;
    },
    news() {
      return this.$store.getters.getNews;
    },
  },
  mounted() {
    this.headline = this.$store.getters.getCurrentHeadline;
  },
  methods: {
    setVisitedHeadline(article) {
      this.$store.dispatch('setVisitedHeadline', article.title);
    },
    wrongPage() {
      this.$router.push({
        name: 'wrong-api',
      });
    },
  },
};
</script>
