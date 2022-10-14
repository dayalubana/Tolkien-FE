<template>
  <v-card max-width="95%" class="card--css">
    <img src="../assets/logo.png" alt="" class="logo--css" />
    <div class="d--flex">
      <div class="my_bg"></div>
      <div class="vertical--align">
        <v-form ref="form" style="width: 26%">
          <h1 class="title text--center">Verify OTP</h1>
          <v-text-field
            v-model="otp"
            type="number"
            label="OTP"
            required
            outlined
          ></v-text-field>
          <div class="text--center">
            <v-btn
              class="btn--color"
              color="#3aada3"
              rounded
              @click="verifyOTP"
            >
              Verify OTP
            </v-btn>
          </div>
        </v-form>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    otp: null,
    text: "Your registration is successfully completed. Please login!",
    snackbar: false,
    timeout: 3000,
  }),

  methods: {
    verifyOTP() {
      console.log("otp", this.otp);
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="scss" scoped>
.my_bg {
  background-image: linear-gradient(
      45deg,
      rgba(139, 224, 196, 0.5),
      rgba(58, 197, 154, 0.5),
      rgba(6, 153, 113, 0.5)
    ),
    url("../assets/pic.jpg");
  width: 40% !important;
  height: 85vh;
  text-align: center;
  color: #fff;
}
.vertical--align {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.title {
  font-size: 35px !important;
  color: #3aada3;
  margin-bottom: 30px !important;
  font-weight: 600 !important;
}
.btn--color {
  color: white;
  padding: 20px 50px !important;
}
.text--center {
  text-align: center;
}
.margin--text {
  margin: 1.1rem 8rem;
}
.card--css {
  margin: 70px 60px;
}
.logo--css {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 50px;
  height: 50px;
}
</style>
