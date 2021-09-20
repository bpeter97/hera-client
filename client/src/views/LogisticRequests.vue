<template>
  <div v-bind:class="logisticRequestClass">
    <HeaderComponent label="Logistics Requests" />
    <TaskTableComponent />
  </div>
</template>

<style>
.LogisticsRequests-dark {
  background-color: #383d42 !important;
}
</style>

<script>
// @ is an alias to /src
import HeaderComponent from "@/components/header/HeaderComponent.vue";
import TaskTableComponent from "@/components/tasks/TaskTableComponent.vue";
import TaskService from "./../components/tasks/TaskService";

export default {
  name: "LogisticsRequests",
  components: {
    HeaderComponent,
    TaskTableComponent
  },
  data() {
    return {
      craftedItems: []
    };
  },
  methods: {
    async getAllItems() {
      // Retrieve all items
      await TaskService.getItems().then(items => {
        this.$store.dispatch("setItemsList", items);
      });
    },
    async getAllRegions() {
      await TaskService.getRegions().then(regions => {
        this.$store.dispatch("setRegionsList", regions);
      });
    }
  },
  created() {
    if (!this.$store.getters.isLoggedIn) {
      this.$store.dispatch("error", {
        message: "You must be logged in to review logistic requests."
      });
      this.$router.push("/");
    }
    this.getAllItems();
    this.getAllRegions();
  },
  computed: {
    logisticRequestClass: function() {
      return {
        LogisticsRequests: true,
        "pt-1": true,
        "pl-4": true,
        "pr-4": true,
        "pb-4": true,
        "LogisticsRequests-dark": this.$store.getters.getDarkMode ? true : false
      };
    }
  }
};
</script>
