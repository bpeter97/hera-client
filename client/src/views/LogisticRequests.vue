<template>
  <div class="LogisticsRequests">
    <HeaderComponent />
    <TaskTableComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComponent from "@/components/header/HeaderComponent.vue";
import TaskTableComponent from "@/components/tasks/TaskTableComponent.vue";

export default {
  name: "LogisticsRequests",
  components: {
    HeaderComponent,
    TaskTableComponent
  }
};
</script>
