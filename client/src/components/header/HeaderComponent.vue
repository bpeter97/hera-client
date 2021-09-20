<style scoped>
@import "./HeaderComponent.css";

.page-subtitle.light-text {
  color: #b1b1b1;
}
</style>

<script>
export default {
  name: "HeaderComponent",
  components: {},
  props: {
    card: Boolean,
    requestId: Number,
    label: String
  },
  data() {
    return {
      pageTitle: ""
    };
  },
  mounted() {
    if (this.label !== "") {
      this.pageTitle = this.label;
    } else {
      switch (window.location.pathname) {
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
    }
  },
  created() {},
  computed: {
    subTitleClass: function() {
      return {
        "text-uppercase": true,
        "page-subtitle": true,
        "light-text": this.$store.getters.getDarkMode ? true : false
      };
    },
    pageTitleClass: function() {
      return {
        "page-title": true,
        "text-white": this.$store.getters.getDarkMode ? true : false
      };
    }
  },
  methods: {},
  watch: {}
};
</script>

<template>
  <div class="page-header row no-gutters py-4">
    <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
      <span v-bind:class="subTitleClass">{{
        card ? "Request #" : "Dashboard"
      }}</span>
      <h3 v-bind:class="pageTitleClass">
        {{ card ? `1STRL-${requestId}` : this.pageTitle }}
      </h3>
    </div>
  </div>
</template>
