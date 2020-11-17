<template>
  <div>
    <p v-if="$fetchState.pending">Fetching posts...</p>
    <p v-else-if="$fetchState.error">
      Error while fetching weather: {{ $fetchState.error.message }}... baseURL =
      {{ $http.baseURL }}
      ... whole http = {{ $http }}
    </p>
    <v-row v-else>
      <v-col cols="auto">
        <v-radio-group v-model="degreeRadioGroup" @change="fetchWeather()">
          <v-radio key="C" label="°Celcius" value="C"></v-radio>
          <v-radio key="F" label="°Fahrenheit" value="F"></v-radio>
        </v-radio-group>

        <v-text-field
          v-model="searchLocation"
          label="Search 'City, Country' or 'Postal Code'"
          outlined
          shaped
          @keyup.enter="fetchWeather()"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="8">
        <v-card class="mx-auto" max-width="400">
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="headline">
                {{ weather[0].current.observationpoint }}
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ weather[0].current.shortday }}, {{ time }},
                {{ weather[0].current.skytext }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-card-text>
            <v-row align="center">
              <v-col class="display-3" cols="5">
                {{ weather[0].current.temperature }}&deg;{{
                  weather[0].location.degreetype
                }}
              </v-col>
              <v-col cols="2">
                feels like {{ weather[0].current.feelslike }}&deg;{{
                  weather[0].location.degreetype
                }}
              </v-col>
              <v-col cols="5">
                <v-img
                  :src="weather[0].current.imageUrl"
                  :alt="weather[0].current.skytext + ' image'"
                  width="92"
                ></v-img>
              </v-col>
            </v-row>
          </v-card-text>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-send</v-icon>
            </v-list-item-icon>
            <v-list-item-subtitle>
              {{ weather[0].current.winddisplay }}
            </v-list-item-subtitle>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-cloud-download</v-icon>
            </v-list-item-icon>
            <v-list-item-subtitle
              >Humidity:
              {{ weather[0].current.humidity }}%</v-list-item-subtitle
            >
          </v-list-item>
          <v-list class="transparent">
            <v-list-item v-for="item in weather[0].forecast" :key="item.day">
              <v-list-item-title>{{ item.day }}</v-list-item-title>

              <v-list-item-icon>
                <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-img
                      :src="
                        'http://blob.weather.microsoft.com/static/weather4/en-us/law/' +
                        item.skycodeday +
                        '.gif'
                      "
                      :alt="item.skytextday + ' image'"
                      width="92"
                      v-bind="attrs"
                      v-on="on"
                    ></v-img>
                  </template>
                  <span>{{ item.skytextday }}</span>
                </v-tooltip>
              </v-list-item-icon>
              <v-list-item-subtitle class="text-right"
                >Precip: {{ item.precip || '0' }}%</v-list-item-subtitle
              >
              <v-list-item-subtitle class="text-right"
                >{{ item.high }}&deg; /
                {{ item.low }}&deg;</v-list-item-subtitle
              >
            </v-list-item>
          </v-list>

          <v-divider></v-divider>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  async fetch() {
    await this.fetchWeather();
  },
  data() {
    return {
      weather: {},
      timeday: 0,
      labels: [],
      degreeRadioGroup: 'C',
      searchLocation: '',
    };
  },
  methods: {
    async fetchWeather() {
      this.weather = await this.$http.$post(
        `https://tenzinhub-api.glitch.me/api/weather`,
        {
          degree: this.degreeRadioGroup,
          location: this.searchLocation,
        }
      );
      this.time = moment(
        this.weather[0].current.date +
          ' ' +
          this.weather[0].current.observationtime
      ).format('LT');
      this.labels = [];
      this.weather[0].forecast.forEach((fc) => {
        this.labels.push(fc.shortday);
      });
    },
  },
};
</script>
