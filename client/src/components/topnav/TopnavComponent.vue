<style scoped>
@import "./TopnavComponent.css";

.discord-button {
  background-color: #5165f6;
  border-radius: 30px;
}

.discord-icon {
  max-width: 20px;
}

.discord-button:hover {
  background-color: #3f4fcc;
}

.discord-button span {
  color: white;
  font-size: 1.2rem;
}

.discord-login-text {
  font-size: 14px !important;
}

.navbar-brand {
  font-size: 24px;
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
    }
  },
  data() {
    return {
      userInfo: {}
    };
  },
  mounted() {},
  created() {},
  computed: {},
  watch: {}
};
</script>

<template>
  <div class="main-navbar sticky-top bg-white">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <img
            src="./../../assets/heralogo.png"
            alt="Hera Logo"
            class="d-inline-block align-middle mr-1"
            style="max-width: 25px;"
          />
          Hera
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
          <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
            <li
              class="nav-item"
              v-for="(link, index) in links"
              v-bind:item="link"
              v-bind:index="index"
              v-bind:key="link.label"
            >
              <a
                :href="link.url"
                v-bind:class="
                  link.disabled
                    ? 'nav-link disabled'
                    : link.url === currentUrl
                    ? 'nav-link active'
                    : 'nav-link'
                "
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
