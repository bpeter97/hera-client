<style scoped>
@import "./CounterSectionComponent.css";
</style>

<script>
export default {
  name: "CounterSectionComponent",
  data() {
    return {
      error: ""
    };
  },
  props: {
    title: String,
    counters: Object
  }
};
</script>

<template>
  <div class="row">
    <div class="col-lg col-md-6 col-sm-6 mb-4">
      <div class="stats-small stats-small--1 card card-small">
        <div class="card-body p-0 d-flex bg-warning">
          <div class="d-flex flex-column m-auto">
            <div class="stats-small__data text-center">
              <span class="stats-small__label text-uppercase color-white"
                >Pending Requests</span
              >
              <h6 class="stats-small__value count my-3">
                {{ this.counters.totalPending }}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg col-md-6 col-sm-6 mb-4">
      <div class="stats-small stats-small--1 card card-small">
        <div class="card-body p-0 bg-primary d-flex">
          <div class="d-flex flex-column m-auto">
            <div class="stats-small__data text-center">
              <span class="stats-small__label text-uppercase"
                >Open Requests</span
              >
              <h6 class="stats-small__value count my-3">
                {{ this.counters.totalOpen }}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg col-md-6 col-sm-6 mb-4">
      <div class="stats-small stats-small--1 card card-small">
        <div class="card-body p-0 bg-success d-flex">
          <div class="d-flex flex-column m-auto">
            <div class="stats-small__data text-center">
              <span class="stats-small__label text-uppercase color-white"
                >Completed Requests</span
              >
              <h6 class="stats-small__value count my-3">
                {{ this.counters.totalCompleted }}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg col-md-6 col-sm-6 mb-4">
      <div class="stats-small stats-small--1 card card-small">
        <div class="card-body p-0 bg-info d-flex">
          <div class="d-flex flex-column m-auto">
            <div class="stats-small__data text-center">
              <span class="stats-small__label text-uppercase"
                >Items/Crates Delivered</span
              >
              <h6 class="stats-small__value count my-3">
                {{ this.counters.totalDelivered }}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
