<template>
  <div class="home">
    <HeaderComponent />
    <b-button variant="success" v-on:click="this.increment">Button</b-button>
    <h2>{{ this.$store.state.count }}</h2>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComponent from "@/components/header/HeaderComponent.vue";

export default {
  name: "home",
  components: {
    HeaderComponent
  },
  methods: {
    increment() {
      this.$store.dispatch("increment");
    }
  },
  mounted() {}
};
</script>
