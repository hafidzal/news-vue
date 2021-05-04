<template>
  <v-app class="home">
    <v-layout row align-center class="pl-6 pr-6 pt-6">
      <v-container>
        <FilterBar></FilterBar>
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
    </v-layout>
  </v-app>
</template>

<script>
// @ is an alias to /src
import NewsToolbar from '@/components/NewsToolbar.vue';
import VisitedHeadline from '@/components/VisitedHeadline.vue';
import FilterBar from '@/components/FilterBar.vue';

export default {
  name: 'Home',
  components: {
    NewsToolbar,
    VisitedHeadline,
    FilterBar,
  },
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
    setVisitedHeadline(article) {
      this.$store.dispatch('setVisitedHeadline', article.title);
    },
  },
};
</script>
