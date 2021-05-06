<template>
    <v-toolbar color="yellow lighten-2"
                dense
                flat
                height="75">
      <v-spacer></v-spacer>

      <v-btn
        class="ma-2"
        color="yellow darken-1"
        depressed
        @click="readMore"
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
            @click="setSelectedHeadline"
            >
            mdi-pencil
        </v-icon>
      </template>
      <v-card>
        <v-card-title class="headline grey lighten-2">
          Change Title Headline
        </v-card-title>

        <v-divider></v-divider>

        <v-card-text>
            <v-container>
                <v-row>
                    <v-col cols="12">
                        <v-text-field
                            single-line
                            filled
                            v-model="title"
                            :rules="[rules.required]"
                            :counter="12"
                            hint="Max. 12 characters"
                        ></v-text-field>
                        <p class='caption red--text'>{{ errors }}</p>
                    </v-col>
                </v-row>
            </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="changeHeadlineTitle"
          >
            Change
          </v-btn>
        </v-card-actions>
      </v-card>
      </v-dialog>
    </v-toolbar>
</template>

<script>
export default {
  props: {
    selectedHeadline: Object,
  },
  data() {
    return {
      drawer: true,
      dialog: false,
      changeHeadline: '',
      title: '',
      rules: {
        required: (value) => !!value || 'Required.',
      },
      errors: '',
    };
  },
  methods: {
    setSelectedHeadline() {
      this.$store.dispatch('setSelectedHeadline', this.selectedHeadline.title);
    },
    changeHeadlineTitle() {
      if (!this.title) {
        this.errors = 'Title required.';
      } else if (this.title.length > 12) {
        this.errors = 'Title max. 12 characters';
      } else {
        this.$store.dispatch('changeHeadlineTitle', this.title);
      }
    },
    readMore() {
      this.$router.push({
        name: 'title',
        query: { title: this.selectedHeadline.title, news: this.selectedHeadline },
      });
    },
  },
};
</script>
