<template>
  <div>
    <v-app-bar color="deep-purple accent-4" dark>
      <v-app-bar-nav-icon class="mobile-view"></v-app-bar-nav-icon>

      <div class="desktop-view d--flex">
        <v-toolbar-title class="mr-10 list-style cursor--pointer">
          <router-link tag="li" class-active="active" to="/dashboard"
            >Dashboard</router-link
          >
        </v-toolbar-title>
        <v-toolbar-title class="mr-10 list-style cursor--pointer"
          ><router-link tag="li" class-active="active" to="/product"
            >Products</router-link
          ></v-toolbar-title
        >
        <v-toolbar-title class="mr-10 list-style cursor--pointer"
          ><router-link tag="li" class-active="active" to="/service"
            >Services</router-link
          ></v-toolbar-title
        >
        <v-toolbar-title class="mr-10 list-style cursor--pointer"
          ><router-link tag="li" class-active="active" to="/contact"
            >Contact Us</router-link
          ></v-toolbar-title
        >
      </div>

      <v-spacer></v-spacer>
      <v-toolbar-title class="mr-10 list-style cursor--pointer">
        <router-link tag="li" class-active="active" to="/login"
          >Login</router-link
        >
      </v-toolbar-title>
      <v-avatar color="primary" size="45">AY</v-avatar>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  methods: {
    getDashboardPage() {
      this.$router.push("/");
    },
    getProductPage() {
      this.$router.push("/product");
    },
    getServicePage() {
      this.$router.push("/service");
    },
    getContactPage() {
      this.$router.push("/contact");
    },
  },
};
</script>

<style lang="scss" scoped>
.desktop-view {
  @media screen and (max-width: 1024px) {
    display: none;
  }
}
.mobile-view {
  @media screen and (min-width: 1024px) {
    visibility: hidden;
  }
}
</style>
