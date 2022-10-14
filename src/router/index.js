import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("../views/Registration.vue"),
  },
  {
    path: "/login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/verifyOtp",
    component: () => import("../views/VerifyOTP.vue"),
  },
  {
    path: "/dashboard",
    component: () => import("../views/Dashboard.vue"),
  },
  {
    path: "/product",
    component: () => import("../views/Product.vue"),
  },
  {
    path: "/service",
    component: () => import("../views/Service.vue"),
  },
  {
    path: "/contact",
    component: () => import("../views/Contact.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
