<style scoped>
@import "./HeaderComponent.css";

.page-subtitle.light-text {
  color: #b1b1b1;
}
.date-string {
  font-size: 15px;
}
</style>

<script>
export default {
  name: "HeaderComponent",
  components: {},
  props: {
    card: Boolean,
    requestId: Number,
    label: String,
    subString: String
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
    subDateClass: function() {
      return {
        "text-uppercase": true,
        "date-string": true,
        "page-subtitle": true,
        "light-text": this.$store.getters.getDarkMode ? true : false
      };
    },
    pageTitleClass: function() {
      return {
        "page-title": true,
        "pb-2": true,
        "text-white": this.$store.getters.getDarkMode ? true : false
      };
    }
  },
  methods: {
    formatDate: function(date) {
      let newD = new Date(date);
      return newD;
    }
  },
  watch: {}
};
</script>

<template>
  <div class="page-header row no-gutters py-4">
    <div class="col-12 col-sm-6 text-center text-sm-left mb-0">
      <span v-bind:class="subTitleClass">{{
        card ? "Request #" : "Dashboard"
      }}</span>
      <h3 v-bind:class="pageTitleClass">
        {{ card ? `1STRL-${requestId}` : this.pageTitle }}
      </h3>
      <span v-bind:class="subDateClass">{{
        this.subString ? formatDate(this.subString) : ""
      }}</span>
    </div>
  </div>
</template>
