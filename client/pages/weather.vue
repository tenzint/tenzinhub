<template>
  <div>
    <h1>Weather Info</h1>
    <p v-if="$fetchState.pending">Fetching posts...</p>
    <p v-else-if="$fetchState.error">
      Error while fetching weather: {{ $fetchState.error.message }}... baseURL =
      {{ $http.baseURL }}
    </p>
    <p v-else>{{ weather }}</p>
  </div>
</template>

<script>
export default {
  async fetch() {
    this.weather = await this.$http.$post(`/weather`)
  },
  data() {
    return {
      weather: {},
    }
  },
}
</script>
