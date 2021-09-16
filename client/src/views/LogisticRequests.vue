<template>
  <div class="LogisticsRequests pt-1 pl-4 pr-4 pb-4">
    <HeaderComponent label="Logistics Requests" />
    <TaskTableComponent />
  </div>
</template>

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
        this.$store.dispatch("setItemList", items);
      });
    }
  },
  created() {
    this.getAllItems();
  }
};
</script>
