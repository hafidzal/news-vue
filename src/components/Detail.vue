<template>
    <v-app class="detail">
    <v-layout row align-center class="pl-6 pr-6">
      <h1>detail page</h1>
      <h1>{{ title }}</h1>
    </v-layout>
  </v-app>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>
