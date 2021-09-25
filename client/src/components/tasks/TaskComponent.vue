<style scoped>
@import "./TaskComponent.css";

.card-dark {
  background-color: rgb(97, 97, 97);
}
.card-light-dark {
  background-color: rgb(121, 121, 121);
}
.text-white {
  color: white !important;
}
.dark-requested-at {
  color: rgb(202, 202, 202) !important;
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
      assignee: "",
      unassignee: "",
      assignMemberModal: false,
      pendingBtnShow: false,
      acceptBtnShow: false,
      cookingBtnShow: false,
      shippingBtnShow: false,
      deliveringBtnShow: false,
      completeBtnShow: false,
      task: this.propTask,
      bmats: 0,
      hmats: 0,
      emats: 0,
      rmats: 0,
      delete_modal: false,
      status_value: 0,
      status_value_style: "width: 0%",
      task_image: [],
      index: null,
      isHermes: false,
      isLeadership: false
    };
  },
  watch: {
    task: function(val) {
      this.checkButtonVisibility(val);
    }
  },
  created() {
    let tempRegion = this.$store.getters.getRegionsList.find(
      region => region.name === this.task.region
    );
    this.task_image.push(
      require(`./../../assets/images/regions/${tempRegion.icon}.png`)
    );

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

    this.$store.getters.getUserRoles.forEach(role => {
      if (role === "Hermes Company") {
        this.isHermes = true;
      }
      if (role === "Hermes Company Leadership" || role === "Regiment Command") {
        this.isLeadership = true;
        this.isHermes = true;
      }
    });

    this.checkButtonVisibility(this.task);

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
  methods: {
    checkButtonVisibility(task) {
      if (task.status === "Pending") {
        this.pendingBtnShow = false;
        this.acceptBtnShow = true;
        this.cookingBtnShow = false;
        this.shippingBtnShow = false;
        this.delayedBtnShow = false;
        this.deliveringBtnShow = false;
        this.completeBtnShow = false;
      } else if (task.status === "Accepted") {
        this.pendingBtnShow = true;
        this.acceptBtnShow = false;
        this.cookingBtnShow = true;
        this.delayedBtnShow = true;
        this.shippingBtnShow = true;
        this.deliveringBtnShow = true;
        this.completeBtnShow = true;
      }
    },
    acceptRequest() {
      this.task.status = "Accepted";
      this.task.logiStatus = "Accepted";
      this.assignSelf();

      TaskService.updateTask(this.task);
    },
    completeRequest() {
      this.task.status = "Completed";
      this.task.logiStatus = "Completed";

      TaskService.updateTask(this.task);
    },
    getIcon(item) {
      let found = this.$store.getters.getItemsList.find(i => i.name === item);
      var img = "";
      try {
        if (this.$store.getters.getDarkMode) {
          img = require(`./../../assets/images/icons/${found.icon}.png`);
        } else {
          img = require(`./../../assets/images/icons/${found.icon}-dark.png`);
        }
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
          variant = "warning";
          break;
        case precedence.CRITICAL:
          variant = "danger";
          break;
        default:
          break;
      }

      return variant;
    },
    updateStatus(task, newStatus) {
      task.status = newStatus;
      if (newStatus === "Completed") {
        this.status_value = 100;
        this.status_value_style = "width: 100%";
        task.logiStatus = "Completed";
      }
      TaskService.updateTask(task);
    },
    deleteTask(task) {
      TaskService.deleteTask(task._id);
    },
    updateLogiStatus(task, newLogiStatus) {
      task.logiStatus = newLogiStatus;
      TaskService.updateTask(task);
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
    updateTaskPrecedence(task, newPrecedence) {
      task.precedence = newPrecedence;
      TaskService.updateTask(task);
    },
    assignSelf(task) {
      task.assignedTo.push(this.$store.getters.getUsername);
      TaskService.updateTask(task);
    },
    assignMember() {
      this.task.assignedTo.push(this.assignee);
      this.$bvModal.hide("assign-member");
      TaskService.updateTask(this.task);
    },
    unassignMember() {
      this.task.assignedTo = this.task.assignedTo.filter(
        ar => ar != this.unassignee
      );
      this.$bvModal.hide("unassign-member");
      TaskService.updateTask(this.task);
    },
    showModal(name) {
      this.$bvModal.show(name);
    },
    unassignSelf(task) {
      task.assignedTo = task.assignedTo.filter(user => {
        return user !== this.$store.getters.getUsername;
      });
      TaskService.updateTask(task);
    }
  },
  props: {
    propTask: Object
  },
  mounted() {
    this.sockets.subscribe("task-change", t => {
      this.task = t.task;
    });
  },
  computed: {
    cardClass: function() {
      return {
        card: true,
        "card-small": true,
        "card-post": true,
        "mb-4": true,
        "card-dark": this.$store.getters.getDarkMode ? true : false
      };
    },
    smallCardClass: function() {
      return {
        card: true,
        "card-post": true,
        "mb-4": true,
        "card-light-dark": this.$store.getters.getDarkMode ? true : false,
        "text-white": this.$store.getters.getDarkMode ? true : false
      };
    },
    cardHeaderClass: function() {
      return {
        "card-header": true,
        "border-bottom": true,
        "d-flex": true,
        "mb-3": true,
        "text-white": this.$store.getters.getDarkMode ? true : false,
        "card-dark": this.$store.getters.getDarkMode ? true : false
      };
    },
    requestedAtClass: function() {
      return {
        "text-muted": true,
        "dark-requested-at": this.$store.getters.getDarkMode ? true : false
      };
    },
    cardTitleClass: function() {
      return {
        "card-title": true,
        "text-white": this.$store.getters.getDarkMode ? true : false
      };
    },
    materialRowClass: function() {
      return {
        "d-flex": true,
        "flex-row": true,
        "align-content-center": true,
        "text-white": this.$store.getters.getDarkMode ? true : false
      };
    },
    basicMaterialSrc: function() {
      let img;
      if (this.$store.getters.getDarkMode) {
        img = require("./../../assets/images/icons/Basic_Materials-large.png");
      } else {
        img = require("./../../assets/images/icons/Basic_Materials-largedark.png");
      }
      return img;
    }
  }
};
</script>

<template>
  <div v-bind:class="cardClass" id="">
    <div class="">
      <div class="card-body text-left">
        <div class="container-fluid">
          <div v-bind:class="cardHeaderClass">
            <div class="card-post__author d-flex">
              <div class="d-flex flex-column justify-content-center ml-3">
                <span class="card-post__author-name">Requested By:</span>
                <span class="card-post__author-name">{{
                  this.task.requestedBy
                }}</span>
                <small v-bind:class="requestedAtClass">{{
                  this.task.requestedAt
                }}</small>
              </div>
            </div>
            <div class="my-auto ml-auto" v-if="task.status !== 'Completed'">
              <div v-if="this.isHermes || this.isLeadership">
                <b-button
                  class="mx-2"
                  v-if="acceptBtnShow"
                  variant="primary"
                  v-on:click="acceptRequest()"
                >
                  Accept Request
                </b-button>
                <b-button
                  class="mx-2"
                  v-if="pendingBtnShow"
                  variant="warning"
                  v-on:click="updateStatus(task, 'Pending')"
                >
                  Revert to Pending
                </b-button>
                <b-button
                  class="mx-2"
                  v-if="delayedBtnShow"
                  variant="warning"
                  v-on:click="updateLogiStatus(task, 'Delayed')"
                >
                  Delayed
                </b-button>
                <b-button
                  class="mx-2"
                  v-if="cookingBtnShow"
                  variant="primary"
                  v-on:click="updateLogiStatus(task, 'Cooking')"
                >
                  Cooking
                </b-button>
                <b-button
                  class="mx-2"
                  v-if="shippingBtnShow"
                  variant="primary"
                  v-on:click="updateLogiStatus(task, 'Shipping')"
                >
                  Shipping
                </b-button>
                <b-button
                  class="mx-2"
                  v-if="deliveringBtnShow"
                  variant="primary"
                  v-on:click="updateLogiStatus(task, 'Delivering')"
                >
                  Delivering
                </b-button>
                <b-button
                  class="mx-2"
                  v-if="completeBtnShow"
                  variant="success"
                  v-on:click="completeRequest()"
                >
                  Completed
                </b-button>

                <b-dropdown
                  id="dropdown-right"
                  right
                  text="Assignment"
                  variant="primary"
                  class="m-2 task-dropdown"
                  v-if="task.status === 'Accepted'"
                >
                  <b-dropdown-item href="#" @click="assignSelf(task)"
                    >Assign Self</b-dropdown-item
                  >
                  <b-dropdown-item
                    v-if="this.$store.getters.isLeadership"
                    v-on:click="showModal('assign-member')"
                    >Assign Member</b-dropdown-item
                  >
                  <b-dropdown-item
                    v-if="this.$store.getters.isLeadership"
                    v-on:click="showModal('unassign-member')"
                    >Unassign Member</b-dropdown-item
                  >
                  <b-dropdown-item href="#" @click="unassignSelf(task)"
                    >Unassign Self</b-dropdown-item
                  >
                </b-dropdown>

                <b-dropdown
                  id="dropdown-right"
                  v-if="this.$store.getters.isLeadership"
                  right
                  text="Update Precedence"
                  variant="primary"
                  class="m-1 task-dropdown"
                >
                  <b-dropdown-item
                    href="#"
                    v-on:click="updateTaskPrecedence(task, 'Low')"
                    >Change to "Low"</b-dropdown-item
                  >
                  <b-dropdown-item
                    href="#"
                    v-on:click="updateTaskPrecedence(task, 'Medium')"
                    >Change to "Medium"</b-dropdown-item
                  >
                  <b-dropdown-item
                    href="#"
                    v-on:click="updateTaskPrecedence(task, 'High')"
                    >Change to "High"</b-dropdown-item
                  >
                  <b-dropdown-item
                    href="#"
                    v-on:click="updateTaskPrecedence(task, 'Critical')"
                    >Change to "Critical"</b-dropdown-item
                  >
                </b-dropdown>

                <b-button
                  v-if="this.$store.getters.isLeadership"
                  v-b-modal.delete-modal
                  variant="danger"
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
                  <b-modal centered id="assign-member" title="Assign Member">
                    <p class="my-4">
                      Who would you like to assign to the task?
                    </p>
                    <b-form-input
                      v-model="assignee"
                      placeholder="Enter their discord name (e.g. SSgt Critinator)"
                    ></b-form-input>
                    <template #modal-footer>
                      <div class="w-100">
                        <b-button
                          variant="primary"
                          class="float-left"
                          @click="$bvModal.hide('assign-member')"
                        >
                          Cancel
                        </b-button>
                        <b-button
                          variant="success"
                          class="float-right"
                          @click="assignMember()"
                        >
                          Assign
                        </b-button>
                      </div>
                    </template>
                  </b-modal>
                  <b-modal
                    centered
                    id="unassign-member"
                    title="Unassign Member"
                  >
                    <p class="my-4">
                      Who would you like to remove from the task?
                    </p>
                    <b-form-input
                      v-model="unassignee"
                      placeholder="Enter their name."
                    ></b-form-input>
                    <template #modal-footer>
                      <div class="w-100">
                        <b-button
                          variant="primary"
                          class="float-left"
                          @click="$bvModal.hide('unassign-member')"
                        >
                          Cancel
                        </b-button>
                        <b-button
                          variant="success"
                          class="float-right"
                          @click="unassignMember()"
                        >
                          Unassign
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

              <h5
                v-bind:class="cardTitleClass"
                style="position: absolute; bottom: 45%;"
              >
                Request Status:
                <b-badge
                  v-bind:variant="checkVariant(task.status)"
                  class="d-inline"
                >
                  {{ task.status }}</b-badge
                >
              </h5>
              <h5
                v-bind:class="cardTitleClass"
                style="position: absolute; bottom: 30%;"
              >
                Logi Status:
                <b-badge
                  v-bind:variant="checkVariant(task.logiStatus)"
                  class="d-inline"
                >
                  {{ task.logiStatus }}</b-badge
                >
              </h5>
              <h5
                v-bind:class="cardTitleClass"
                style="position: absolute; bottom: 15%;"
              >
                Precedence:
                <b-badge
                  v-bind:variant="checkPrecedence(task.precedence)"
                  class="d-inline"
                >
                  {{ task.precedence }}</b-badge
                >
              </h5>
              <h5
                v-bind:class="cardTitleClass"
                style="position: absolute; bottom: 0;"
              >
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
              <h5 v-bind:class="cardTitleClass">
                Location: {{ task.location }}
              </h5>
              <h5 v-bind:class="cardTitleClass">Region: {{ task.region }}</h5>
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
        <!-- ########################## ITEM TABLE ########################## -->
        <b-table
          v-if="this.$store.getters.getDarkMode"
          dark
          sticky-header="450px"
          :items="task.items"
        >
          <template #cell(item)="data">
            <img
              class="image mr-2"
              v-bind:src="getIcon(data.value)"
              :height="30"
            />{{ data.value }}
          </template>
        </b-table>
        <b-table v-else sticky-header="450px" :items="task.items">
          <template #cell(item)="data">
            <img
              class="image mr-2"
              v-bind:src="getIcon(data.value)"
              :height="30"
            />{{ data.value }}
          </template>
        </b-table>
        <!-- ########################## /ITEM TABLE ########################## -->
        <div v-bind:class="materialRowClass">
          <div v-if="this.bmats > 0" class="col text-center">
            <b-card :class="smallCardClass" footer-tag="footer">
              <h4 v-bind:class="cardTitleClass" style="">
                Basic Materials Required
              </h4>
              <img
                class="image mr-2"
                v-if="this.$store.getters.getDarkMode"
                v-bind:src="
                  require('./../../assets/images/icons/Basic_Materials-large.png')
                "
                :height="50"
              />
              <img
                class="image mr-2"
                v-else
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
            <b-card :class="smallCardClass">
              <h4 v-bind:class="cardTitleClass" style="">
                Explosive Materials Required
              </h4>
              <img
                class="image mr-2"
                v-if="this.$store.getters.getDarkMode"
                v-bind:src="
                  require('./../../assets/images/icons/Explosive_Materials-large.png')
                "
                :height="50"
              />
              <img
                class="image mr-2"
                v-else
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
            <b-card :class="smallCardClass">
              <h4 v-bind:class="cardTitleClass" style="">
                Heavy Explosive Materials Required
              </h4>
              <img
                class="image mr-2"
                v-if="this.$store.getters.getDarkMode"
                v-bind:src="
                  require('./../../assets/images/icons/HeavyExplosiveMaterialIcon-large.png')
                "
                :height="50"
              />
              <img
                class="image mr-2"
                v-else
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
            <b-card :class="smallCardClass">
              <h4 v-bind:class="cardTitleClass" style="">
                Refined Materials Required
              </h4>
              <img
                class="image mr-2"
                v-if="this.$store.getters.getDarkMode"
                v-bind:src="
                  require('./../../assets/images/icons/Refined_Materials-large.png')
                "
                :height="50"
              />
              <img
                class="image mr-2"
                v-else
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
