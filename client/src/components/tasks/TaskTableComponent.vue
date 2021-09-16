<style scoped>
@import "./TaskTableComponent.css";
</style>

<script>
import TaskService from "./TaskService";
import TaskComponent from "./TaskComponent.vue";
import CounterSectionComponent from "@/components/counters/CounterSectionComponent.vue";
// import AlertComponent from "@/components/alerts/AlertComponent.vue";
const { taskStatus } = require("../../utils/enums");

export default {
  name: "TaskTableComponent",
  components: {
    TaskComponent,
    CounterSectionComponent
  },
  mounted() {
    // Listen for 'task-change' event.
    this.sockets.subscribe("task-change", t => {
      // Formate date/time for requestedAt
      t.task.requestedAt = t.task.requestedAt
        ? `${new Date(t.task.requestedAt).toLocaleDateString()} ${new Date(
            t.task.requestedAt
          ).toLocaleTimeString()}`
        : t.task.requestedAt;

      // Formate date/time for completedAt
      t.task.completedAt = t.task.completedAt
        ? `${new Date(t.task.completedAt).toLocaleDateString()} ${new Date(
            t.task.completedAt
          ).toLocaleTimeString()}`
        : null;

      // perform actions based on change value
      switch (t.change) {
        case "POST": {
          this.tasks.push(t.task);
          this.calculateCounters();
          this.addChangeAlert({
            message: `A new request has been added!`,
            id: t.task.taskId,
            show: true
          });
          break;
        }
        case "DELETE": {
          this.tasks = this.tasks.filter(task => {
            return task._id !== t.task._id;
          });
          this.calculateCounters();
          this.addChangeAlert({
            message: `Request: 1STRL-${t.task.taskId} has been deleted!`,
            id: t.task.taskId,
            show: true
          });
          break;
        }
        case "PATCH": {
          let oldIndex = this.tasks.findIndex(task => task._id === t.task._id);
          let updateProps = Object.getOwnPropertyNames(t.task);

          for (var i = 0; i < updateProps.length; i++) {
            let propName = updateProps[i];

            if (t.task[propName] !== this.tasks[oldIndex].propName) {
              this.tasks[oldIndex].propName = t.task[propName];
            }
          }

          this.calculateCounters();
        }
      }
    });
  },
  ready() {},
  data() {
    return {
      counters: {
        totalOpen: 0,
        totalPending: 0,
        totalCompleted: 0,
        totalDelivered: 0
      },
      tasks: [],
      error: "",
      pendingItemFields: [
        {
          key: "taskId",
          label: "ID",
          sortable: true
        },
        {
          key: "location",
          label: "Location",
          sortable: true
        },
        {
          key: "requestedAt",
          label: "Date Requested",
          sortable: true
        },
        {
          key: "precedence",
          label: "Precendence",
          sortable: true
        },
        "status",
        {
          key: "enemyActivity",
          label: "Enemy Activity"
        },
        "details"
      ],
      acceptedItemFields: [
        {
          key: "taskId",
          label: "ID",
          sortable: true
        },
        {
          key: "location",
          label: "Location",
          sortable: true
        },
        {
          key: "requestedAt",
          label: "Date Requested",
          sortable: true
        },
        {
          key: "precedence",
          label: "Precendence",
          sortable: true
        },
        "status",
        {
          key: "logiStatus",
          label: "Logi Status"
        },
        {
          key: "enemyActivity",
          label: "Enemy Activity"
        },
        "details"
      ],
      changeAlerts: []
    };
  },
  methods: {
    addChangeAlert(alert) {
      let id = alert.id;
      this.changeAlerts.push(alert);
      // Remove the alert after 10 seconds.
      setTimeout(() => {
        this.changeAlerts = this.changeAlerts.map(alert => {
          return alert.id !== id;
        });
      }, 30000);
    },
    async getAllTasks() {
      // Retrieve all tasks
      this.tasks = await TaskService.getTasks();
    },
    getTasks(type) {
      let taskList = [];

      // Retrieve all tasks
      this.tasks.forEach(task => {
        if (task.status === type) {
          taskList.push(task);
        }
      });
      return taskList;
    },
    calculateCounters() {
      this.counters = {
        totalOpen: 0,
        totalPending: 0,
        totalCompleted: 0,
        totalDelivered: 0
      };

      // Calculate # of tasks that are pending
      let pending = this.tasks.filter(task => {
        return task.status === taskStatus.PENDING;
      });
      this.counters.totalPending = pending.length;

      // Calculate # of tasks that are accepted
      let accepted = this.tasks.filter(task => {
        return task.status === taskStatus.ACCEPTED;
      });
      this.counters.totalOpen = accepted.length;

      // Calculate # of tasks that are completed
      let completed = this.tasks.filter(task => {
        return task.status === taskStatus.COMPLETED;
      });
      this.counters.totalCompleted = completed.length;

      // Calculate # of items within the completed tasks array
      completed.forEach(task => {
        task.items.forEach(item => {
          this.counters.totalDelivered += new Number(item.quantity);
        });
      });
    },
    createRequest() {
      this.$router.push("/logistics-requests/new");
    }
  },
  created() {
    this.getAllTasks().then(() => {
      this.calculateCounters();
    });
  },
  props: {}
};
</script>

<template>
  <div class="task-tables-component">
    <!-- <div class="text-left mb-3" v-if="this.$store.getters.isLoggedIn"> -->
    <div class="text-left mb-3">
      <b-button
        size="lg"
        class=""
        @click="this.createRequest"
        variant="primary"
      >
        Create Request
      </b-button>
    </div>

    <CounterSectionComponent v-bind:counters="this.counters" />
    <!-- <AlertComponent /> -->

    <div class="div">
      <b-alert
        v-for="(alert, index) in changeAlerts"
        v-bind:item="alert"
        v-bind:index="index"
        v-bind:key="alert.id"
        v-bind:show="alert.show"
        dismissible
        fade
        variant="primary-new"
      >
        <font-awesome-icon icon="tasks" class="fa-icon mr-3" />
        {{ alert.message }}
      </b-alert>
    </div>

    <div class="task-pills pt-2">
      <b-tabs content-class="mt-3" fill>
        <b-tab title="Pending Requests" class="request-table-selector" active>
          <b-table
            striped
            hover
            :items="getTasks('Pending')"
            :fields="pendingItemFields"
          >
            <template #cell(enemyActivity)="data">
              {{ data.value ? "Yes" : "No" }}
            </template>

            <template #cell(details)="row">
              <b-button
                size="sm"
                @click="row.toggleDetails"
                class="mr-2"
                variant="primary"
              >
                {{ row.detailsShowing ? "Hide" : "View" }}
                Request
              </b-button>
            </template>

            <template #row-details="row">
              <TaskComponent :task="row.item" :taskId="row.taskId" />
            </template>
          </b-table>
        </b-tab>
        <b-tab title="In-Progress Requests"
          ><b-table
            striped
            hover
            :items="getTasks('Accepted')"
            :fields="acceptedItemFields"
          >
            <template #cell(enemyActivity)="data">
              {{ data.value ? "Yes" : "No" }}
            </template>

            <template #cell(details)="row">
              <b-button
                size="sm"
                @click="row.toggleDetails"
                class="mr-2"
                variant="primary"
              >
                {{ row.detailsShowing ? "Hide" : "View" }}
                Request
              </b-button>
            </template>

            <template #row-details="row">
              <TaskComponent :task="row.item" />
            </template> </b-table
        ></b-tab>
        <b-tab title="Completed Requests"
          ><b-table
            striped
            hover
            :items="getTasks('Completed')"
            :fields="acceptedItemFields"
          >
            <template #cell(enemyActivity)="data">
              {{ data.value ? "Yes" : "No" }}
            </template>

            <template #cell(details)="row">
              <b-button
                size="sm"
                @click="row.toggleDetails"
                class="mr-2"
                variant="primary"
              >
                {{ row.detailsShowing ? "Hide" : "View" }}
                Request
              </b-button>
            </template>

            <template #row-details="row">
              <TaskComponent :task="row.item" />
            </template> </b-table
        ></b-tab>
      </b-tabs>
    </div>
  </div>
</template>
