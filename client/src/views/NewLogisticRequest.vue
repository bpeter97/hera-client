<style scoped>
@import "./NewLogisticRequest.css";

hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.card-columns {
  column-count: 2;
}
</style>

<script>
// @ is an alias to /src
import TaskService from "./../components/tasks/TaskService";

export default {
  name: "NewLogisticRequest",
  components: {},
  data() {
    return {
      isRequestReady: false,
      location: "",
      region: "",
      regionList: [],
      precedenceList: [
        { value: "High", text: "High" },
        { value: "Medium", text: "Medium" },
        { value: "Low", text: "Low" }
      ],
      precedence: "",
      enemyActivity: "",
      enemyPresence: [
        { value: "true", text: "Yes" },
        { value: "false", text: "No" }
      ],
      itemListFields: [
        {
          key: "icon",
          label: "",
          class: "align-middle"
        },
        {
          key: "name",
          label: "Item",
          sortable: true,
          class: "align-middle"
        },
        {
          key: "unitsPerCrate",
          label: "# Per Crate",
          class: "align-middle"
        },
        {
          key: "_id",
          label: "",
          class: "align-middle"
        }
      ],
      addedItems: []
    };
  },
  watch: {
    location: function(val) {
      this.checkReady(val);
    },
    region: function(val) {
      this.checkReady(val);
    },
    precedence: function(val) {
      this.checkReady(val);
    },
    enemyActivity: function(val) {
      this.checkReady(val);
    },
    addedItems: function(val) {
      this.checkReady(val);
    }
  },
  computed: {},
  methods: {
    async getAllItems() {
      // Retrieve all items
      await TaskService.getItems().then(items => {
        this.$store.dispatch("setItemList", items);
      });
    },
    handleSubmit() {
      let newRequest = {
        requestedBy: this.$store.getters.getUsername,
        location: this.location,
        precedence: this.precedence,
        enemyActivity: this.enemyActivity,
        items: this.addedItems
      };

      TaskService.insertTask(newRequest).then(() => {
        this.$router.push("/");
      });
    },
    checkReady() {
      if (
        this.location !== "" &&
        this.region !== "" &&
        this.precedence !== "" &&
        this.enemyActivity !== "" &&
        this.addedItems.length > 0
      ) {
        this.isRequestReady = true;
      }
    },
    checkState(x) {
      return this[x].length >= 3;
    },
    invalidFeedback(x) {
      if (this[x].length > 0) {
        return "Enter at least 3 characters.";
      }
      return "This is required.";
    },
    getItems(filter) {
      var allItems = this.$store.getters.getItemsList.filter(
        item => item.faction === "Colonial" || item.faction === "Neutral"
      );
      return allItems.filter(item => item.category === filter);
    },
    getIcon(item) {
      let found = this.$store.getters.getItemsList.find(i => i.name === item);
      var img = "";
      try {
        img = require(`./../assets/images/icons/${found.icon}-dark.png`);
      } catch (err) {
        return;
      }
      return img;
    },
    getRegionList() {
      this.$store.getters.getRegionsList.forEach(region => {
        this.regionList.push({
          value: region.name,
          text: region.name
        });
      });
    },
    addItemToArray(data) {
      let newItem = {
        item: data.item.name,
        quantity: this.$refs[data.value].value,
        type: "crates"
      };

      this.addedItems.push(newItem);
    }
  },
  mounted() {},
  created() {
    if (!this.$store.getters.isLoggedIn) {
      this.$store.dispatch(
        "error",
        "You must be logged in to review logistic requests."
      );
      this.$router.push("/");
    }
    if (this.$store.getters.getItemList === null) {
      this.getAllItems();
    }

    this.getRegionList();
  }
};
</script>

<template
  ><div
    class="
"
  >
    <div class="pb-4">
      <b-jumbotron
        bg-variant="info"
        text-variant="white"
        class="page-jumbotron"
      >
        <template #header>New Request</template>
      </b-jumbotron>
    </div>
    <div class="new-request pl-4 pr-4 pb-4">
      <!-- <b-card-group columns> -->
      <div class="card-columns">
        <b-card header="Request Details" header-tag="header">
          <b-form-group
            id="fieldset-horizontal"
            label-cols-sm="3"
            label-cols-lg="3"
            description="Select the priority of the request."
            label="Select Priority"
            label-for="precedence-input"
            :invalid-feedback="invalidFeedback('precedence')"
            :state="checkState('precedence')"
          >
            <b-form-select
              id="precedence-input"
              v-model="precedence"
              :options="precedenceList"
              :state="checkState('precedence')"
            ></b-form-select>
          </b-form-group>
          <hr />
          <b-form-group
            id="fieldset-horizontal"
            label-cols-sm="3"
            label-cols-lg="3"
            description="Let us know where you want the items delivered (grid or location name, ex. Olympus or K8-8)."
            label="Enter Location"
            label-for="location-input"
            :invalid-feedback="invalidFeedback('location')"
            :state="checkState('location')"
          >
            <b-form-input
              id="location-input"
              v-model="location"
              :state="checkState('location')"
              trim
            ></b-form-input>
          </b-form-group>
          <hr />
          <b-form-group
            id="fieldset-horizontal"
            label-cols-sm="3"
            label-cols-lg="3"
            description="Select which region the request is in."
            label="Select Region"
            label-for="region-input"
            :invalid-feedback="invalidFeedback('region')"
            :state="checkState('region')"
          >
            <b-form-select
              id="region-input"
              v-model="region"
              :options="regionList"
              :state="checkState('region')"
            ></b-form-select>
          </b-form-group>
          <hr />
          <b-form-group
            id="fieldset-horizontal"
            label-cols-sm="3"
            label-cols-lg="3"
            description="Select whether there is an enemy presence."
            label="Select Enemy Presence"
            label-for="enemyActivity-input"
            :invalid-feedback="invalidFeedback('enemyActivity')"
            :state="checkState('enemyActivity')"
          >
            <b-form-select
              id="enemyActivity-input"
              v-model="enemyActivity"
              :options="enemyPresence"
              :state="checkState('enemyActivity')"
            ></b-form-select>
          </b-form-group>
        </b-card>
        <b-card header="Request Items" header-tag="header">
          <h5 v-if="addedItems.length === 0">No items added yet..</h5>
          <b-table striped hover v-else :items="addedItems"></b-table>
        </b-card>
        <b-card
          header="Request is Ready"
          v-if="isRequestReady"
          header-tag="header"
        >
          <span class="input-group-text"
            ><button
              class="btn btn-primary"
              v-on:click="handleSubmit()"
              type="button"
            >
              Create Request
            </button></span
          >
        </b-card>
        <b-card header="Inventory" header-tag="header">
          <ul
            class="nav nav-pills mb-3 justify-content-center"
            id="pills-tab"
            role="tablist"
          >
            <li class="nav-item mr-1">
              <a
                class="nav-link active facility-button"
                id="pills-smallweapons-tab"
                data-toggle="pill"
                href="#pills-smallweapons"
                role="tab"
                aria-controls="pills-smallweapons"
                aria-selected="false"
                ><img
                  class="image"
                  v-bind:src="
                    require('./../assets/images/icons/SmallWeaponsIcon.png')
                  "
                  :height="45"
              /></a>
            </li>
            <li class="nav-item mr-1">
              <a
                class="nav-link facility-button"
                id="pills-heavyweapons-tab"
                data-toggle="pill"
                href="#pills-heavyweapons"
                role="tab"
                aria-controls="pills-heavyweapons"
                aria-selected="false"
                ><img
                  class="image"
                  v-bind:src="
                    require('./../assets/images/icons/HeavyWeaponsIcon.png')
                  "
                  :height="45"
              /></a>
            </li>
            <li class="nav-item mr-1">
              <a
                class="nav-link facility-button"
                id="pills-utility-tab"
                data-toggle="pill"
                href="#pills-utility"
                role="tab"
                aria-controls="pills-utility"
                aria-selected="false"
                ><img
                  class="image"
                  v-bind:src="
                    require('./../assets/images/icons/UtilityIcon.png')
                  "
                  :height="45"
              /></a>
            </li>
            <li class="nav-item mr-1">
              <a
                class="nav-link text-center facility-button"
                id="pills-medical-tab"
                data-toggle="pill"
                href="#pills-medical"
                role="tab"
                aria-controls="pills-medical"
                aria-selected="true"
              >
                <img
                  class="image"
                  v-bind:src="
                    require('./../assets/images/icons/MedicalIcon.png')
                  "
                  :height="45"
                />
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link text-center facility-button"
                id="pills-facilities-tab"
                data-toggle="pill"
                href="#pills-facilities"
                role="tab"
                aria-controls="pills-facilities"
                aria-selected="true"
              >
                <img
                  class="image"
                  v-bind:src="
                    require('./../assets/images/icons/FacilitiesSuppliesIcon.png')
                  "
                  :height="45"
                />
              </a>
            </li>
          </ul>
          <div class="tab-content" id="pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="pills-smallweapons"
              role="tabpanel"
              aria-labelledby="#pills-smallweapons-tab"
            >
              <b-table
                striped
                :items="getItems('Small Arms Facility')"
                :fields="itemListFields"
                class="align-middle"
              >
                <template #cell(icon)="data" class="align-middle">
                  <img
                    class="image mr-2 align-middle"
                    v-bind:src="
                      require(`./../assets/images/icons/${data.value}-dark.png`)
                    "
                    :height="30"
                  />
                </template>

                <template #cell(name)="data">
                  {{ data.value }}
                </template>

                <template #cell(_id)="data">
                  <div class="input-group align-middle">
                    <input
                      type="number"
                      class="form-control"
                      placeholder=""
                      aria-label=""
                      value=""
                      :ref="data.value"
                      :aria-describedby="data.value"
                    />
                    <div class="input-group-append">
                      <span class="input-group-text"
                        ><button
                          class="btn btn-primary"
                          v-on:click="addItemToArray(data)"
                          type="button"
                        >
                          Add
                        </button></span
                      >
                    </div>
                  </div>
                </template>
              </b-table>
            </div>
            <div
              class="tab-pane fade"
              id="pills-heavyweapons"
              role="tabpanel"
              aria-labelledby="pills-heavyweapons-tab"
            >
              <b-table
                striped
                :items="getItems('Heavy Arms Facility')"
                :fields="itemListFields"
              >
                <template #cell(icon)="data">
                  <img
                    class="image mr-2"
                    v-bind:src="
                      require(`./../assets/images/icons/${data.value}-dark.png`)
                    "
                    :height="30"
                  />
                </template>

                <template #cell(name)="data">
                  {{ data.value }}
                </template>

                <template #cell(_id)="data">
                  <div class="input-group align-middle">
                    <input
                      type="number"
                      class="form-control"
                      placeholder=""
                      aria-label=""
                      value=""
                      :ref="data.value"
                      :aria-describedby="data.value"
                    />
                    <div class="input-group-append">
                      <span class="input-group-text"
                        ><button
                          class="btn btn-primary"
                          v-on:click="addItemToArray(data)"
                          type="button"
                        >
                          Add
                        </button></span
                      >
                    </div>
                  </div>
                </template>
              </b-table>
            </div>
            <div
              class="tab-pane fade"
              id="pills-utility"
              role="tabpanel"
              aria-labelledby="pills-utility-tab"
            >
              <b-table
                striped
                :items="getItems('Utility Facility')"
                :fields="itemListFields"
              >
                <template #cell(icon)="data">
                  <img
                    class="image mr-2"
                    v-bind:src="
                      require(`./../assets/images/icons/${data.value}-dark.png`)
                    "
                    :height="30"
                  />
                </template>

                <template #cell(name)="data">
                  {{ data.value }}
                </template>

                <template #cell(_id)="data">
                  <div class="input-group align-middle">
                    <input
                      type="number"
                      class="form-control"
                      placeholder=""
                      aria-label=""
                      value=""
                      :ref="data.value"
                      :aria-describedby="data.value"
                    />
                    <div class="input-group-append">
                      <span class="input-group-text"
                        ><button
                          class="btn btn-primary"
                          v-on:click="addItemToArray(data)"
                          type="button"
                        >
                          Add
                        </button></span
                      >
                    </div>
                  </div>
                </template>
              </b-table>
            </div>
            <div
              class="tab-pane fade"
              id="pills-medical"
              role="tabpanel"
              aria-labelledby="pills-medical-tab"
            >
              <b-table
                striped
                :items="getItems('Medical Facility')"
                :fields="itemListFields"
              >
                <template #cell(icon)="data">
                  <img
                    class="image mr-2"
                    v-bind:src="
                      require(`./../assets/images/icons/${data.value}-dark.png`)
                    "
                    :height="30"
                  />
                </template>

                <template #cell(name)="data">
                  {{ data.value }}
                </template>

                <template #cell(_id)="data">
                  <div class="input-group align-middle">
                    <input
                      type="number"
                      class="form-control"
                      placeholder=""
                      aria-label=""
                      value=""
                      :ref="data.value"
                      :aria-describedby="data.value"
                    />
                    <div class="input-group-append">
                      <span class="input-group-text"
                        ><button
                          class="btn btn-primary"
                          v-on:click="addItemToArray(data)"
                          type="button"
                        >
                          Add
                        </button></span
                      >
                    </div>
                  </div>
                </template>
              </b-table>
            </div>
            <div
              class="tab-pane fade"
              id="pills-facilities"
              role="tabpanel"
              aria-labelledby="pills-facilities-tab"
            >
              <b-table
                striped
                :items="getItems('Supplies Facility')"
                :fields="itemListFields"
              >
                <template #cell(icon)="data">
                  <img
                    class="image mr-2"
                    v-bind:src="
                      require(`./../assets/images/icons/${data.value}-dark.png`)
                    "
                    :height="30"
                  />
                </template>

                <template #cell(name)="data">
                  {{ data.value }}
                </template>

                <template #cell(_id)="data">
                  <div class="input-group align-middle">
                    <input
                      type="number"
                      class="form-control"
                      placeholder=""
                      aria-label=""
                      value=""
                      :ref="data.value"
                      :aria-describedby="data.value"
                    />
                    <div class="input-group-append">
                      <span class="input-group-text"
                        ><button
                          class="btn btn-primary"
                          v-on:click="addItemToArray(data)"
                          type="button"
                        >
                          Add
                        </button></span
                      >
                    </div>
                  </div>
                </template>
              </b-table>
            </div>
          </div>
        </b-card>
      </div>
      <!-- </b-card-group> -->
    </div>
  </div>
</template>
