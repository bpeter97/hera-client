<style scoped>
@import "./TopnavComponent.css";

.navbar-brand-dark {
  color: white !important;
}

.nav-link-dark {
  color: white !important;
}
.nav-link-dark.disabled {
  color: white !important;
}
.user-name-dark {
  color: white !important;
}
</style>

<script>
export default {
  name: "TopnavComponent",
  components: {},
  props: {
    links: Array
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/");
    },
    handleDarkmode() {
      this.$store.dispatch("toggleDarkmode");
    },
    navLinkClass(link) {
      return {
        "nav-link": true,
        disabled: link.disabled ? "disabled" : "",
        "nav-link-dark": this.$store.getters.getDarkMode ? true : false
      };
    }
  },
  data() {
    return {
      userInfo: {}
    };
  },
  mounted() {},
  created() {},
  computed: {
    navClass: function() {
      return {
        navbar: true,
        "navbar-expand-lg": true,
        "navbar-light": this.$store.getters.getDarkMode ? false : true,
        "bg-light": this.$store.getters.getDarkMode ? false : true,
        "navbar-dark": this.$store.getters.getDarkMode ? true : false,
        "bg-dark": this.$store.getters.getDarkMode ? true : false
      };
    },
    brandClass: function() {
      return {
        "navbar-brand": true,
        "navbar-brand-dark": this.$store.getters.getDarkMode ? true : false
      };
    },
    usernameClass: function() {
      return {
        "d-none": true,
        "d-md-inline-block": true,
        "user-name-dark": this.$store.getters.getDarkMode ? true : false
      };
    },
    heraLogo: function() {
      let img;
      if (this.$store.getters.getDarkMode) {
        img = require("./../../assets/heralogo-light.png");
      } else {
        img = require("./../../assets/heralogo.png");
      }
      return img;
    }
  },
  watch: {}
};
</script>

<template>
  <div class="main-navbar sticky-top bg-white">
    <nav v-bind:class="navClass">
      <div class="container-fluid">
        <a v-bind:class="brandClass" href="/">
          <img
            v-bind:src="heraLogo"
            alt="Hera Logo"
            class="d-inline-block align-middle mr-1"
            style="max-width: 25px;"
          />
          <span class="navbar-title align-middle">
            Hera
          </span>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto mb-2 mb-lg-0" id="header-nav">
            <li
              class="nav-item"
              v-for="(link, index) in links"
              v-bind:item="link"
              v-bind:index="index"
              v-bind:key="link.label"
            >
              <a
                :href="link.url"
                v-bind:class="navLinkClass(link)"
                :aria-disabled="link.disabled"
              >
                <font-awesome-icon :icon="link.icon" class="fa-icon mr-3" />
                <span class="label">{{ link.label }}</span>
                <b-badge
                  variant="primary"
                  v-bind:class="link.disabled ? 'd-inline ml-2' : 'd-none'"
                >
                  Coming Soon!</b-badge
                >
              </a>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto flex-row ">
            <li
              v-if="this.$store.getters.isLoggedIn === false"
              class="nav-item dropdown"
            >
              <a
                class="btn nav-link text-nowrap px-3 discord-button"
                href="https://discord.com/api/oauth2/authorize?client_id=886771334187728896&redirect_uri=https%3A%2F%2Fhera-tasks.herokuapp.com%2Fapi%2Fdiscord%2Fcallback&response_type=code&scope=identify%20guilds"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  class="discord-icon mr-2 mt-1"
                  src="./../../assets/images/discord-logo-white.png"
                  alt="User Avatar"
                />
                <span
                  class="d-none d-md-inline-block align-middle discord-login-text"
                  >Login</span
                >
              </a>
            </li>
            <li
              v-if="this.$store.getters.isLoggedIn === true"
              class="nav-item dropdown show"
            >
              <a
                class="nav-link dropdown-toggle text-nowrap px-3"
                href="#"
                role="button"
                id="dropdownMenuLink"
                aria-haspopup="true"
                aria-expanded="false"
                data-toggle="dropdown"
              >
                <img
                  class="user-avatar rounded-circle mr-2"
                  v-bind:src="this.$store.getters.getUserAvatar"
                  alt="User Avatar"
                />
                <span v-bind:class="usernameClass">{{
                  this.$store.getters.getUsername
                }}</span>
              </a>
              <div
                class="dropdown-menu dropdown-menu-small text-center"
                aria-labelledby="dropdownMenuLink"
              >
                <a class="dropdown-item disabled" href="user-profile-lite.html">
                  Dark Mode</a
                >
                <label class="switch switch-left-right">
                  <input
                    type="checkbox"
                    class="switch-input"
                    id="notifications"
                    v-on:click="handleDarkmode()"
                    v-bind:checked="this.$store.getters.getDarkMode"
                    name="notifications"
                  />
                  <span class="switch-label" data-on="On" data-off="Off"></span>
                  <span class="switch-handle"></span>
                </label>
                <div class="dropdown-divider"></div>
                <a
                  class="dropdown-item text-danger"
                  href="#"
                  v-on:click="this.logout"
                >
                  <font-awesome-icon icon="sign-out-alt" class="fa-icon mr-3" />
                  Logout
                </a>
              </div>
            </li>
            <li v-else class="nav-item"></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  <!-- Main Navbar -->
  <!-- <nav
      class="navbar align-items-stretch navbar-light flex-md-nowrap p-0"
    ></nav> -->
</template>
