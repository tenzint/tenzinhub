<template>
  <v-carousel
    cycle
    height="80vh"
    hide-delimiter-background
    :show-arrows="false"
    progress
    interval="4000"
    reverse-transition="fade-transition"
    transition="fade-transition"
  >
    <v-carousel-item key="0">
      <v-sheet :color="colors[0]" height="100%">
        <v-row class="fill-height" align="center" justify="center">
          <div class="display-3">
            My
            <a target="_blank" href="https://tenzint.web.app"
              >Personal Web app</a
            >
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
    <v-carousel-item key="1">
      <v-sheet :color="colors[1]" height="100%">
        <v-row class="fill-height" align="center" justify="center">
          <div class="display-3">
            The
            <a target="_blank" href="https://github.com/tenzint/tenzinhub"
              >Repository</a
            >
            of Tenzin Hub
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
    <v-carousel-item key="2">
      <v-sheet :color="colors[2]" height="100%">
        <v-row class="fill-height" align="center" justify="center">
          <div class="display-3">
            Static
            <a target="_blank" href="https://tenzint.github.io/tenzinhub/"
              >'Github Pages'</a
            >
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
    <v-carousel-item key="3">
      <v-sheet :color="colors[3]" height="100%">
        <v-row class="fill-height" align="center" justify="center">
          <div class="display-3">
            My <a href="/tenzinhub/weather">'Weather'</a> page
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
    <v-carousel-item key="4">
      <v-sheet :color="colors[4]" height="100%">
        <v-row class="fill-height" align="center" justify="center">
          <div class="display-3">
            My <a href="/tenzinhub/ttc">'TTC Transit'</a> page
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
      ],
    };
  },
};
</script>

<style scoped>
a,
a:link,
a:visited {
  color: #fce4ec;
  text-decoration: underline;
  font-weight: bold;
}
a:hover {
  color: #343434;
  text-decoration: none;
  font-weight: bold;
}
</style>
