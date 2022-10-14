<template>
  <div class="d--flex">
    <div class="my_bg"></div>
    <div class="vertical--align">
      <v-form ref="form" style="width: 26%">
        <h1 class="title text--center">Log in</h1>
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
          outlined
        ></v-text-field>
        <v-text-field
          v-model="password"
          type="password"
          label="Password"
          required
          outlined
        ></v-text-field>
        <div class="text--center">
          <v-btn class="btn--color" color="#3aada3" rounded>
            Sign in to Tre
          </v-btn>
        </div>
      </v-form>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    password: "",
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
  }),

  methods: {},
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
  width: 40%;
  height: 93vh;
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
</style>
