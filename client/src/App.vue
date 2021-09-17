<template>
  <body class="" id="app">
    <div class="container-fluid">
      <div class="row">
        <!-- <SidebarComponent  /> -->
        <div class="main-content col-md-12 p-0">
          <TopnavComponent v-bind:links="links" />
          <div class="main-content-container container-fluid p-0">
            <keep-alive include="home">
              <router-view />
            </keep-alive>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import TopnavComponent from "./components/topnav/TopnavComponent.vue";
// import SidebarComponent from "@/components/sidebar/SidebarComponent.vue";

export default {
  name: "App",
  components: {
    // SidebarComponent,
    TopnavComponent
  },
  data() {
    return {
      links: [
        {
          label: "Home",
          url: "/",
          icon: "home"
        },
        {
          label: "Logistics Requests",
          url: "/logistics-requests",
          icon: "tasks"
        },
        {
          label: "Factory Calculator",
          url: "/calculator",
          icon: "calculator",
          disabled: true
        }
      ]
    };
  },
  create() {
    this.$store.state.loggedIn = true;
    this.$store.state.user = {
      info: {
        id: "184092635747713024",
        username: "Critinator",
        avatar: "75c9ea9e3a5f3e5bb9574d42023928ea",
        discriminator: "3890",
        public_flags: 0,
        flags: 0,
        banner: null,
        banner_color: null,
        accent_color: null,
        locale: "en-US",
        mfa_enabled: false
      },
      guild: {
        id: "874226647077892106",
        name: "1st Royal Lancers",
        icon: "c207166752d134522953874365f80c1c",
        owner: false,
        permissions: 104320577,
        features: [
          "THREE_DAY_THREAD_ARCHIVE",
          "INVITE_SPLASH",
          "ANIMATED_ICON"
        ],
        permissions_new: "934259707457"
      }
    };
  },
  mounted() {}
};
</script>

<style>
#app {
  margin: none !important;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
}

.border-right {
  border-right: 1px solid #e1e5eb !important;
}
</style>
