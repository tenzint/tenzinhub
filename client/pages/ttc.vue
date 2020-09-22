<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="6">
        <v-sheet width="80%" min-height="80vh" color="pink lighten-5">
        </v-sheet>
      </v-col>
      <v-col cols="6">
        <v-card color="red lighten-2" dark height="80vh" hover>
          <v-card-title class="headline red lighten-3">
            Choose stops
          </v-card-title>
          <v-card-text>
            <v-autocomplete
              v-model="routeTag"
              :items="allLocations"
              color="white"
              item-text="$.title"
              item-value="$.tag"
              item-color="red lighten-3"
              label="Route"
              auto-select-first
              eager
              @change="fetchSpecificRoute()"
            ></v-autocomplete>
          </v-card-text>
          <v-divider key="lsjflsjfs"></v-divider>
          <v-radio-group>
            <v-row v-for="item in ttcStops" :key="item.$.tag">
              <v-col cols="auto">
                <v-autocomplete
                  :items="item.stop"
                  color="white"
                  item-text="$.title"
                  item-value="$.stopId"
                  label="Route"
                  auto-select-first
                ></v-autocomplete>
              </v-col>
              <v-col cols="auto"
                ><v-radio
                  color="purple"
                  :label="item.$.branch + ' ' + item.$.name"
                  :value="item.$.tag"
                ></v-radio
              ></v-col>
            </v-row>
          </v-radio-group>
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
      ttcStops: [],
      timeday: 0,
      labels: [],
      degreeRadioGroup: 'C',
      searchLocation: '',
      routeTag: '',
      item: 1,
    };
  },
  methods: {
    async fetchAllRoutes() {
      const apiAllLocations = await this.$http.$get(`/ttc/routes/all`);
      this.allLocations = apiAllLocations.message;
      console.log('All locations = ', apiAllLocations);
    },
    async fetchSpecificRoute() {
      console.log('------- fetchSpecificRoute ----- called ------');
      const apiData = await this.$http.$post(`/ttc/routes/specific`, {
        routeTag: this.routeTag,
      });
      this.apiRouteData = apiData.message[0];

      this.ttcStops = []; // reset ttcStops
      // const directionData = this.apiRouteData.direction;
      let dirTemp = {};
      this.apiRouteData.direction.forEach((dirIns) => {
        dirTemp = {};
        dirTemp.$ = dirIns.$;
        dirTemp.stop = [];
        dirIns.stop.forEach((stopTag) => {
          const resultStop = this.apiRouteData.stop.find(
            (stopInfo) => stopInfo.$.tag === stopTag.$.tag
          );
          dirTemp.stop.push(resultStop);
        });
        this.ttcStops.push(dirTemp);
        console.log('ttcStops = ', this.ttcStops);
      });
    },
    async fetchPredictions() {
      console.log('----fetching Predictions ----');
      const apiPredictions = await this.$http.$post('/ttc/predictions');
      console.log(apiPredictions);
    },
  },
};
</script>

<style></style>
