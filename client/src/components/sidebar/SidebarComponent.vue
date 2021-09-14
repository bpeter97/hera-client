<style scoped>
@import "./SidebarComponent.css";
</style>

<script>
export default {
  name: "SidebarComponent",
  components: {},
  props: {
    links: Array
  },
  data() {
    return {
      currentUrl: window.location.pathname
    };
  },
  mounted() {},
  created() {
    console.log(window.location.pathname);
  },
  computed: {},
  methods: {},
  watch: {}
};
</script>

<template>
  <aside class="main-sidebar col-12 col-md-3 col-lg-2 px-0" ref="sidebar">
    <div class="main-navbar">
      <nav
        class="navbar align-items-stretch navbar-light bg-white flex-md-nowrap border-bottom p-0"
      >
        <a class="navbar-brand w-100 mr-0" href="#" style="line-height: 25px;">
          <div class="d-table m-auto">
            <img
              id="main-logo"
              class="d-inline-block align-top mr-1"
              style="max-width: 25px;"
              src="./../../assets/heralogo.png"
              alt="Hera"
            />
            <span class="d-none d-md-inline ml-1 align-middle" id="logo-title"
              >Hera</span
            >
          </div>
        </a>
        <a class="toggle-sidebar d-sm-inline d-md-none d-lg-none">
          <font-awesome-icon icon="bars" class="fa-icon pb-1" />
        </a>
      </nav>
    </div>
    <div class="nav-wrapper">
      <ul class="nav flex-column">
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
              v-bind:class="link.disabled ? 'd-inline' : 'd-none'"
            >
              Coming Soon!</b-badge
            >
          </a>
        </li>
      </ul>
      <div class="nav-footer text-center w-100 text-muted">
        For Foxhole version 0.42 <br />
        Created by Hartley and Critinator <br />
        Last updated: 9/11/2021
      </div>
    </div>
  </aside>
</template>
