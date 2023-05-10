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
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
 {
    path: "/Register",
    name: "Register",
    component: Register,
 },
 {
  path: "/Create",
  name: "Create",
  component: Create,
},
{
  path: "/View-Workout/:workoutId",
  name: "ViewWorkout",
  component: ViewWorkout,
}
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Change document titles

// Route guard for auth routes

export default router;
