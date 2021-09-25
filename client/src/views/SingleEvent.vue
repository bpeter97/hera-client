<template>
  <div id="eventpage" class="h-100">
    <div class="container">
      <HeaderComponent
        v-if="this.event"
        :label="this.event.title"
        :subString="this.event.date"
      />
      <div class="col-mb-12">
        <div class="row">
          <b-button
            v-if="!isRegistered"
            type="button"
            variant="primary"
            class="ml-3"
            v-on:click="registerForEvent()"
            >Register for Event</b-button
          >
          <b-button
            v-if="!isMaybe && isRegistered"
            type="button"
            variant="primary"
            class="ml-3"
            v-on:click="setStatus()"
            >Set Status Maybe</b-button
          >
          <b-button
            v-if="!isConfirmed && isRegistered"
            type="button"
            variant="success"
            class="ml-3"
            v-on:click="setConfirm()"
            >Set Status Confirmed</b-button
          >
          <b-button
            v-if="isRegistered"
            type="button"
            variant="danger"
            class="ml-3"
            v-on:click="withdraw()"
            >Withdraw From Event</b-button
          >
        </div>
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
                <!-- Regiment Command Table -->
                <b-table
                  striped
                  hover
                  dark
                  v-if="this.$store.getters.getDarkMode"
                  :items="regimentCommand"
                  :fields="fields"
                >
                  <template #cell(status)="data">
                    <span class="badge-text">
                      <b-badge
                        variant="success"
                        v-if="data.value === 'Confirmed'"
                        >{{ data.value }}</b-badge
                      >
                      <b-badge
                        variant="warning"
                        v-else-if="data.value === 'Maybe'"
                        >{{ data.value }}</b-badge
                      >
                      <b-badge
                        variant="primary"
                        v-else-if="data.value === 'Registered'"
                        >{{ data.value }}</b-badge
                      >
                    </span>
                  </template>
                </b-table>
                <b-table
                  striped
                  hover
                  v-else
                  :items="regimentCommand"
                  :fields="fields"
                >
                  <template #cell(status)="data">
                    <span class="badge-text">
                      <b-badge
                        variant="success"
                        v-if="data.value === 'Confirmed'"
                        >{{ data.value }}</b-badge
                      >
                      <b-badge
                        variant="warning"
                        v-else-if="data.value === 'Maybe'"
                        >{{ data.value }}</b-badge
                      >
                      <b-badge
                        variant="primary"
                        v-else-if="data.value === 'Registered'"
                        >{{ data.value }}</b-badge
                      >
                    </span>
                  </template>
                </b-table>
                <!-- Regiment Command Table End -->
              </div>
              <div
                class="tab-pane fade"
                id="v-pills-ares-company"
                role="tabpanel"
                aria-labelledby="v-pills-ares-company-tab"
              >
                <b-table
                  striped
                  hover
                  :items="ares"
                  :fields="fields"
                  v-if="this.$store.getters.getDarkMode"
                  dark
                >
                  <template #cell(status)="data">
                    <span class="badge-text">
                      <b-badge
                        variant="success"
                        v-if="data.value === 'Confirmed'"
                        >{{ data.value }}</b-badge
                      >
                      <b-badge
                        variant="warning"
                        v-else-if="data.value === 'Maybe'"
                        >{{ data.value }}</b-badge
                      >
                      <b-badge
                        variant="primary"
                        v-else-if="data.value === 'Registered'"
                        >{{ data.value }}</b-badge
                      >
                    </span>
                  </template>
                </b-table>
                <b-table striped hover :items="ares" :fields="fields" v-else>
                  <template #cell(status)="data">
                    <span class="badge-text">
                      <b-badge
                        variant="success"
                        v-if="data.value === 'Confirmed'"
                        >{{ data.value }}</b-badge
                      >
                      <b-badge
                        variant="warning"
                        v-else-if="data.value === 'Maybe'"
                        >{{ data.value }}</b-badge
                      >
                      <b-badge
                        variant="primary"
                        v-else-if="data.value === 'Registered'"
                        >{{ data.value }}</b-badge
                      >
                    </span>
                  </template>
                </b-table>
              </div>
              <div
                class="tab-pane fade"
                id="v-pills-hades-company"
                role="tabpanel"
                aria-labelledby="v-pills-hades-company-tab"
              >
                <b-table
                  striped
                  hover
                  :items="hades"
                  :fields="fields"
                  v-if="this.$store.getters.getDarkMode"
                  dark
                >
                  <template #cell(status)="data">
                    <span class="badge-text">
                      <b-badge
                        variant="success"
                        v-if="data.value === 'Confirmed'"
                        >{{ data.value }}</b-badge
                      >
                      <b-badge
                        variant="warning"
                        v-else-if="data.value === 'Maybe'"
                        >{{ data.value }}</b-badge
                      >
                      <b-badge
                        variant="primary"
                        v-else-if="data.value === 'Registered'"
                        >{{ data.value }}</b-badge
                      >
                    </span>
                  </template>
                </b-table>
                <b-table striped hover :items="hades" :fields="fields" v-else>
                  <template #cell(status)="data">
                    <span class="badge-text">
                      <b-badge
                        variant="success"
                        v-if="data.value === 'Confirmed'"
                        >{{ data.value }}</b-badge
                      >
                      <b-badge
                        variant="warning"
                        v-else-if="data.value === 'Maybe'"
                        >{{ data.value }}</b-badge
                      >
                      <b-badge
                        variant="primary"
                        v-else-if="data.value === 'Registered'"
                        >{{ data.value }}</b-badge
                      >
                    </span>
                  </template>
                </b-table>
              </div>
              <div
                class="tab-pane fade"
                id="v-pills-hermes-company"
                role="tabpanel"
                aria-labelledby="v-pills-hermes-company-tab"
              >
                <b-table
                  striped
                  hover
                  :items="hermes"
                  :fields="fields"
                  v-if="this.$store.getters.getDarkMode"
                  dark
                >
                  <template #cell(status)="data">
                    <span class="badge-text">
                      <b-badge
                        variant="success"
                        v-if="data.value === 'Confirmed'"
                        >{{ data.value }}</b-badge
                      >
                      <b-badge
                        variant="warning"
                        v-else-if="data.value === 'Maybe'"
                        >{{ data.value }}</b-badge
                      >
                      <b-badge
                        variant="primary"
                        v-else-if="data.value === 'Registered'"
                        >{{ data.value }}</b-badge
                      >
                    </span>
                  </template>
                </b-table>
                <b-table striped hover :items="hermes" :fields="fields" v-else>
                  <template #cell(status)="data">
                    <span class="badge-text">
                      <b-badge
                        variant="success"
                        v-if="data.value === 'Confirmed'"
                        >{{ data.value }}</b-badge
                      >
                      <b-badge
                        variant="warning"
                        v-else-if="data.value === 'Maybe'"
                        >{{ data.value }}</b-badge
                      >
                      <b-badge
                        variant="primary"
                        v-else-if="data.value === 'Registered'"
                        >{{ data.value }}</b-badge
                      >
                    </span>
                  </template>
                </b-table>
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
import EventService from "./../utils/EventService";

export default {
  name: "SingleEvent",
  components: {
    HeaderComponent
  },
  props: [],
  data() {
    return {
      fields: [
        {
          key: "member.username",
          label: "Member",
          sortable: true
        },
        {
          key: "status",
          sortable: true
        }
      ],
      event: null,
      regimentCommand: [],
      hermes: [],
      hades: [],
      ares: [],
      isRegistered: false,
      isMaybe: false,
      isConfirmed: false
    };
  },
  watch: {},
  mounted() {
    this.sockets.subscribe("event-change", e => {
      this.$store.dispatch("setEvent", e.event);

      switch (e.change) {
        case "REGISTER":
          this.getEventInfo();
          break;
        case "PATCH":
          this.getEventInfo();
          break;
        default:
          break;
      }
      // this.getEventInfo();
    });
  },
  created() {
    this.getEventInfo();
  },
  computed: {
    attendanceClass: function() {
      return {
        "text-white": this.$store.getters.getDarkMode
      };
    }
  },
  methods: {
    registerForEvent() {
      let register = {
        id: this.$store.getters.getEventInfo._id,
        user: this.$store.getters.getUserDiscordId
      };

      EventService.registerEvent(register);
    },
    setStatus() {
      this.$store.getters.getEventInfo.members.forEach(u => {
        if (u.member.discordId === this.$store.getters.getUserDiscordId) {
          u.status = "Maybe";
        }
      });

      // this.event.members = this.event.members.map(u => {
      //   if (u.member.discordId === this.$store.getters.getUserDiscordId) {
      //     u.status = "Maybe";
      //     return u;
      //   } else {
      //     return u;
      //   }
      // });

      EventService.updateStatus(this.$store.getters.getEventInfo);
    },
    setConfirm() {
      this.$store.getters.getEventInfo.members.forEach(u => {
        if (u.member.discordId === this.$store.getters.getUserDiscordId) {
          u.status = "Confirmed";
        }
      });

      // this.event.members = this.event.members.map(u => {
      //   if (u.member.discordId === this.$store.getters.getUserDiscordId) {
      //     u.status = "Confirmed";
      //     return u;
      //   } else {
      //     return u;
      //   }
      // });

      EventService.setConfirmed(this.$store.getters.getEventInfo);
    },
    withdraw() {
      let e = this.$store.getters.getEventInfo;

      this.isRegistered = false;
      this.isMaybe = false;
      this.isConfirmed = false;

      e.members = e.members.filter(u => {
        return u.member.discordId != this.$store.getters.getUserDiscordId;
      });

      EventService.withdraw(e);
      this.$store.dispatch("setEvent", null);
      this.$router.push("/events");
    },
    checkStatus() {
      let e = this.$store.getters.getEventInfo;
      e.members.forEach(u => {
        if (u.member.discordId && u.status === "Registered") {
          this.isRegistered = true;
          this.isMaybe = false;
          this.isConfirmed = false;
        } else if (u.member.discordId && u.status === "Maybe") {
          this.isRegistered = true;
          this.isMaybe = true;
          this.isConfirmed = false;
        } else if (u.member.discordId && u.status === "Confirmed") {
          this.isRegistered = true;
          this.isMaybe = false;
          this.isConfirmed = true;
        } else {
          this.isRegistered = false;
          this.isMaybe = false;
          this.isConfirmed = false;
        }
      });
    },
    getEventInfo() {
      this.event = this.$store.getters.getEventInfo;
      this.filterMembers();
      this.checkStatus();
    },
    filterMembers() {
      this.regimentCommand = [];
      this.ares = [];
      this.hades = [];
      this.hermes = [];

      let members = this.event.members;
      members.forEach(u => {
        if (u.member.roles.includes("Regiment Command")) {
          this.regimentCommand.push(u);
        } else if (u.member.roles.includes("Ares Company")) {
          this.ares.push(u);
        } else if (u.member.roles.includes("Hades Company")) {
          this.hades.push(u);
        } else if (u.member.roles.includes("Hermes Company")) {
          this.hermes.push(u);
        }
      });
    }
  }
};
</script>

<style scoped>
.nav-pills:hover {
  background-color: #fdfdfd00;
}

.badge-text {
  font-size: 18px !important;
}

#v-pills-regiment-command-tab.active {
  background-color: #ad1457;
}
#v-pills-ares-company-tab.active {
  background-color: #1cb230;
}
#v-pills-hades-company-tab.active {
  background-color: #683ee9;
}
#v-pills-hermes-company-tab.active {
  background-color: #ff8d1a;
}
</style>
