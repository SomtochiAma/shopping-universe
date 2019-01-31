import Vue from "vue";
import Router from "vue-router";
import HomeView from "./components/Home.vue";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Update from "./components/Update";
import Dashboard from "./components/Dashboard";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/signup",
      name: "signup",
      component: Signup
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/home",
      name: "home",
      component: HomeView
    },
    {
      path: "/update/:id",
      name: "update",
      component: Update
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem("token") == null) {
      next({
        path: "/login"
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
