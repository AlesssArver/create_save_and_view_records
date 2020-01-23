<template>
  <div>
    <v-row>
      <v-spacer />
      <v-col>
        <div class="message">
          <h1>503</h1>
          <p>You have some issue with network.</p>
          <router-link :to="{ name: 'home' }">
            Back to the home page
          </router-link>
        </div>
      </v-col>
      <v-spacer />
    </v-row>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
}

.message {
  margin-top: 25vh;
  padding: 20px;
  background: #ededed;
  border-radius: 10px;
  color: #3b3b3b;
}
</style>