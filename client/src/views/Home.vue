<template>
  <div class="home">
    <HeaderComponent />
    <b-button variant="success" v-on:click="this.increment">Button</b-button>
    <h2>{{ this.$store.state.count }}</h2>
  </div>
</template>

<script>
// @ is an alias to /src
import AuthService from "./../utils/AuthService";
import HeaderComponent from "@/components/header/HeaderComponent.vue";

export default {
  name: "home",
  components: {
    HeaderComponent
  },
  methods: {
    async getUserInfo() {
      let userInfo = await AuthService.getUserInfo(this.$route.query.d);
      this.$store.dispatch("auth", this.$route.query.d);
      this.$store.dispatch("login", userInfo);
    }
  },
  mounted() {},
  created() {
    if (this.$route.query.d) {
      this.getUserInfo();
    }
  }
};
</script>
