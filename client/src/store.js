import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    auth: "",
    user: {
      info: {},
      guilds: {}
    },
    count: 0
  },
  mutations: {
    setAuthToken(state, data) {
      state.auth = data;
    },
    setUserData(state, data) {
      state.user = data;
    },
    increment(state) {
      state.count++;
    },
    logout: state => {
      (state.auth = ""), (state.user = {});
    }
  },
  actions: {
    auth({ commit }, data) {
      commit("setAuthToken", data);
    },
    login({ commit }, data) {
      commit("setUserData", data);
    },
    logout({ commit }) {
      commit("logout");
    },
    increment({ commit }) {
      commit("increment");
    }
  },
  getters: {
    getAuth: state => {
      return state.auth;
    },
    getUsername: state => {
      if (Object.keys(state.user).length !== 0) {
        return state.user.info.username;
      } else {
        return null;
      }
    },
    getUserAvatar: state => {
      return `https://cdn.discordapp.com/avatars/${state.user.info.id}/${state.user.info.avatar}.png`;
    }
  },
  plugins: [createPersistedState()]
});