<template>
  <v-app class="home">
    <v-container v-if='loading' class='pt-6'>
        <vueSpinner></vueSpinner>
    </v-container>
    <v-container v-else>
      <v-row>
        <v-col cols='12' sm='12' md='3' lg='3'>
          <v-layout>
            <v-container>
                <VisitedHeadline></VisitedHeadline>
            </v-container>
          </v-layout>
        </v-col>
        <v-col cols='12' sm='12' md='9' lg='9'>
          <v-layout row align-center class="pl-6 pr-6 pt-6">
              <v-container>
                <v-row>
                  <v-col cols='12' sm='12' md='6' lg='6'>
                    <v-row>
                      <FilterBar></FilterBar>
                    </v-row>
                  </v-col>

                  <v-col cols='12' sm='12' md='6' lg='6'>
                    <v-row justify="end">
                      <v-btn
                        depressed
                        color="error"
                        @click="wrongPage"
                      >
                        Wrong Api Call
                      </v-btn>
                    </v-row>
                  </v-col>
                </v-row>
              </v-container>
              <v-container fluid grid-list-xl class='pa-0 pt-4'>
                  <div v-for="article in news" :key="article.title" class="py-4">
                      <!-- <v-container fluid> -->
                      <NewsToolbar :selectedHeadline="article"></NewsToolbar>
                        <v-card flat tile outlined>
                          <v-container class="py-6" fluid @click="setVisitedHeadline(article)">
                            <router-link style="text-decoration : none;"
                          :to="{ name: 'title', query: { title: article.title, news: article } }">
                              <span class="px-4 caption font-weight-bold grey--text">
                                {{ article.source.name }}
                              </span>
                              <v-container fill-height fluid class="pa-0 px-4">
                                <v-layout>
                                  <v-flex xs12 align-end d-flex>
                                    <span class="h1 font-weight-bold black--text">
                                      {{ article.title }}
                                    </span>
                                  </v-flex>
                                </v-layout>
                              </v-container>
                              <v-container class="pa-0">
                                <v-card-text>
                                  <span class="body-2 font-weight-light grey--text">
                                    {{ article.description }}
                                  </span>
                                </v-card-text>
                              </v-container>
                              <span class="px-4 caption grey--text">
                                <v-icon
                                  small
                                  dark
                                  color="yellow"
                                  >
                                  mdi-clock-time-four-outline
                                </v-icon>  {{ formattingDate(article.publishedAt) }}
                              </span>
                            </router-link>
                          </v-container>
                        </v-card>
                      <!-- </v-container> -->
                  </div>
              </v-container>
          </v-layout>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
// @ is an alias to /src
import NewsToolbar from '@/components/NewsToolbar.vue';
import VisitedHeadline from '@/components/VisitedHeadline.vue';
import FilterBar from '@/components/FilterBar.vue';
import Spinner from 'vue-simple-spinner';
import dayjs from 'dayjs';

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
    formattingDate(dt) {
      return dayjs(dt).format('dddd, DD-MM-YYYY HH:mm');
    },
  },
};
</script>
