<style scoped>
@import "./NewLogisticRequest.css";
</style>

<script>
// @ is an alias to /src
import TaskService from "./../components/tasks/TaskService";

export default {
  name: "NewLogisticRequest",
  components: {},
  data() {
    return {
      location: "",
      region: "",
      regionList: [
        { value: "Oarbreaker Isles", text: "Oarbreaker Isles" },
        { value: "Fisherman's Row", text: "Fisherman's Row" },
        { value: "Stonecradle", text: "Stonecradle" },
        { value: "Ferranac Coast", text: "Ferranac Coast" },
        { value: "Westgate", text: "Westgate" },
        { value: "Heartlands", text: "Heartlands" },
        { value: "Loch Mor", text: "Loch Mor" },
        { value: "Linn of Mercy", text: "Linn of Mercy" },
        { value: "Moors", text: "Moors" },
        { value: "Reaching Trail", text: "Reaching Trail" },
        { value: "Callahans Passage", text: "Callahans Passage" },
        { value: "Deadlands", text: "Deadlands" },
        { value: "Umbral Wildwood", text: "Umbral Wildwood" },
        { value: "Great March", text: "Great March" },
        { value: "Viper Pit", text: "Viper Pit" },
        { value: "Marban Hollow", text: "Marban Hollow" },
        { value: "Drowned Vale", text: "Drowned Vale" },
        { value: "Shackled Chasm", text: "Shackled Chasm" },
        { value: "Allods Bight", text: "Allods Bight" },
        { value: "Endless Short", text: "Endless Short" },
        { value: "Weathered Expanse", text: "Weathered Expanse" },
        { value: "Godcrofts", text: "Godcrofts" },
        { value: "Tempest Island", text: "Tempest Island" }
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
      ]
    };
  },
  computed: {},
  methods: {
    async getAllItems() {
      // Retrieve all items
      await TaskService.getItems().then(items => {
        this.$store.dispatch("setItemList", items);
      });
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
      var allItems = this.$store.getters.getItemList.filter(
        item => item.faction === "Colonial" || item.faction === "Neutral"
      );
      return allItems.filter(item => item.category === filter);
    },
    getIcon(item) {
      let found = this.$store.getters.getItemList.find(i => i.name === item);
      var img = "";
      try {
        img = require(`./../assets/images/icons/${found.icon}-dark.png`);
      } catch (err) {
        return;
      }
      return img;
    }
  },
  mounted() {},
  created() {
    // if (!this.$store.getters.isLoggedIn) {
    //   this.$router.push("/logistics-requests");
    // }
    if (this.$store.getters.getItemList === null) {
      this.getAllItems();
    }
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
    <div class="new-request pl-4 pr-4 pb-4 d-flex flex-row">
      <!-- <HeaderComponent label="New Request" /> -->
      <div class="col">
        <b-card header="Request Details" header-tag="header">
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
        </b-card>
      </div>
      <div class="col">
        <b-card header="Inventory" header-tag="header">
          <ul
            class="nav nav-pills mb-3 justify-content-center"
            id="pills-tab"
            role="tablist"
          >
            <li class="nav-item mr-5">
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
            <li class="nav-item mr-5">
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
            <li class="nav-item mr-5">
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
            <li class="nav-item mr-5">
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
                  <!-- <img
                    class="image mr-2"
                    v-bind:src="getIcon(data.value)"
                    :height="30"
                  />-->
                  {{ data.value }}
                </template>

                <template #cell(_id)="data">
                  <div class="input-group align-middle">
                    <input
                      type="number"
                      class="form-control"
                      placeholder=""
                      aria-label=""
                      :aria-describedby="data.value"
                    />
                    <div class="input-group-append">
                      <span class="input-group-text"
                        ><button class="btn btn-primary" type="button">
                          Add
                        </button></span
                      >
                    </div>
                  </div>
                </template>

                <!-- units per crate -->
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
                :tbody-tr-class="align - middle"
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
                  <!-- <img
                    class="image mr-2"
                    v-bind:src="getIcon(data.value)"
                    :height="30"
                  />-->
                  {{ data.value }}
                </template>

                <template #cell(_id)="data">
                  <div class="input-group align-middle">
                    <input
                      type="number"
                      class="form-control"
                      placeholder=""
                      aria-label=""
                      :aria-describedby="data.value"
                    />
                    <div class="input-group-append">
                      <span class="input-group-text"
                        ><button class="btn btn-primary" type="button">
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
                  <!-- <img
                    class="image mr-2"
                    v-bind:src="getIcon(data.value)"
                    :height="30"
                  />-->
                  {{ data.value }}
                </template>

                <template #cell(_id)="data">
                  <div class="input-group align-middle">
                    <input
                      type="number"
                      class="form-control"
                      placeholder=""
                      aria-label=""
                      :aria-describedby="data.value"
                    />
                    <div class="input-group-append">
                      <span class="input-group-text"
                        ><button class="btn btn-primary" type="button">
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
                  <!-- <img
                    class="image mr-2"
                    v-bind:src="getIcon(data.value)"
                    :height="30"
                  />-->
                  {{ data.value }}
                </template>

                <template #cell(_id)="data">
                  <div class="input-group align-middle">
                    <input
                      type="number"
                      class="form-control"
                      placeholder=""
                      aria-label=""
                      :aria-describedby="data.value"
                    />
                    <div class="input-group-append">
                      <span class="input-group-text"
                        ><button class="btn btn-primary" type="button">
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
                  <!-- <img
                    class="image mr-2"
                    v-bind:src="getIcon(data.value)"
                    :height="30"
                  />-->
                  {{ data.value }}
                </template>

                <template #cell(_id)="data">
                  <div class="input-group align-middle">
                    <input
                      type="number"
                      class="form-control"
                      placeholder=""
                      aria-label=""
                      :aria-describedby="data.value"
                    />
                    <div class="input-group-append">
                      <span class="input-group-text"
                        ><button class="btn btn-primary" type="button">
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
    </div>
  </div>
</template>
