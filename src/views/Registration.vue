<template>
  <v-card max-width="95%" class="card--css">
    <img src="../assets/logo.png" alt="" class="logo--css" />
    <div class="d--flex">
      <div class="my_bg vertical--align">
        <div>
          <h1>Welcome Back!</h1>
          <div class="margin--text">
            To keep connected with us please login with your personal info
          </div>
          <v-btn
            class="btn--color"
            outlined
            color="#ffff"
            rounded
            @click="$router.push('/login')"
          >
            SIGN IN
          </v-btn>
        </div>
      </div>
      <div class="vertical--align">
        <v-form ref="form" style="width: 26%">
          <h1 class="title text--center">Create Account</h1>
          <v-text-field
            v-model="form.name"
            label="Name"
            required
            outlined
          ></v-text-field>
          <v-text-field
            v-model="form.number"
            type="number"
            label="Mobile no."
            required
            outlined
          ></v-text-field>
          <v-text-field
            v-model="form.email"
            :rules="emailRules"
            label="E-mail"
            required
            outlined
          ></v-text-field>

          <v-text-field
            v-model="form.password"
            type="password"
            label="Password"
            required
            outlined
          ></v-text-field>
          <div class="text--center">
            <v-btn class="btn--color" color="#3aada3" rounded @click="sendOTP">
              SIGN UP
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
    valid: true,
    form: {
      name: "",
      password: "",
      number: null,
      email: "",
    },
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
  }),

  methods: {
    sendOTP() {
      if (FormData) {
        console.log("formData", this.form);
        this.$router.push("/verifyOtp");
      }
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
