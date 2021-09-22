import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    darkmode: false,
    error: "",
    auth: "",
    loggedIn: false,
    user: {
      isLeadership: false,
      info: {},
      guilds: {}
    },
    items: {
      list: []
    },
    regions: {
      list: []
    },
    events: {
      list: [],
      single: {}
    }
  },
  mutations: {
    setAuthToken(state, data) {
      state.auth = data;
    },
    setUserData(state, data) {
      if (data.message) {
        state.error =
          "You must be a member of 1st RL to use this app. Speak to an officer if you are a member.";
        state.loggedIn = false;
        state.user = {};
      } else {
        state.error = "";
        state.loggedIn = true;
        state.user = data;
      }
    },
    setItemsList(state, list) {
      state.items.list = list;
    },
    setEventsList(state, list) {
      state.events.list = list;
    },
    setEvent(state, event) {
      state.events.single = event;
    },
    setRegionsList(state, list) {
      state.regions.list = list;
    },
    increment(state) {
      state.count++;
    },
    setLeadership(state, bool) {
      state.user.isLeadership = bool;
    },
    logout: state => {
      state.loggedIn = false;
      state.auth = "";
      state.user = {};
    },
    error(state, data) {
      state.error = data.message;
    },
    toggleDarkmode: state => {
      state.darkmode = !state.darkmode;
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
    setLeadership({ commit }, bool) {
      commit("setLeadership", bool);
    },
    setItemsList({ commit }, data) {
      commit("setItemsList", data);
    },
    setRegionsList({ commit }, data) {
      commit("setRegionsList", data);
    },
    setEventsList({ commit }, data) {
      commit("setEventsList", data);
    },
    setEvent({ commit }, data) {
      commit("setEvent", data);
    },
    error({ commit }, data) {
      commit("error", data);
    },
    toggleDarkmode({ commit }) {
      commit("toggleDarkmode");
    }
  },
  getters: {
    isLoggedIn: state => {
      return state.loggedIn;
    },
    isLeadership: state => {
      return state.user.isLeadership;
    },
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
    },
    getItemsList: state => {
      return state.items.list;
    },
    getEventsList: state => {
      return state.events.list;
    },
    getEventInfo: state => {
      return state.events.single;
    },
    getRegionsList: state => {
      return state.regions.list;
    },
    getError: state => {
      return state.error;
    },
    getUserRoles: state => {
      return state.user.roles;
    },
    getDarkMode: state => {
      return state.darkmode;
    }
  },
  plugins: [createPersistedState()]
});
