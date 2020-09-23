<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="6">
        <v-card
          class="mx-auto"
          width="80%"
          height="80vh"
          color="teal accent-3"
          hover
        >
          <v-card-title
            class="headline teal accent-4 grey--text text--lighten-2 px-auto"
            >Predictions</v-card-title
          >
          <v-card-text
            v-if="!predictionsData || Object.keys(predictionsData).length === 0"
            >Select a route stop to enable predictions.</v-card-text
          >
          <div v-else>
            <v-card-title>
              {{ predictionsData.$.routeTitle }}
            </v-card-title>
            <div v-if="!predictionsData.direction">
              <v-subheader>{{
                predictions.$.dirTitleBecauseNoPredictions
              }}</v-subheader>
              <v-divider></v-divider>
              <v-subheader>Slow down to get predictions</v-subheader>
              <v-subheader>API accessed at {{ this.time }}</v-subheader>
            </div>
            <div v-else>
              <v-subheader>{{
                predictionsData.direction[0].$.title
              }}</v-subheader>
              <v-subheader>API accessed at {{ this.time }}</v-subheader>
              <v-divider></v-divider>
              <template
                v-for="(item, i) in predictionsData.direction[0].prediction"
              >
                <v-list-item :key="i">
                  <v-list-item-icon>
                    <v-icon>mdi-bus</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title
                      ><strong
                        >{{ item.$.minutes }}:{{ item.$.seconds % 60 }}</strong
                      >
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-divider :key="'prediction-' + i"></v-divider>
              </template>
            </div>
          </div>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card color="light-green darken-3" dark height="80vh" hover>
          <v-card-title class="headline light-green darken-4 px-auto">
            Choose stops
          </v-card-title>
          <v-card-text>
            <v-autocomplete
              v-model="routeTag"
              :items="allLocations"
              class="px-4"
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
          <v-radio-group
            v-model="tagDirection"
            mandatory
            @change="fetchPredictions()"
          >
            <v-row v-for="item in ttcStops" :key="item.$.tag">
              <v-col cols="auto">
                <v-autocomplete
                  v-model="routeDirection[item.$.tag]"
                  :items="item.stop"
                  class="ml-8"
                  color="white"
                  item-text="$.stopId"
                  item-value="$.stopId"
                  :label="item.$.branch + ' ' + item.$.name + ' - Stop'"
                  auto-select-first
                  @change="fetchPredictions()"
                ></v-autocomplete>
                <!-- 
                  item-text="$.title" -->
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
import moment from 'moment';

export default {
  async fetch() {
    await this.fetchAllRoutes();
  },
  data() {
    return {
      time: '',
      allLocations: [],
      apiRouteData: {},
      ttcStops: [],
      timeday: 0,
      labels: [],
      degreeRadioGroup: 'C',
      searchLocation: '',
      routeTag: '',
      // --- Route specific below ---
      item: 1,
      tagDirection: '',
      routeDirection: {},
      // --- Predictions below ---
      predictionsData: {},
    };
  },
  methods: {
    async fetchAllRoutes() {
      const apiAllLocations = await this.$http.$get(`/ttc/routes/all`);
      this.allLocations = apiAllLocations.message;
    },
    async fetchSpecificRoute() {
      const apiData = await this.$http.$post(`/ttc/routes/specific`, {
        routeTag: this.routeTag,
      });
      this.apiRouteData = apiData.message;
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
      });
    },
    async fetchPredictions() {
      console.log('--- fetching predictions ---');
      if (!this.routeDirection[this.tagDirection]) {
        return;
      }
      console.log('routeTag = ', this.routeTag);
      console.log('stop ID = ', this.routeDirection[this.tagDirection]);
      const apiPredictions = await this.$http.$post('/ttc/predictions', {
        stopId: this.routeDirection[this.tagDirection],
        routeTag: this.routeTag,
      });
      this.predictionsData = apiPredictions.message;
      this.time = moment().format('LTS');
    },
  },
};
</script>

<style></style>
