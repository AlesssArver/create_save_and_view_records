<template>
  <div>
    <v-row>
      <v-col />
      <v-col>
        <v-card
          class="card"
          v-for="request in requests"
          :key="request.id"
          :request="request"
        >
          <v-card-title>
            {{ request.name }}
          </v-card-title>
          <v-card-subtitle>
            {{ request.tel }}
          </v-card-subtitle>
          <hr>
          <v-card-text>
            {{ request.comment }}
          </v-card-text>
        </v-card>
      </v-col>
      <v-col />
    </v-row>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  created() {
    this.$store.dispatch("fetchRequests");
  },
  computed: {
    ...mapState(["requests"])
  }
};
//
</script>

<style scoped>
.card {
  margin: 30px 0;
  border-radius: 0;
  box-shadow: 0 0 15px 1px #c2c2c2;
}
</style>
