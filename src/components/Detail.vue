<template>
    <v-app class="detail">
    <v-layout class="px-6 py-12">
      <v-container>
        <v-container class='py-0'>
          <p class='h1 font-weight-bold'>{{ $route.query.title }}</p>
        </v-container>
        <v-container class='py-0' v-if='$route.query.news.urlToImage'>
          <v-img
            :lazy-src='$route.query.news.urlToImage'
            max-height="350"
            max-width="600"
            :src='$route.query.news.urlToImage'
          ></v-img>
        </v-container>
        <v-container class='pb-0'>
          <p class='body-2 font-weight-light grey--text'>By
            <span class='body-2 font-weight-bold black--text'> {{ $route.query.news.author }}
            </span>
          </p>
        </v-container>
        <v-container class='py-0'>
          <span class="caption grey--text">
            <v-icon small
                    dark
                    color="yellow">
                    mdi-clock-time-four-outline
            </v-icon>  {{ formattingDate($route.query.news.publishedAt) }}
          </span>
        </v-container>
        <v-container>
          <p class="font-weight-light grey--text">
            {{ $route.query.news.content }}
          </p>
        </v-container>
      </v-container>
    </v-layout>
  </v-app>
</template>

<script>
// @ is an alias to /src
import dayjs from 'dayjs';

export default {
  name: 'Detail',
  methods: {
    formattingDate(dt) {
      return dayjs(dt).format('dddd, DD-MM-YYYY HH:mm');
    },
  },
};
</script>
