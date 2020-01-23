<template>
  <v-footer color="#33a5de" dark>
    <v-spacer />
    <p>
      {{ date | date("datetime") }}
    </p>
    <v-spacer />
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    date: new Date(),
    interval: null
  }),
  mounted() {
    this.interval = setInterval(() => {
      this.date = new Date();
    }, 86400000);
  }
};
</script>