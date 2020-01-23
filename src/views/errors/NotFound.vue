<template>
  <div>
    <v-row>
      <v-spacer />
      <v-col>
        <div class="message">
          <h1>404</h1>
          <p>This page is not exist</p>
          <router-link :to="{ name: 'home' }">
            Back to the home page
          </router-link>
        </div>
      </v-col>
      <v-spacer />
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    code: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}

.message {
  margin-top: 25vh;
  padding: 10px;
  width: 300px;
  background: #ededed;
  border-radius: 10px;
  text-align: center;
  color: #3b3b3b;
}
</style>