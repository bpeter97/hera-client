<style scoped>
@import "./HeaderComponent.css";
</style>

<script>
export default {
  name: "HeaderComponent",
  components: {},
  props: {
    card: Boolean,
    requestId: Number
  },
  data() {
    return {
      pageTitle: ""
    };
  },
  mounted() {
    let currentUrl = window.location.pathname;
    switch (currentUrl) {
        case "/":
        this.pageTitle = "Home";
        break;
      case "/logistics-requests":
        this.pageTitle = "Logistics Requests";
        break;
      case "/calculator":
        this.pageTitle = "Logistics Calculator";
        break;
      case "/artillery-map":
        this.pageTitle = "Artillery Map";
        break;
      default:
        this.pageTitle = "Add a new page title";
    }

  },
  created() {
  },
  computed: {},
  methods: {},
  watch: {}
};
</script>

<template>
  <div class="page-header row no-gutters py-4">
    <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
      <span class="text-uppercase page-subtitle">{{
        card ? "Request #" : "Dashboard"
      }}</span>
      <h3 class="page-title">
        {{ card ? `1STRL-${requestId}` : pageTitle }}
      </h3>
    </div>
  </div>
</template>
