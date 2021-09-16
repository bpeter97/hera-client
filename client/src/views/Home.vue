<style scoped>
.home-jumbotron {
  border-radius: 0%;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)),
    url("./../assets/images/logibackground.jpg");
  background-size: cover;
  height: 100%;
}

.quote {
  padding-top: 62px;
  padding-left: 200px;
  padding-right: 200px;
}

.display-3 {
  margin-top: 40px;
  color: white;
}

.quote-person {
  padding-top: 30px;
  color: white;
}

.quote p {
  font-style: italic;
}
</style>

<template>
  <div class="home">
    <div>
      <b-alert v-if="this.$store.getters.getError" show variant="danger">{{
        this.$store.getters.getError
      }}</b-alert>
      <b-jumbotron
        bg-variant="info"
        text-variant="white"
        class="home-jumbotron"
      >
        <template #header>Hera</template>

        <template #lead>
          <img
            src="./../assets/heralogo-light.png"
            style="max-width: 150px;"
            alt="logo"
          />
          <div class="quote">
            <p>
              “Leaders win through logistics. Vision, sure. Strategy, yes. But
              when you go to war, you need to have both toilet paper and bullets
              at the right place at the right time. In other words, you must win
              through superior logistics.”
            </p>
            <h2 class="quote-person">- Tom Peters</h2>
            <h6 class="text-muted">
              (Rule #3: Leadership Is Confusing As Hell, Fast Company, March
              2001)
            </h6>
          </div>
        </template>

        <hr class="my-4" />
        <p class="pt-4">
          For Foxhole version 0.45.10.4 <br />
          Created by Hartley and Critinator <br />
          Last updated: 9/11/2021
        </p>
      </b-jumbotron>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AuthService from "./../utils/AuthService";
// import HeaderComponent from "@/components/header/HeaderComponent.vue";

export default {
  name: "home",
  components: {},
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
