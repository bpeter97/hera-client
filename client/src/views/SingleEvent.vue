<template>
  <div id="eventpage" class="h-100">
    <div class="container">
      <HeaderComponent :label="this.event.title" :subString="this.event.date" />
      <div class="col-mb-12">
        <div class="text-center">
          <div class="dropdown-divider"></div>
          <h4 :class="attendanceClass">Attendance</h4>
          <div class="dropdown-divider"></div>
        </div>
        <div class="row">
          <div class="col-3">
            <div
              class="nav flex-column nav-pills"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <a
                class="nav-link active"
                id="v-pills-regiment-command-tab"
                data-toggle="pill"
                href="#v-pills-regiment-command"
                role="tab"
                aria-controls="v-pills-regiment-command"
                aria-selected="true"
                >Regiment Command</a
              >
              <a
                class="nav-link"
                id="v-pills-ares-company-tab"
                data-toggle="pill"
                href="#v-pills-ares-company"
                role="tab"
                aria-controls="v-pills-ares-company"
                aria-selected="false"
                >Ares Company</a
              >
              <a
                class="nav-link"
                id="v-pills-hades-company-tab"
                data-toggle="pill"
                href="#v-pills-hades-company"
                role="tab"
                aria-controls="v-pills-hades-company"
                aria-selected="false"
                >Hades Company</a
              >
              <a
                class="nav-link"
                id="v-pills-hermes-company-tab"
                data-toggle="pill"
                href="#v-pills-hermes-company"
                role="tab"
                aria-controls="v-pills-hermes-company"
                aria-selected="false"
                >Hermes Company</a
              >
            </div>
          </div>
          <div class="col-9">
            <div class="tab-content" id="v-pills-tabContent">
              <div
                class="tab-pane fade show active"
                id="v-pills-regiment-command"
                role="tabpanel"
                aria-labelledby="v-pills-regiment-command-tab"
              >
                <b-list-group>
                  <b-list-group-item
                    class="d-flex justify-content-between align-items-center"
                  >
                    Major General
                    <b-badge variant="success" pill>Confirmed</b-badge>
                  </b-list-group-item>

                  <b-list-group-item
                    class="d-flex justify-content-between align-items-center"
                  >
                    Tykan
                    <b-badge variant="primary" pill>Confirmed</b-badge>
                  </b-list-group-item>
                </b-list-group>
              </div>
              <div
                class="tab-pane fade"
                id="v-pills-ares-company"
                role="tabpanel"
                aria-labelledby="v-pills-ares-company-tab"
              >
                <b-list-group>
                  <b-list-group-item
                    class="d-flex justify-content-between align-items-center"
                  >
                    Major General
                    <b-badge variant="success" pill>Confirmed</b-badge>
                  </b-list-group-item>

                  <b-list-group-item
                    class="d-flex justify-content-between align-items-center"
                  >
                    Tykan
                    <b-badge variant="primary" pill>Confirmed</b-badge>
                  </b-list-group-item>
                </b-list-group>
              </div>
              <div
                class="tab-pane fade"
                id="v-pills-hades-company"
                role="tabpanel"
                aria-labelledby="v-pills-hades-company-tab"
              >
                <b-list-group>
                  <b-list-group-item
                    class="d-flex justify-content-between align-items-center"
                  >
                    Major General
                    <b-badge variant="success" pill>Confirmed</b-badge>
                  </b-list-group-item>

                  <b-list-group-item
                    class="d-flex justify-content-between align-items-center"
                  >
                    Tykan
                    <b-badge variant="primary" pill>Confirmed</b-badge>
                  </b-list-group-item>
                </b-list-group>
              </div>
              <div
                class="tab-pane fade"
                id="v-pills-hermes-company"
                role="tabpanel"
                aria-labelledby="v-pills-hermes-company-tab"
              >
                <b-list-group>
                  <b-list-group-item
                    class="d-flex justify-content-between align-items-center"
                  >
                    Major General
                    <b-badge variant="success" pill>Confirmed</b-badge>
                  </b-list-group-item>

                  <b-list-group-item
                    class="d-flex justify-content-between align-items-center"
                  >
                    Tykan
                    <b-badge variant="primary" pill>Confirmed</b-badge>
                  </b-list-group-item>
                  <b-list-group-item
                    class="d-flex justify-content-between align-items-center"
                  >
                    Major General
                    <b-badge variant="success" pill>Confirmed</b-badge>
                  </b-list-group-item>

                  <b-list-group-item
                    class="d-flex justify-content-between align-items-center"
                  >
                    Tykan
                    <b-badge variant="primary" pill>Confirmed</b-badge>
                  </b-list-group-item>
                  <b-list-group-item
                    class="d-flex justify-content-between align-items-center"
                  >
                    Major General
                    <b-badge variant="success" pill>Confirmed</b-badge>
                  </b-list-group-item>

                  <b-list-group-item
                    class="d-flex justify-content-between align-items-center"
                  >
                    Tykan
                    <b-badge variant="primary" pill>Confirmed</b-badge>
                  </b-list-group-item>
                  <b-list-group-item
                    class="d-flex justify-content-between align-items-center"
                  >
                    Major General
                    <b-badge variant="success" pill>Confirmed</b-badge>
                  </b-list-group-item>

                  <b-list-group-item
                    class="d-flex justify-content-between align-items-center"
                  >
                    Tykan
                    <b-badge variant="primary" pill>Confirmed</b-badge>
                  </b-list-group-item>
                  <b-list-group-item
                    class="d-flex justify-content-between align-items-center"
                  >
                    Major General
                    <b-badge variant="success" pill>Confirmed</b-badge>
                  </b-list-group-item>

                  <b-list-group-item
                    class="d-flex justify-content-between align-items-center"
                  >
                    Tykan
                    <b-badge variant="primary" pill>Confirmed</b-badge>
                  </b-list-group-item>
                  <b-list-group-item
                    class="d-flex justify-content-between align-items-center"
                  >
                    Major General
                    <b-badge variant="success" pill>Confirmed</b-badge>
                  </b-list-group-item>

                  <b-list-group-item
                    class="d-flex justify-content-between align-items-center"
                  >
                    Tykan
                    <b-badge variant="primary" pill>Confirmed</b-badge>
                  </b-list-group-item>
                  <b-list-group-item
                    class="d-flex justify-content-between align-items-center"
                  >
                    Major General
                    <b-badge variant="success" pill>Confirmed</b-badge>
                  </b-list-group-item>

                  <b-list-group-item
                    class="d-flex justify-content-between align-items-center"
                  >
                    Tykan
                    <b-badge variant="primary" pill>Confirmed</b-badge>
                  </b-list-group-item>
                  <b-list-group-item
                    class="d-flex justify-content-between align-items-center"
                  >
                    Major General
                    <b-badge variant="success" pill>Confirmed</b-badge>
                  </b-list-group-item>

                  <b-list-group-item
                    class="d-flex justify-content-between align-items-center"
                  >
                    Tykan
                    <b-badge variant="primary" pill>Confirmed</b-badge>
                  </b-list-group-item>
                  <b-list-group-item
                    class="d-flex justify-content-between align-items-center"
                  >
                    Major General
                    <b-badge variant="success" pill>Confirmed</b-badge>
                  </b-list-group-item>

                  <b-list-group-item
                    class="d-flex justify-content-between align-items-center"
                  >
                    Tykan
                    <b-badge variant="primary" pill>Confirmed</b-badge>
                  </b-list-group-item>
                  <b-list-group-item
                    class="d-flex justify-content-between align-items-center"
                  >
                    Major General
                    <b-badge variant="success" pill>Confirmed</b-badge>
                  </b-list-group-item>

                  <b-list-group-item
                    class="d-flex justify-content-between align-items-center"
                  >
                    Tykan
                    <b-badge variant="primary" pill>Confirmed</b-badge>
                  </b-list-group-item>
                  <b-list-group-item
                    class="d-flex justify-content-between align-items-center"
                  >
                    Major General
                    <b-badge variant="success" pill>Confirmed</b-badge>
                  </b-list-group-item>

                  <b-list-group-item
                    class="d-flex justify-content-between align-items-center"
                  >
                    Tykan
                    <b-badge variant="primary" pill>Confirmed</b-badge>
                  </b-list-group-item>
                </b-list-group>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/header/HeaderComponent.vue";

export default {
  components: {
    HeaderComponent
  },
  props: [],
  data() {
    return {
      event: null
    };
  },
  mounted() {
    this.getEventInfo();
  },
  created() {},
  computed: {
    attendanceClass: function() {
      return {
        "text-white": this.$store.getters.getDarkMode
      };
    }
  },
  methods: {
    getEventInfo() {
      this.event = this.$store.getters.getEventInfo;
    }
  },
  watch: {}
};
</script>

<style scoped>
.nav-pills:hover {
  background-color: #fdfdfd00;
}
</style>
