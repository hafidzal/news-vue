<template>
    <v-toolbar color="yellow"
                dense
                flat
                height="75">
        <!-- <v-toolbar-side-icon @click="drawer = !drawer"
            class="white--text">
        </v-toolbar-side-icon> -->
        <v-toolbar-title>News App</v-toolbar-title>
        <v-spacer></v-spacer>

      <v-btn
        class="ma-2"
        color="yellow darken-1"
        flat
      >
        Read More
        <v-icon
          dark
          left
          class="ml-2"
        >
          mdi-arrow-right
        </v-icon>
      </v-btn>

      <v-dialog v-model="dialog"
        max-width="600"
        >
        <template v-slot:activator="{ on, attrs }">
        <v-icon
            dark
            left
            class="ml-2"
            color="black"
            v-bind="attrs"
            v-on="on"
            >
            mdi-pencil
        </v-icon>
      </template>
      <v-card>
        <v-card-title class="headline grey lighten-2">
          Change Title Headline
        </v-card-title>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
      </v-dialog>
    </v-toolbar>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      dialog: false,
    };
  },
};
</script>
