<template>
  <div>
    <v-app-bar app color="#33a5de" class="nav">
      <v-snackbar
        v-model="snackbar"
        top
        v-for="notification in notifications"
        :key="notification.id"
        :class="notificationTypeClass"
      >
        {{ notification.message }}
      </v-snackbar>
      <v-btn :to="{ name: 'home' }" class="btn-nav" depressed>
        Home
      </v-btn>
      <v-btn :to="{ name: 'requests' }" class="btn-nav" depressed>
        Requests
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      timeout: 5000,
      color: "",
      mode: "",
      snackbar: true,
      text: "Hello, I'm a snackbar"
    };
  },
  computed: {
    ...mapState(["notifications"]),
    notificationTypeClass() {
      return `-text-${this.notification.type}`;
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}

.btn-nav {
  background: transparent !important;
  border-radius: 30px;
  color: #fff !important;
}
</style>
