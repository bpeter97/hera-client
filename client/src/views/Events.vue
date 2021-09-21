<script>
import "@fullcalendar/core/vdom"; // solves problem with Vite
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data() {
    return {
      eventModalShow: false,
      modalEvent: { title: "", date: null },
      calendarOptions: {
        // themeSystem: "bootstrap",
        plugins: [dayGridPlugin, interactionPlugin],
        height: 650,
        initialView: "dayGridMonth",
        eventClick: this.handleEventClicker,
        events: [
          {
            title: "Logi Op",
            date: "2021-09-18",
            id: 1234,
            signedUp: ["Critinator", "Hartley", "Don Karnage", "Chikawowwow"],
            confirmed: ["Critinator", "Hartley", "Don Karnage"],
            maybe: ["Chikawowwow"]
          },
          {
            title: "Operation Build Olympus",
            date: "2021-09-10",
            id: 1235,
            signedUp: ["Critinator", "Don Karnage", "Chikawowwow"],
            confirmed: ["Critinator", "Don Karnage"],
            maybe: ["CatGod"]
          }
        ]
      }
    };
  },
  methods: {
    setModalEvent: function(event) {
      this.modalEvent = event;
    },
    handleEventClicker: function(info) {
      this.$store.dispatch("setEvent", {
        title: info.event.title,
        date: info.event.start,
        id: info.event.id,
        signedUp: info.event.extendedProps.signedUp,
        confirmed: info.event.extendedProps.confirmed,
        maybe: info.event.extendedProps.maybe
      });
      this.$router.push("/events/single");
    }
  },
  created() {
    // let date = new Date();
    // this.modalEvent.date = date;
  }
};
</script>

<template>
  <div class="row">
    <div class="container">
      <div class="col-md-12 mt-3">
        <b-card title="Event Calendar">
          <FullCalendar :options="calendarOptions" />
          <b-modal size="lg" v-model="eventModalShow" title="Event Details">
            <!-- <ul class="list-group-horizontal">
              <li class="list-group-item">
                Critinator
                <span class="badge badge-success badge-pill">Confirmed</span>
              </li>
              <li class="list-group-item">
                Hartley
                <span class="badge badge-warning badge-pill">Maybe</span>
              </li>
              <li class="list-group-item">
                Don Karnage
                <span class="badge badge-success badge-pill">Confirmed</span>
              </li>
              <li class="list-group-item">
                Lucifer Morningstar
                <span class="badge badge-success badge-pill">Confirmed</span>
              </li>
            </ul>
            <div class="dropdown-divider"></div>
            Ares Company
            <ul class="list-group-horizontal">
              <li class="list-group-item">
                Critinator
                <span class="badge badge-success badge-pill">Confirmed</span>
              </li>
              <li class="list-group-item">
                Hartley
                <span class="badge badge-success badge-pill">Confirmed</span>
              </li>
              <li class="list-group-item">
                Don Karnage
                <span class="badge badge-success badge-pill">Confirmed</span>
              </li>
              <li class="list-group-item">
                Lucifer Morningstar
                <span class="badge badge-success badge-pill">Confirmed</span>
              </li>
              <li class="list-group-item">
                Don Karnage
                <span class="badge badge-success badge-pill">Confirmed</span>
              </li>
              <li class="list-group-item">
                Don Karnage
                <span class="badge badge-success badge-pill">Confirmed</span>
              </li>
              <li class="list-group-item">
                Don Karnage
                <span class="badge badge-success badge-pill">Confirmed</span>
              </li>
              <li class="list-group-item">
                Don Karnage
                <span class="badge badge-success badge-pill">Confirmed</span>
              </li>
              <li class="list-group-item">
                Don Karnage
                <span class="badge badge-success badge-pill">Confirmed</span>
              </li>
              <li class="list-group-item">
                Don Karnage
                <span class="badge badge-success badge-pill">Confirmed</span>
              </li>
              <li class="list-group-item">
                Don Karnage
                <span class="badge badge-success badge-pill">Confirmed</span>
              </li>
            </ul>
            <div class="dropdown-divider"></div>
            Hades Company
            <ul class="list-group-horizontal">
              <li class="list-group-item">
                Critinator
                <span class="badge badge-success badge-pill">Confirmed</span>
              </li>
              <li class="list-group-item">
                Hartley
                <span class="badge badge-success badge-pill">Confirmed</span>
              </li>
              <li class="list-group-item">
                Don Karnage
                <span class="badge badge-success badge-pill">Confirmed</span>
              </li>
              <li class="list-group-item">
                Lucifer Morningstar
                <span class="badge badge-success badge-pill">Confirmed</span>
              </li>
              <li class="list-group-item">
                Don Karnage
                <span class="badge badge-success badge-pill">Confirmed</span>
              </li>
              <li class="list-group-item">
                Don Karnage
                <span class="badge badge-success badge-pill">Confirmed</span>
              </li>
              <li class="list-group-item">
                Don Karnage
                <span class="badge badge-success badge-pill">Confirmed</span>
              </li>
              <li class="list-group-item">
                Don Karnage
                <span class="badge badge-success badge-pill">Confirmed</span>
              </li>
              <li class="list-group-item">
                Don Karnage
                <span class="badge badge-success badge-pill">Confirmed</span>
              </li>
              <li class="list-group-item">
                Don Karnage
                <span class="badge badge-success badge-pill">Confirmed</span>
              </li>
              <li class="list-group-item">
                Don Karnage
                <span class="badge badge-success badge-pill">Confirmed</span>
              </li>
            </ul>
            <div class="dropdown-divider"></div>
            Hermes Company
            <ul class="list-group-horizontal">
              <li class="list-group-item">
                Critinator
                <span class="badge badge-success badge-pill">Confirmed</span>
              </li>
              <li class="list-group-item">
                Hartley
                <span class="badge badge-success badge-pill">Confirmed</span>
              </li>
              <li class="list-group-item">
                Don Karnage
                <span class="badge badge-success badge-pill">Confirmed</span>
              </li>
              <li class="list-group-item">
                Lucifer Morningstar
                <span class="badge badge-success badge-pill">Confirmed</span>
              </li>
              <li class="list-group-item">
                Don Karnage
                <span class="badge badge-success badge-pill">Confirmed</span>
              </li>
              <li class="list-group-item">
                Don Karnage
                <span class="badge badge-success badge-pill">Confirmed</span>
              </li>
              <li class="list-group-item">
                Don Karnage
                <span class="badge badge-success badge-pill">Confirmed</span>
              </li>
              <li class="list-group-item">
                Don Karnage
                <span class="badge badge-success badge-pill">Confirmed</span>
              </li>
              <li class="list-group-item">
                Don Karnage
                <span class="badge badge-success badge-pill">Confirmed</span>
              </li>
              <li class="list-group-item">
                Don Karnage
                <span class="badge badge-success badge-pill">Confirmed</span>
              </li>
              <li class="list-group-item">
                Don Karnage
                <span class="badge badge-success badge-pill">Confirmed</span>
              </li>
            </ul> -->
          </b-modal>
        </b-card>
      </div>
    </div>
  </div>
</template>

<style>
.date-text-event {
  font-size: 1rem;
}
</style>
