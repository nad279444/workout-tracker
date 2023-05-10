import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue"
import  Register from "../views/Register.vue"
import Create from "../views/Create.vue"
import ViewWorkout from "../views/ViewWorkout"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home",
      auth: false,
    },
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
    meta: {
      title: "Login",
      auth: false,
    },
  },
 {
    path: "/Register",
    name: "Register",
    component: Register,
    meta: {
      title: "Register",
      auth: false,
    },
 },
 {
  path: "/Create",
  name: "Create",
  component: Create,
  meta: {
    title: "Create",
    auth: false,
  }
},
{
  path: "/View-Workout/:workoutId",
  name: "ViewWorkout",
  component: ViewWorkout,
  meta: {
    title: "ViewWorkout",
    auth: false,
  },
}
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Change document titles
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} |  Tracker`;
  next();
});
// Route guard for auth routes

export default router;
