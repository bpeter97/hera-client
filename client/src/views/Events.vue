<script>
import "@fullcalendar/core/vdom"; // solves problem with Vite
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import EventService from "./../utils/EventService";

export default {
  name: "events",
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data() {
    return {
      form: {
        title: "",
        date: null,
        time: null,
        color: ""
      },
      companySelector: [
        {
          text: "1stRL Regiment",
          value: "#007bff"
        },
        {
          text: "Regiment Command",
          value: "#ad1457"
        },
        {
          text: "Ares Company",
          value: "#1cb230"
        },
        {
          text: "Hades Company",
          value: "#683ee9"
        },
        {
          text: "Hermes Company",
          value: "#ff8d1a"
        },
        {
          text: "Training Company",
          value: "#00b8d8"
        }
      ],
      eventModalShow: false,
      modalEvent: { title: "", date: null },
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin],
        height: 650,
        initialView: "dayGridMonth",
        eventClick: this.handleEventClicker,
        events: []
      },
      prevRoute: null
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.prevRoute = from;
    });
  },
  methods: {
    setModalEvent: function(event) {
      this.modalEvent = event;
    },
    handleEventClicker: function(info) {
      this.$store.dispatch("setEvent", {
        title: info.event.title,
        date: info.event.start,
        _id: info.event.extendedProps._id,
        members: info.event.extendedProps.members
      });
      this.$router.push("/events/single");
    },
    calendarClass: function() {
      return {
        "col-md-12": true,
        "mt-3": true,
        darkmode: this.$store.getters.getDarkMode ? true : false
      };
    },
    closeNewEventModal: function() {
      this.$bvModal.hide("createEventModal");
    },
    onCreateEvent: function() {
      let event = {
        color: this.form.color,
        date: this.form.date + " " + this.form.time,
        title: this.form.title
      };

      // Send event to backend create event api
      EventService.insertEvent(event);
      this.$bvModal.hide("createEventModal");
    },
    async getAllEvents() {
      // Retrieve all items
      await EventService.getAllEvents().then(events => {
        this.$store.dispatch("setEventsList", events);
      });
    }
  },
  created() {
    this.getAllEvents();
    this.calendarOptions.events = this.$store.getters.getEventsList;
  },
  mounted() {
    this.getAllEvents();
    // Subscribe to new events socket.io
    this.sockets.subscribe("event-change", e => {
      switch (e.change) {
        case "POST":
          // this.calendarOptions.events.push(e.event);
          this.$store.dispatch("addEventToList", e.event);
          this.calendarOptions.events = this.$store.getters.getEventsList;
          break;
        default:
          break;
      }
      this.$forceUpdate();
    });
  }
};
</script>

<template>
  <div class="row">
    <div class="container">
      <div v-bind:class="calendarClass()">
        <b-card title="Event Calendar" id="eventcalendar">
          <div class="card-row">
            <b-badge variant="primary" class="mr-1">1stRL Regiment Op</b-badge>
            <b-badge variant="regiment" class="mr-1">Command Event</b-badge>
            <b-badge variant="ares" class="mr-1">Ares Event</b-badge>
            <b-badge variant="hades" class="mr-1">Hades Event</b-badge>
            <b-badge variant="hermes" class="mr-1">Hermes Event</b-badge>
            <b-badge variant="info">Training Event</b-badge>
          </div>
          <div
            v-if="this.$store.getters.isLeadership"
            class="card-row text-left"
          >
            <b-col lg="4" class="" style="padding: 0px; padding-bottom: 10px;"
              ><b-button v-b-modal.createEventModal size="sm" variant="primary"
                >Create Event</b-button
              ></b-col
            >
          </div>
          <FullCalendar :options="calendarOptions" />
        </b-card>
        <b-modal
          id="createEventModal"
          size="lg"
          title="Create New Event"
          hide-footer
        >
          <!-- <b-form @submit="onCreateEvent"> -->
          <b-form>
            <b-form-group
              id="input-group-1"
              label="Title:"
              label-for="formTitle"
              description="Do not include sensitive information..."
            >
              <b-form-input
                id="formTitle"
                v-model="form.title"
                type="text"
                placeholder="Enter Title of Event"
                required
              ></b-form-input>
            </b-form-group>

            <label for="formDatepicker">Choose a date:</label>
            <b-form-datepicker
              id="formDatepicker"
              v-model="form.date"
              class="mb-2"
            ></b-form-datepicker>

            <label for="formTimepicker">Choose a time:</label>
            <b-form-timepicker
              id="formTimepicker"
              v-model="form.time"
              class="mb-2"
            ></b-form-timepicker>

            <b-form-group id="input-group-3" label="For:" label-for="input-3">
              <b-form-select
                id="input-3"
                v-model="form.color"
                :options="companySelector"
                required
              ></b-form-select>
            </b-form-group>

            <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
              <b-form-checkbox-group
                v-model="form.checked"
                id="checkboxes-4"
                :aria-describedby="ariaDescribedby"
              >
              </b-form-checkbox-group>
            </b-form-group>

            <b-button
              type="button"
              v-on:click="onCreateEvent"
              variant="primary"
              class="mx-1"
              >Submit</b-button
            >
            <b-button
              type="reset"
              v-on:click="closeNewEventModal"
              variant="danger"
              class="mx-1"
              >Close</b-button
            >
          </b-form>
        </b-modal>
      </div>
    </div>
  </div>
</template>

<style>
.date-text-event {
  font-size: 1rem;
}

.badge-regiment {
  background-color: #ad1457;
}

.badge-ares {
  background-color: #1cb230;
}

.badge-hermes {
  background-color: #ff8d1a;
}

.badge-hades {
  background-color: #683ee9;
}

.darkmode .fc a,
.darkmode .fc-toolbar-title {
  color: white !important;
}

.darkmode #eventcalendar {
  background-color: rgba(138, 138, 138, 0.479);
}

.darkmode .card-title {
  color: white;
}
</style>
