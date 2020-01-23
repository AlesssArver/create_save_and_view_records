import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import vuetify from "./plugins/vuetify";
import store from "@/store";
import dateFilter from "@/filters/date-filter";
import "nprogress/nprogress.css";

Vue.filter("date", dateFilter);

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount("#app");
