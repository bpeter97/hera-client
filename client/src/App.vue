<template>
  <body v-bind:class="containerClass" id="app">
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
          label: "Events",
          url: "/events",
          icon: "calendar"
        }
      ]
    };
  },
  create() {},
  mounted() {},
  computed: {
    containerClass: function() {
      return {
        "bg-light-grey": this.$store.getters.getDarkMode ? true : false
      };
    }
  }
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

.bg-light-grey {
  background-color: #383d42 !important;
}

.border-right {
  border-right: 1px solid #e1e5eb !important;
}
</style>
