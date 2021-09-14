<style scoped>
@import "./TopnavComponent.css";

.discord-button {
  height: 100%;
  background-color: #5165f6;
}

.discord-button:hover {
  height: 100%;
  background-color: #3f4fcc;
}

.discord-button span {
  color: white;
  font-size: 1.2rem;
}
</style>

<script>
import AuthService from "./../../utils/AuthService";

export default {
  name: "TopnavComponent",
  components: {},
  props: {},
  methods: {
    async getUserInfo() {
      this.userInfo = await AuthService.getUserInfo(this.$route.query.d);
      this.$store.dispatch("auth", this.$route.query.d);
      this.$store.dispatch("login", this.userInfo);
    },
    logout() {
      this.$store.dispatch("logout");
    }
  },
  data() {
    return {
      userInfo: {}
    };
  },
  mounted() {},
  created() {
    if (this.$route.query.d) {
      this.getUserInfo();
    }
  },
  computed: {},
  watch: {}
};
</script>

<template>
  <div class="main-navbar sticky-top bg-white">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Hera</a>
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
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto border-left flex-row ">
            <li
              v-if="this.$store.getters.getUsername === null"
              class="nav-item dropdown"
            >
              <a
                class="nav-link text-nowrap px-3 discord-button"
                href="https://discord.com/api/oauth2/authorize?client_id=886771334187728896&redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Fapi%2Fdiscord%2Fcallback&response_type=code&scope=identify%20email%20guilds"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  class="user-avatar mr-2 mt-1"
                  src="./../../assets/images/discord-logo-white.png"
                  alt="User Avatar"
                />
                <span class="d-none d-md-inline-block align-middle">Login</span>
              </a>
            </li>
            <li v-else class="nav-item dropdown show">
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
                <span class="d-none d-md-inline-block">{{
                  this.$store.getters.getUsername
                }}</span>
              </a>
              <div
                class="dropdown-menu dropdown-menu-small"
                aria-labelledby="dropdownMenuLink"
              >
                <a class="dropdown-item disabled" href="user-profile-lite.html">
                  Profile</a
                >
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
