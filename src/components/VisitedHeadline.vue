<template>
  <v-card
    width="450"
    class="mx-auto"
  >
    <v-list three-line v-if="visitedHeadline.length">
      <v-subheader>VISITED HEADLINE</v-subheader>
      <template v-for="(item) in visitedHeadline">
        <v-list-item :key="item">
          <v-list-item-content>
            <v-divider></v-divider>
            <v-list-item-title v-html="item"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
    <v-list-item v-else>History is empty</v-list-item>
  </v-card>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'VisitedHeadline',
  data() {
    return {
      visitedHeadline: '',
    };
  },
  mounted() {
    this.visitedHeadline = this.$store.getters.getVisitedHeadline;
  },
};
</script>
