<template>
  <v-app>
    <Header />
    <router-view />
  </v-app>
</template>

<script>
import Header from "../src/components/Header.vue";
export default {
  components: {
    Header,
  },
  data: () => ({}),
};
</script>
<style lang="scss">
.mr-10 {
  margin-right: 50px;
}
.cursor--pointer {
  cursor: pointer;
}
.d--flex {
  display: flex;
}
.list-style {
  list-style-type: none;
}
.router-link-exact-active {
  color: black;
}
</style>
