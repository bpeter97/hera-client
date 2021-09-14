<style scoped>
.alert-danger-new {
  background-color: #e23a3a;
  border-radius: 10px;
  color: white;
  box-shadow: 0 2px 0 rgb(90 97 105 / 11%), 0 4px 8px rgb(90 97 105 / 12%),
    0 10px 10px rgb(90 97 105 / 6%), 0 7px 70px rgb(90 97 105 / 10%);
}

.alert-primary-new {
  background-color: #0066ff;
  border-radius: 10px !important;
  color: white;
  box-shadow: 0 2px 0 rgb(90 97 105 / 11%), 0 4px 8px rgb(90 97 105 / 12%),
    0 10px 10px rgb(90 97 105 / 6%), 0 7px 70px rgb(90 97 105 / 10%);
}

.alert-dismissible .close {
  padding: 0;
  color: white;
  opacity: 1 !important;
}

.close:hover,
.close:focus {
  color: #cecece !important;
  opacity: 1 !important;
}
</style>

<script>
export default {
  name: "AlertComponent",
  components: {},
  props: {},
  data() {
    return {
      alerts: [
        {
          message: "Partisan APC patrolling liberation street",
          createdAt: new Date()
        }
      ]
    };
  },
  mounted() {},
  created() {},
  computed: {},
  methods: {},
  watch: {}
};
</script>

<template>
  <div>
    <b-alert
      variant="danger-new"
      v-for="(alert, index) in alerts"
      v-bind:item="alert"
      v-bind:index="index"
      v-bind:key="alert.message"
      dismissible
      show
    >
      <font-awesome-icon icon="exclamation-triangle" class="fa-icon mr-3" />
      {{ alert.message }}
      <font-awesome-icon icon="exclamation-triangle" class="fa-icon ml-3" />
    </b-alert>
  </div>
</template>
