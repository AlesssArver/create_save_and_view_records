import Vue from "vue";
import Vuex from "vuex";
import Axios from "@/services/Axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    requests: []
  },
  mutations: {
    ADD_REQUEST(state, request) {
      state.requests.push(request);
    },
    SET_REQUESTS(state, requests) {
      state.requests = requests;
    },
    SET_REQUESTS_ALL(state, requestsAll) {
      state.requestsAll = requestsAll;
    }
  },
  actions: {
    createRequest({ commit }, request) {
      return Axios.postRequest(request).then(() => {
        commit("ADD_REQUEST", request);
      });
    },
    fetchRequests({ commit }) {
      Axios.getRequests()
        .then(response => {
          commit("SET_REQUESTS", response.data);
        })
        .catch(error => {
          console.log("There was an error:", error.response);
        });
    }
  }
});
