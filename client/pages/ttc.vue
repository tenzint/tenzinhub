<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="6">
        <v-sheet width="80%" min-height="80vh" color="pink lighten-5">
        </v-sheet>
      </v-col>
      <v-col cols="6">
        <v-card color="red lighten-2" dark>
          <v-card-title class="headline red lighten-3">
            Choose stops
          </v-card-title>
          <v-card-text>
            <v-autocomplete
              v-model="tag"
              :items="allLocations"
              color="white"
              item-text="$.title"
              item-value="$.tag"
              label="Route"
            ></v-autocomplete>
          </v-card-text>
          <v-divider></v-divider>
          <v-list-item v-for="item in apiRouteData.direction" :key="item.$.tag">
            <v-list-item-content>
              <v-list-item-title
                >{{ item.$.branch }} {{ item.$.name }}</v-list-item-title
              >
              <v-radio color="purple" :value="item.$.tag"></v-radio>
              <v-autocomplete
                :items="item.stop"
                color="white"
                item-text="$.tag"
                item-value="$.tag"
                label="Route"
              ></v-autocomplete>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  async fetch() {
    await this.fetchAllRoutes();
  },
  data() {
    return {
      allLocations: [],
      apiRouteData: {},
      timeday: 0,
      labels: [],
      degreeRadioGroup: 'C',
      searchLocation: '',
      tag: '',
    };
  },
  methods: {
    async fetchAllRoutes() {
      this.allLocations = await this.$http.$get(`/ttc/routes/all`).message;
      console.log('All locations = ', this.allLocations);
    },
    async fetchSpecificRoute() {
      this.apiRouteData = await this.$http.$get(`/ttc/routes/specific`, {
        routeTag: this.tag,
      }).message.body.route[0];
    },
  },
};
</script>

<style></style>
