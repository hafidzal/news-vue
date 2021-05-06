<template>
  <v-card
    flat
    outlined
    width="450"
    class="mx-auto"
  >
    <v-list three-line>
        <v-container class='pa-0'>
          <v-container>
            <p class="h4 font-weight-bold black--text text-center"
              ><span class='pr-2'>
                <v-icon
                  small
                  dark
                  color='black'>
                  mdi-format-align-justify
                </v-icon>
                </span>
              Visited List</p>
          </v-container>
        <v-divider class=''></v-divider>
        <v-container v-if="visitedHeadline.length" class='pa-0'>
          <template v-for="(item) in visitedHeadline">
            <v-list-item :key="item">
              <v-list-item-content>
                <v-list-item-title v-html="item"></v-list-item-title>
                <v-divider></v-divider>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-container>
        <v-container v-else class='pa-0'>
            <p class='caption text-center pt-4'>empty.</p>
        </v-container>
        </v-container>
    </v-list>
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
