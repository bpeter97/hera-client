<style scoped>
@import "./TaskComponent.css";

.task-dropdown ul li:hover,
.task-dropdown ul li:focus {
  background-color: rgb(0, 153, 255);
}

.required-mats-text {
  font-size: 1.5rem;
}

.danger-task-enemy {
  color: #ffffff;
  background-color: #ff00009c !important;
  border-radius: 5px;
  -webkit-box-shadow: 0 0.46875rem 2.1875rem rgb(90 97 105 / 10%),
    0 0.9375rem 1.40625rem rgb(90 97 105 / 10%),
    0 0.25rem 0.53125rem rgb(90 97 105 / 12%),
    0 0.125rem 0.1875rem rgb(90 97 105 / 10%);
  box-shadow: 0 0.46875rem 2.1875rem rgb(90 97 105 / 10%),
    0 0.9375rem 1.40625rem rgb(90 97 105 / 10%),
    0 0.25rem 0.53125rem rgb(90 97 105 / 12%),
    0 0.125rem 0.1875rem rgb(90 97 105 / 10%);
}
</style>

<script>
import TaskService from "./TaskService";
import HeaderComponent from "./../header/HeaderComponent.vue";
import CoolLightBox from "vue-cool-lightbox";
const { taskStatus, logiStatus, precedence } = require("../../utils/enums");

export default {
  name: "TaskComponent",
  components: {
    HeaderComponent,
    CoolLightBox
  },
  data() {
    return {
      bmats: 0,
      hmats: 0,
      emats: 0,
      rmats: 0,
      delete_modal: false,
      status_value: 0,
      status_value_style: "width: 0%",
      task_image: [
        require("./../../assets/images/regions/MapFarranacCoastHex.png")
      ],
      index: null
    };
  },
  created() {
    this.task.items.forEach(item => {
      // find the item in the list of items
      let foundItem = this.$store.getters.getItemsList.find(
        i => i.name === item.item
      );

      this.bmats = this.bmats + foundItem.bmatCost * item.quantity;
      this.emats = this.emats + foundItem.ematCost * item.quantity;
      this.hmats = this.hmats + foundItem.hmatCost * item.quantity;
      this.rmats = this.rmats + foundItem.rmatCost * item.quantity;
    });
  },
  methods: {
    getIcon(item) {
      let found = this.$store.getters.getItemsList.find(i => i.name === item);
      var img = "";
      try {
        img = require(`./../../assets/images/icons/${found.icon}-dark.png`);
      } catch (err) {
        return;
      }
      return img;
    },
    findIcon(item) {
      let found = this.$store.getters.getItemsList.find(
        i => i.name + "-dark" === item
      );
      if (found) {
        return true;
      } else {
        return false;
      }
    },
    checkVariant(status) {
      let variant = "";

      switch (status) {
        case taskStatus.PENDING:
          variant = "warning";
          break;
        case taskStatus.COMPLETED:
          variant = "success";
          break;
        case taskStatus.ACCEPTED:
          variant = "primary";
          break;
        case logiStatus.DELAYED:
          variant = "warning";
          break;
        default:
          variant = "primary";
          break;
      }

      return variant;
    },
    checkProgress(status) {
      let variant = "progress-bar progress-bar-striped progress-bar-animated ";

      switch (status) {
        case logiStatus.PENDING:
          variant = `${variant} bg-warning`;
          break;
        case logiStatus.COMPLETED:
          variant = `progress-bar progress-bar-striped bg-success`;
          break;
        case logiStatus.ACCEPTED:
          variant = `${variant} bg-primary`;
          break;
        case logiStatus.COOKING:
          variant = `${variant} bg-primary`;
          break;
        case logiStatus.DELIVERING:
          variant = `${variant} bg-primary`;
          break;
        case logiStatus.DELAYED:
          variant = "progress-bar progress-bar-striped bg-warning";
          break;
        default:
          break;
      }
      return variant;
    },
    checkPrecedence(check) {
      let variant = "";

      switch (check) {
        case precedence.LOW:
          variant = "primary";
          break;
        case precedence.MEDIUM:
          variant = "warning";
          break;
        case precedence.HIGH:
          variant = "danger";
          break;
        default:
          break;
      }

      return variant;
    },
    updateStatus(task, newStatus) {
      task.status = newStatus;
      TaskService.updateTask(task);
    },
    deleteTask(task) {
      TaskService.deleteTask(task._id);
    },
    updateLogiStatus(task, newLogiStatus) {
      task.logiStatus = newLogiStatus;
      TaskService.updateTask(task);

      switch (this.task.logiStatus) {
        case logiStatus.PENDING:
          this.status_value = 0;
          this.status_value_style = "width: 0%";
          break;
        case logiStatus.ACCEPTED:
          this.status_value = 25;
          this.status_value_style = "width: 25%";
          break;
        case logiStatus.COOKING:
          this.status_value = 50;
          this.status_value_style = "width: 50%";
          break;
        case logiStatus.SHIPPING:
          this.status_value = 75;
          this.status_value_style = "width: 75%";
          break;
        case logiStatus.DELIVERING:
          this.status_value = 75;
          this.status_value_style = "width: 75%";
          break;
        case logiStatus.COMPLETED:
          this.status_value = 100;
          this.status_value_style = "width: 100%";
          break;
        default:
          break;
      }
    },
    assignSelf(task) {
      task.assignedTo.push(this.$store.getters.getUsername);
      TaskService.updateTask(task);
    },
    unassignSelf(task) {
      task.assignedTo = task.assignedTo.filter(user => {
        return user !== this.$store.getters.getUsername;
      });
      TaskService.updateTask(task);
    }
  },
  props: {
    task: Object
  }
};
</script>

<template>
  <div class="col-lg-" id="">
    <div class="card card-small card-post mb-4">
      <div class="card-body text-left">
        <div class="container-fluid">
          <div class="card-header border-bottom d-flex mb-3">
            <div class="card-post__author d-flex">
              <div class="d-flex flex-column justify-content-center ml-3">
                <span class="card-post__author-name">Requested By:</span>
                <span class="card-post__author-name">{{
                  this.task.requestedBy
                }}</span>
                <small class="text-muted">{{ this.task.requestedAt }}</small>
              </div>
            </div>
            <div class="my-auto ml-auto" v-if="task.status !== 'Completed'">
              <div>
                <b-dropdown
                  id="dropdown-right"
                  right
                  text="Update Request Status"
                  variant="primary"
                  class="m-2 task-dropdown"
                >
                  <b-dropdown-item
                    href="#"
                    v-on:click="updateStatus(task, 'Pending')"
                    >Change to "Pending"</b-dropdown-item
                  >
                  <b-dropdown-item
                    href="#"
                    v-on:click="updateStatus(task, 'Accepted')"
                    >Change to "Accepted"</b-dropdown-item
                  >
                  <b-dropdown-item
                    href="#"
                    v-on:click="updateStatus(task, 'Completed')"
                    >Change to "Completed"</b-dropdown-item
                  >
                </b-dropdown>

                <b-dropdown
                  id="dropdown-right"
                  right
                  text="Update Logi Status"
                  variant="primary"
                  class="m-1 task-dropdown"
                >
                  <b-dropdown-item
                    href="#"
                    v-on:click="updateLogiStatus(task, 'Pending')"
                    >Change to "Pending"</b-dropdown-item
                  >
                  <b-dropdown-item
                    href="#"
                    v-on:click="updateLogiStatus(task, 'Accepted')"
                    >Change to "Accepted"</b-dropdown-item
                  >
                  <b-dropdown-item
                    href="#"
                    v-on:click="updateLogiStatus(task, 'Cooking')"
                    >Change to "Cooking"</b-dropdown-item
                  >
                  <b-dropdown-item
                    href="#"
                    v-on:click="updateLogiStatus(task, 'Shipping')"
                    >Change to "Shipping"</b-dropdown-item
                  >
                  <b-dropdown-item
                    href="#"
                    v-on:click="updateLogiStatus(task, 'Delivering')"
                    >Change to "Delivering"</b-dropdown-item
                  >
                  <b-dropdown-item
                    href="#"
                    v-on:click="updateLogiStatus(task, 'Delayed')"
                    >Change to "Delayed"</b-dropdown-item
                  >
                  <b-dropdown-item
                    href="#"
                    v-on:click="updateLogiStatus(task, 'Completed')"
                    >Change to "Completed"</b-dropdown-item
                  >
                </b-dropdown>

                <b-dropdown
                  id="dropdown-right"
                  right
                  text="Assignment"
                  variant="primary"
                  class="m-2 task-dropdown"
                >
                  <b-dropdown-item href="#" @click="unassignSelf(task)"
                    >Unassign Self</b-dropdown-item
                  >
                  <b-dropdown-item href="#" @click="assignSelf(task)"
                    >Assign Self</b-dropdown-item
                  >
                </b-dropdown>

                <b-button
                  v-b-modal.delete-modal
                  variant="outline-danger"
                  class="ml-2"
                  >Delete Request</b-button
                >

                <div>
                  <b-modal centered id="delete-modal" title="Delete Task">
                    <p class="my-4">
                      Are you sure you want to delete the task?
                    </p>

                    <template #modal-footer>
                      <div class="w-100">
                        <b-button
                          variant="primary"
                          class="float-left"
                          @click="$bvModal.hide('delete-modal')"
                        >
                          Cancel
                        </b-button>
                        <b-button
                          variant="danger"
                          class="float-right"
                          @click="deleteTask(task)"
                        >
                          Delete
                        </b-button>
                      </div>
                    </template>
                  </b-modal>
                </div>
              </div>
            </div>
          </div>
          <div class="row" v-if="task.enemyActivity === true">
            <div class="col-12">
              <b-alert show class="danger-task-enemy text-center">
                <font-awesome-icon
                  icon="exclamation-triangle"
                  class="fa-icon mr-5"/>
                <span class="font-weight-bold">Warning!</span> There is enemy
                activity at the delivery location!
                <font-awesome-icon
                  icon="exclamation-triangle"
                  class="fa-icon ml-5"
              /></b-alert>
            </div>
          </div>
          <div class="row">
            <div class="col-6">
              <HeaderComponent v-bind:card="true" :requestId="task.taskId" />

              <h5 class="card-title" style="position: absolute; bottom: 45%;">
                Request Status:
                <b-badge
                  v-bind:variant="checkVariant(task.status)"
                  class="d-inline"
                >
                  {{ task.status }}</b-badge
                >
              </h5>
              <h5 class="card-title" style="position: absolute; bottom: 30%;">
                Logi Status:
                <b-badge
                  v-bind:variant="checkVariant(task.logiStatus)"
                  class="d-inline"
                >
                  {{ task.logiStatus }}</b-badge
                >
              </h5>
              <h5 class="card-title" style="position: absolute; bottom: 15%;">
                Precedence:
                <b-badge
                  v-bind:variant="checkPrecedence(task.precedence)"
                  class="d-inline"
                >
                  {{ task.precedence }}</b-badge
                >
              </h5>
              <h5 class="card-title" style="position: absolute; bottom: 0;">
                Member(s) Assigned:
                <span class="assigned-members">
                  {{
                    task.assignedTo.length > 0
                      ? task.assignedTo.join(" & ")
                      : "None"
                  }}
                </span>
              </h5>
            </div>
            <div class="col-6 text-center">
              <h5 class="card-title">Region: {{ task.location }}</h5>
              <CoolLightBox
                :items="task_image"
                :index="index"
                :useZoomBar="true"
                @close="index = null"
              >
              </CoolLightBox>

              <div class="images-wrapper">
                <img
                  class="image"
                  v-for="(image, imageIndex) in task_image"
                  :key="imageIndex"
                  @click="index = imageIndex"
                  :src="image"
                  :height="270"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="div my-3" v-if="task.logiStatus === 'Pending'"></div>
        <div
          class="progress progress-sm my-3 mt-4"
          v-if="task.logiStatus !== 'Pending'"
        >
          <div
            id="progress-bar-example-1"
            v-bind:class="checkProgress(task.logiStatus)"
            role="progressbar"
            :style="status_value_style"
            :aria-valuenow="status_value"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {{ this.status_value }}% Complete
          </div>
        </div>
        <b-table striped hover sticky-header="450px" :items="task.items">
          <template #cell(item)="data">
            <img
              class="image mr-2"
              v-bind:src="getIcon(data.value)"
              :height="30"
            />{{ data.value }}
          </template>
        </b-table>
        <div class="d-flex flex-row align-content-center">
          <div v-if="this.bmats > 0" class="col text-center">
            <b-card
              title="Basic Materials Required"
              header-tag="header"
              footer-tag="footer"
            >
              <img
                class="image mr-2"
                v-bind:src="
                  require('./../../assets/images/icons/Basic_Materials-largedark.png')
                "
                :height="50"
              />
              <b-card-text class="pt-3 required-mats-text"
                >{{ this.bmats }} units /
                {{ this.bmats / 100 }} crate(s)</b-card-text
              >
            </b-card>
          </div>
          <div v-if="this.emats > 0" class="col text-center">
            <b-card title="Explosive Materials Required">
              <img
                class="image mr-2"
                v-bind:src="
                  require('./../../assets/images/icons/Explosive_Materials-largedark.png')
                "
                :height="50"
              />
              <b-card-text class="pt-3 required-mats-text"
                >{{ this.emats }} units /
                {{ this.emats / 20 }} crate(s)</b-card-text
              >
            </b-card>
          </div>
          <div v-if="this.hmats > 0" class="col text-center">
            <b-card title="Heavy Explosive Materials Required">
              <img
                class="image mr-2"
                v-bind:src="
                  require('./../../assets/images/icons/HeavyExplosiveMaterialIcon-largedark.png')
                "
                :height="50"
              />
              <b-card-text class="pt-3 required-mats-text"
                >{{ this.hmats }} units /
                {{ this.hmats / 20 }} crate(s)</b-card-text
              >
            </b-card>
          </div>
          <div v-if="this.rmats > 0" class="col text-center">
            <b-card title="Refined Materials Required">
              <img
                class="image mr-2"
                v-bind:src="
                  require('./../../assets/images/icons/Refined_Materials-largedark.png')
                "
                :height="50"
              />
              <b-card-text class="pt-3 required-mats-text"
                >{{ this.rmats }} units /
                {{ this.rmats / 20 }} crate(s)</b-card-text
              >
            </b-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
